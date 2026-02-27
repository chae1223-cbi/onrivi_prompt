/**
 * OnriviPrompt Paddle Webhook Receiver
 * POST /api/webhook
 */

import { generateLicenseKey, sendLicenseEmail } from '../utils/license';

interface Env {
    DB: D1Database;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    try {
        const payload: any = await context.request.json();

        // Paddle Webhook 이벤트 처리 (구현 예시: subscription.created 또는 transaction.completed)
        // 실제 환경에서는 Paddle 시그니처 검증 로직이 추가되어야 함

        if (payload.event_type === 'transaction.completed' || payload.event_type === 'subscription.created') {
            const email = payload.data?.customer?.email || payload.data?.user_email;
            const orderId = payload.data?.id || payload.data?.order_id;

            if (!email) throw new Error('Customer email not found in payload');

            // 1. 거래 내역 중복 체크
            const existingTx = await context.env.DB.prepare(
                'SELECT id FROM transactions WHERE order_id = ?'
            ).bind(orderId).first();

            if (existingTx) {
                return new Response('Already processed', { status: 200 });
            }

            // 2. 라이선스 키 생성 및 발급
            const licenseKey = generateLicenseKey();

            // 3. DB 트랜잭션 (D1은 Batch를 지원)
            await context.env.DB.batch([
                context.env.DB.prepare(
                    'INSERT INTO transactions (order_id, customer_email, amount, currency, provider) VALUES (?, ?, ?, ?, ?)'
                ).bind(orderId, email, payload.data?.payout_totals?.total || 0, 'USD', 'Paddle'),

                context.env.DB.prepare(
                    'INSERT INTO licenses (customer_email, license_key, plan_type) VALUES (?, ?, ?)'
                ).bind(email, licenseKey, 'Pro')
            ]);

            // 4. 이메일 발송
            await sendLicenseEmail(email, licenseKey);

            return new Response(JSON.stringify({ success: true, key: licenseKey }), {
                status: 201,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return new Response('Ignored event', { status: 200 });

    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
