/**
 * Onrivi SaaS Prompts CRUD API
 * GET /api/prompts?user_id=ID
 * POST /api/prompts (Body: { user_id, title, content, ... })
 * PATCH /api/prompts/:id (Not applicable in single file, handled via query/body)
 * DELETE /api/prompts?id=PROMPT_ID&user_id=USER_ID
 */

interface Env {
    DB: D1Database;
}

export const onRequest: PagesFunction<Env> = async (context) => {
    const { request, env } = context;
    const { searchParams } = new URL(request.url);

    try {
        // [GET] List all prompts for a user
        if (request.method === 'GET') {
            const userId = searchParams.get('user_id');
            const parentId = searchParams.get('parentId') || null;

            if (!userId) return new Response('user_id required', { status: 400 });

            const prompts = await env.DB.prepare(
                'SELECT * FROM prompts WHERE user_id = ? AND (parentId = ? OR (? IS NULL AND parentId IS NULL)) ORDER BY sortOrder ASC, createdAt DESC'
            ).bind(userId, parentId, parentId).all();

            return new Response(JSON.stringify(prompts.results), {
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // [POST] Create a new prompt or folder
        if (request.method === 'POST') {
            const body: any = await request.json();
            const {
                id, user_id, title, content, instruction, type, rootType, parentId, sortOrder
            } = body;

            if (!user_id || !title) return new Response('user_id and title required', { status: 400 });

            const finalId = id || crypto.randomUUID();

            await env.DB.prepare(
                'INSERT INTO prompts (id, user_id, title, content, instruction, type, rootType, parentId, sortOrder) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
            ).bind(finalId, user_id, title, content || null, instruction || null, type || 'file', rootType || null, parentId || null, sortOrder || 0).run();

            return new Response(JSON.stringify({ id: finalId, success: true }), { status: 201 });
        }

        // [PATCH / PUT] Update prompt
        if (request.method === 'PATCH' || request.method === 'PUT') {
            const body: any = await request.json();
            const { id, user_id, title, content, instruction, sortOrder } = body;

            if (!id || !user_id) return new Response('id and user_id required', { status: 400 });

            await env.DB.prepare(
                'UPDATE prompts SET title = COALESCE(?, title), content = COALESCE(?, content), instruction = COALESCE(?, instruction), sortOrder = COALESCE(?, sortOrder), updatedAt = (strftime(\'%s\', \'now\')) WHERE id = ? AND user_id = ?'
            ).bind(title || null, content || null, instruction || null, sortOrder ?? null, id, user_id).run();

            return new Response(JSON.stringify({ success: true }));
        }

        // [DELETE] Remove prompt
        if (request.method === 'DELETE') {
            const id = searchParams.get('id');
            const userId = searchParams.get('user_id');

            if (!id || !userId) return new Response('id and user_id required', { status: 400 });

            await env.DB.prepare('DELETE FROM prompts WHERE id = ? AND user_id = ?').bind(id, userId).run();

            return new Response(JSON.stringify({ success: true }));
        }

        return new Response('Method not allowed', { status: 405 });

    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
