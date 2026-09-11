// Seed / re-sync the /guide articles into Supabase.
//
//   node scripts/seed-guide-posts.mjs          # dry run, prints what would change
//   node scripts/seed-guide-posts.mjs --apply  # write to Supabase
//
// Idempotent: matches on slug, inserts what's missing and updates what exists.

import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import { guidePosts } from './guide-posts.mjs';

// .env.local isn't loaded automatically outside Next.js, so read it here.
const envPath = path.join(process.cwd(), '.env.local');
const envText = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';
const env = (key) => {
    if (process.env[key]) return process.env[key];
    const m = envText.match(new RegExp(`^${key}=(.*)$`, 'm'));
    return m ? m[1].trim().replace(/^["']|["']$/g, '') : undefined;
};

const url = env('NEXT_PUBLIC_SUPABASE_URL');
const key = env('SUPABASE_SERVICE_ROLE_KEY');
if (!url || !key) {
    console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.');
    process.exit(1);
}

const supabase = createClient(url, key, { auth: { persistSession: false } });
const apply = process.argv.includes('--apply');

const { data: existing, error: readErr } = await supabase.from('posts').select('id, slug');
if (readErr) {
    console.error('Could not read posts:', readErr.message);
    process.exit(1);
}
const bySlug = new Map(existing.map((p) => [p.slug, p.id]));

for (const post of guidePosts) {
    const row = { ...post, status: 'published', updated_at: new Date().toISOString() };
    const id = bySlug.get(post.slug);

    if (!apply) {
        console.log(`${id ? 'update' : 'insert'}  ${post.slug}  (${post.content_html.length} chars)`);
        continue;
    }

    const { error } = id
        ? await supabase.from('posts').update(row).eq('id', id)
        : await supabase.from('posts').insert(row);

    if (error) console.error(`FAILED ${post.slug}: ${error.message}`);
    else console.log(`${id ? 'updated' : 'inserted'}  ${post.slug}`);
}

if (!apply) console.log('\nDry run. Re-run with --apply to write.');
