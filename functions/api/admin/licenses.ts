/**
 * OnriviPrompt Admin License Management API
 * GET /api/admin/licenses - 전체 라이선스 목록 조회
 * POST /api/admin/licenses - 수동 라이선스 발급
 */

import { generateLicenseKey } from '../../utils/license';

interface Env {
    DB: D1Database;
}

// GET: 라이선스 목록 조회
export const onRequestGet: PagesFunction<Env> = async (context) => {
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
