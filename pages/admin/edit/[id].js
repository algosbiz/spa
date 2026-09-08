import Head from 'next/head';
import PostEditor from '@/components/admin/PostEditor';
import { getSession } from '@/lib/session';
import { supabaseAdmin } from '@/lib/supabase';

export default function EditPostPage({ post }) {
    return (
        <>
            <Head>
                <title>Edit: {post.title}</title>
                <meta name="robots" content="noindex" />
            </Head>
            <div style={{ background: '#f0ebe1', minHeight: '100vh', fontFamily: "'Segoe UI', Arial, sans-serif" }}>
                <PostEditor initialPost={post} />
            </div>
        </>
    );
}

export async function getServerSideProps({ req, res, params }) {
    const session = await getSession(req, res);
    if (!session.isAdmin) {
        return { redirect: { destination: '/admin/login', permanent: false } };
    }

    const { data: post } = await supabaseAdmin.from('posts').select('*').eq('id', params.id).maybeSingle();
    if (!post) {
        return { notFound: true };
    }

    return { props: { post } };
}
