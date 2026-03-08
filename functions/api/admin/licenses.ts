/**
 * OnriviPrompt Admin License Management API
 * GET /api/admin/licenses - 전체 라이선스 목록 조회
 * POST /api/admin/licenses - 수동 라이선스 발급
 */

import { generateLicenseKey } from '../../utils/license';

interface Env {
    DB: D1Database;
    ADMIN_USER?: string; // Cloudflare 환경변수
    ADMIN_PASS?: string; // Cloudflare 환경변수
}

// Basic Auth 인증 체크 헬퍼
const authenticate = (request: Request, env: Env) => {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Basic ')) return false;

    try {
        const base64 = authHeader.split(' ')[1];
        const decoded = atob(base64);
        const [user, pass] = decoded.split(':');

        const adminUser = env.ADMIN_USER || 'admin';
        const adminPass = env.ADMIN_PASS || 'admin123';

        return user === adminUser && pass === adminPass;
    } catch {
        return false;
    }
};

const unauthorizedResponse = () => new Response(
    JSON.stringify({ error: 'Unauthorized' }),
    {
        status: 401,
        headers: {
            'Content-Type': 'application/json',
            'WWW-Authenticate': 'Basic realm="Admin API"'
        }
    }
);

// GET: 라이선스 목록 조회
export const onRequestGet: PagesFunction<Env> = async (context) => {
    if (!authenticate(context.request, context.env)) {
        return unauthorizedResponse();
    }

    try {
        const { results } = await context.env.DB.prepare(
            'SELECT * FROM licenses ORDER BY issued_at DESC'
        ).all();

        return new Response(JSON.stringify(results), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};

// POST: 수동 라이선스 발급
export const onRequestPost: PagesFunction<Env> = async (context) => {
    if (!authenticate(context.request, context.env)) {
        return unauthorizedResponse();
    }

    try {
        const { email, plan } = await context.request.json() as any;

        if (!email) {
            return new Response(JSON.stringify({ error: 'Email is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const licenseKey = generateLicenseKey();

        await context.env.DB.prepare(
            'INSERT INTO licenses (customer_email, license_key, plan_type) VALUES (?, ?, ?)'
        ).bind(email, licenseKey, plan || 'Pro').run();

        return new Response(JSON.stringify({ success: true, key: licenseKey }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
