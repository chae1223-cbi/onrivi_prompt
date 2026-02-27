/**
 * OnriviPrompt License Verification API
 * GET /api/verify?key=ONRIVI-XXXX-XXXX-XXXX
 */

interface Env {
    DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
    const { searchParams } = new URL(context.request.url);
    const key = searchParams.get('key');

    if (!key) {
        return new Response(JSON.stringify({ error: 'License key is required' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        // 1. 라이선스 정보 조회
        const license = await context.env.DB.prepare(
            'SELECT * FROM licenses WHERE license_key = ? AND status = "active"'
        ).bind(key).first();

        if (!license) {
            return new Response(JSON.stringify({ valid: false, message: 'Invalid or inactive license key' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // 2. 인증 로그 기록 (부정 사용 방지)
        const ip = context.request.headers.get('cf-connecting-ip') || 'unknown';
        const ua = context.request.headers.get('user-agent') || 'unknown';

        await context.env.DB.prepare(
            'INSERT INTO activation_logs (license_key, ip_address, device_info) VALUES (?, ?, ?)'
        ).bind(key, ip, ua).run();

        // 3. 마지막 인증 시간 업데이트
        await context.env.DB.prepare(
            'UPDATE licenses SET last_verified_at = CURRENT_TIMESTAMP WHERE license_key = ?'
        ).bind(key).run();

        return new Response(JSON.stringify({
            valid: true,
            plan: (license as any).plan_type,
            customer: (license as any).customer_email
        }), {
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
