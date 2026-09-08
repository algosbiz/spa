-- Blog posts table for the admin CMS.
-- Run this once in Supabase → SQL Editor.

create table if not exists posts (
    id uuid primary key default gen_random_uuid(),
    slug text unique not null,
    title text not null,
    excerpt text,
    cover_image text,
    content_html text not null default '',
    category text,
    tags text[] default '{}',
    author text default 'Admin',
    status text not null default 'draft',     -- 'draft' | 'published'
    seo_title text,
    seo_description text,
    published_at timestamptz,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- Fast lookups for the public news grid (published, newest first).
create index if not exists posts_status_published_idx
    on posts (status, published_at desc);

-- The app talks to Supabase only through the service_role key on the server,
-- which bypasses Row Level Security. We still enable RLS with no public policy
-- so the table is NOT readable/writable via the public anon key.
alter table posts enable row level security;
