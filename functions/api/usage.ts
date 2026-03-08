/**
 * Onrivi SaaS Usage Tracking API
 * POST /api/usage (Body: { user_id, model, prompt_tokens, completion_tokens, total_tokens, cost })
 */

interface Env {
    DB: D1Database;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const { request, env } = context;

    try {
        const body: any = await request.json();
        const { user_id, model, prompt_tokens, completion_tokens, total_tokens, cost } = body;

        if (!user_id || !model) return new Response('user_id and model required', { status: 400 });

        await env.DB.prepare(
            'INSERT INTO usage (user_id, model, prompt_tokens, completion_tokens, total_tokens, cost) VALUES (?, ?, ?, ?, ?, ?)'
        ).bind(user_id, model, prompt_tokens || 0, completion_tokens || 0, total_tokens || 0, cost || 0).run();

        return new Response(JSON.stringify({ success: true }), { status: 201 });

    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
