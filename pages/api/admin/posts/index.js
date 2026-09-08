import { requireAdmin } from '@/lib/session';
import { supabaseAdmin } from '@/lib/supabase';
import { makeSlug } from '@/lib/slug';
import { ensureUniqueSlug } from '@/lib/posts';

async function handler(req, res) {
    // List every post (drafts included) for the admin dashboard.
    if (req.method === 'GET') {
        const { data, error } = await supabaseAdmin
            .from('posts')
            .select('id, slug, title, status, category, published_at, updated_at')
            .order('updated_at', { ascending: false });
        if (error) return res.status(500).json({ error: error.message });
        return res.status(200).json({ posts: data });
    }

    // Create a new post.
    if (req.method === 'POST') {
        const body = req.body || {};
        const title = (body.title || '').trim();
        if (!title) return res.status(400).json({ error: 'Title is required.' });

        const baseSlug = makeSlug(body.slug || title) || `post-${Date.now()}`;
        const slug = await ensureUniqueSlug(baseSlug);

        const status = body.status === 'published' ? 'published' : 'draft';
        const now = new Date().toISOString();

        const record = {
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
            published_at: status === 'published' ? now : null,
        };

        const { data, error } = await supabaseAdmin.from('posts').insert(record).select().single();
        if (error) return res.status(500).json({ error: error.message });
        return res.status(201).json({ post: data });
    }

    return res.status(405).json({ error: 'Method not allowed' });
}

export default requireAdmin(handler);
