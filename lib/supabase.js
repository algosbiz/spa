import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
    // Don't throw at import time so the build doesn't crash if envs are missing in preview.
    console.warn('[supabase] Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment.');
}

// Server-side client using the service role key — full read/write access.
// NEVER import this module from client-side code. It is only used inside
// pages/api/* and getServerSideProps/getStaticProps.
export const supabaseAdmin = createClient(supabaseUrl || '', serviceKey || '', {
    auth: { persistSession: false, autoRefreshToken: false },
});

// Name of the Supabase Storage bucket used for blog images.
export const STORAGE_BUCKET = 'images';
