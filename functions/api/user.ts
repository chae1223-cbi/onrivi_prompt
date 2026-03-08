/**
 * Onrivi SaaS User Management API
 * GET /api/user?id=USER_ID
 * POST /api/user (Body: { id, email })
 */

interface Env {
    DB: D1Database;
}

export const onRequest: PagesFunction<Env> = async (context) => {
    const { request, env } = context;
    const { searchParams } = new URL(request.url);

    try {
        if (request.method === 'GET') {
            const id = searchParams.get('id');
            if (!id) return new Response('User ID required', { status: 400 });

            const user = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(id).first();
            if (!user) return new Response('User not found', { status: 404 });

            return new Response(JSON.stringify(user), {
                headers: { 'Content-Type': 'application/json' }
            });
        }

        if (request.method === 'POST') {
            const body: any = await request.json();
            const { id, email } = body;

            if (!id || !email) return new Response('ID and Email required', { status: 400 });

            await env.DB.prepare(
                'INSERT INTO users (id, email) VALUES (?, ?) ON CONFLICT(id) DO UPDATE SET updatedAt = (strftime(\'%s\', \'now\'))'
            ).bind(id, email).run();

            return new Response(JSON.stringify({ success: true }), { status: 201 });
        }

        return new Response('Method not allowed', { status: 405 });

    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
