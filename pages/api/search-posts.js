import { supabaseAdmin } from '@/lib/supabase';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { q, menu } = req.query;

    if (menu === '1') {
        try {
            const { data, error } = await supabaseAdmin
                .from('posts')
                .select('id, slug, title')
                .eq('status', 'published')
                .order('published_at', { ascending: false })
                .limit(12);

            if (error) throw error;

            return res.status(200).json({ posts: data || [] });
        } catch (err) {
            console.error('Blog menu error:', err.message);
            return res.status(500).json({ error: 'Could not load blog menu' });
        }
    }

    if (!q || q.trim().length < 2) {
        return res.status(200).json({ posts: [] });
    }

    const searchTerm = `%${q.trim()}%`;

    try {
        const { data, error } = await supabaseAdmin
            .from('posts')
            .select('id, slug, title, excerpt, cover_image, author, published_at')
            .eq('status', 'published')
            .or(`title.ilike.${searchTerm},excerpt.ilike.${searchTerm}`)
            .order('published_at', { ascending: false })
            .limit(10);

        if (error) throw error;

        return res.status(200).json({ posts: data || [] });
    } catch (err) {
        console.error('Search error:', err.message);
        return res.status(500).json({ error: 'Search failed' });
    }
}
