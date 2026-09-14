import { requireAdmin } from '@/lib/session';
import { supabaseAdmin } from '@/lib/supabase';
import { makeSlug } from '@/lib/slug';
import { ensureUniqueSlug } from '@/lib/posts';
import { refreshPostCaches } from '@/lib/publishCache';

async function handler(req, res) {
    const { id } = req.query;

    // Fetch a single post for editing.
    if (req.method === 'GET') {
        const { data, error } = await supabaseAdmin.from('posts').select('*').eq('id', id).maybeSingle();
        if (error) return res.status(500).json({ error: error.message });
        if (!data) return res.status(404).json({ error: 'Article not found.' });
        return res.status(200).json({ post: data });
    }

    // Update an existing post.
    if (req.method === 'PUT') {
        const body = req.body || {};
        const title = (body.title || '').trim();
        if (!title) return res.status(400).json({ error: 'Title is required.' });

        const baseSlug = makeSlug(body.slug || title) || `post-${Date.now()}`;
        const slug = await ensureUniqueSlug(baseSlug, id);

        const status = body.status === 'published' ? 'published' : 'draft';

        // Preserve the original publish date the first time it was published.
        // slug and status come back too: a rename has to purge the URL the
        // article used to live at, and un-publishing has to purge the URL it
        // is disappearing from.
        const { data: existing } = await supabaseAdmin
            .from('posts')
            .select('published_at, slug, status')
            .eq('id', id)
            .maybeSingle();

        const now = new Date().toISOString();
        const published_at = status === 'published' ? existing?.published_at || now : null;

        const update = {
            title,
            slug,
            excerpt: body.excerpt || null,
            cover_image: body.cover_image || null,
            content_html: body.content_html || '',
            category: body.category || null,
            tags: Array.isArray(body.tags) ? body.tags : [],
            author: body.author || 'Admin',
            status,
            seo_title: body.seo_title || null,
            seo_description: body.seo_description || null,
            published_at,
            updated_at: now,
        };

        const { data, error } = await supabaseAdmin.from('posts').update(update).eq('id', id).select().single();
        if (error) return res.status(500).json({ error: error.message });

        // Skip only the draft-to-draft case: nothing public changed, so there
        // is nothing cached to refresh. Publishing, un-publishing and editing
        // a live post all do.
        const wasPublic = existing?.status === 'published';
        const cache = status === 'published' || wasPublic
            ? await refreshPostCaches(res, { slug: data.slug, previousSlug: existing?.slug })
            : null;

        return res.status(200).json({ post: data, cache });
    }

    // Delete a post.
    if (req.method === 'DELETE') {
        // Read the slug before the row is gone -- afterwards there is no way
        // to know which URL Cloudflare is still serving.
        const { data: doomed } = await supabaseAdmin
            .from('posts')
            .select('slug, status')
            .eq('id', id)
            .maybeSingle();

        const { error } = await supabaseAdmin.from('posts').delete().eq('id', id);
        if (error) return res.status(500).json({ error: error.message });

        const cache = doomed?.status === 'published'
            ? await refreshPostCaches(res, { slug: doomed.slug })
            : null;

        return res.status(200).json({ ok: true, cache });
    }

    return res.status(405).json({ error: 'Method not allowed' });
}

export default requireAdmin(handler);
