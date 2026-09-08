import { supabaseAdmin } from './supabase';

// Columns shown in listing views (grid + sidebar) — keep payloads small.
const LIST_COLUMNS = 'id, slug, title, excerpt, cover_image, category, author, published_at';

// All published posts, newest first (for the public news grid).
export async function getPublishedPosts(limit) {
    let query = supabaseAdmin
        .from('posts')
        .select(LIST_COLUMNS)
        .eq('status', 'published')
        .order('published_at', { ascending: false });
    if (limit) query = query.limit(limit);
    const { data, error } = await query;
    if (error) throw error;
    return data || [];
}

// A single published post by slug (for /news/[slug]). Returns null if not found.
export async function getPostBySlug(slug) {
    const { data, error } = await supabaseAdmin
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle();
    if (error) throw error;
    return data;
}

// Slugs of all published posts (for getStaticPaths).
export async function getAllPublishedSlugs() {
    const { data, error } = await supabaseAdmin
        .from('posts')
        .select('slug')
        .eq('status', 'published');
    if (error) throw error;
    return (data || []).map((p) => p.slug);
}

// Guarantee a unique slug by appending -1, -2, ... when a collision exists.
// Pass excludeId when updating an existing post so it doesn't collide with itself.
export async function ensureUniqueSlug(base, excludeId) {
    let slug = base;
    let i = 1;
    // eslint-disable-next-line no-constant-condition
    while (true) {
        let query = supabaseAdmin.from('posts').select('id').eq('slug', slug);
        if (excludeId) query = query.neq('id', excludeId);
        const { data } = await query.maybeSingle();
        if (!data) return slug;
        slug = `${base}-${i++}`;
    }
}
