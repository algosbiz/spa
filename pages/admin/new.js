import Head from 'next/head';
import PostEditor from '@/components/admin/PostEditor';
import { getSession } from '@/lib/session';

export default function NewPostPage() {
    return (
        <>
            <Head>
                <title>New Article</title>
                <meta name="robots" content="noindex" />
            </Head>
            <div style={{ background: '#f0ebe1', minHeight: '100vh', fontFamily: "'Segoe UI', Arial, sans-serif" }}>
                <PostEditor initialPost={null} />
            </div>
        </>
    );
}

export async function getServerSideProps({ req, res }) {
    const session = await getSession(req, res);
    if (!session.isAdmin) {
        return { redirect: { destination: '/admin/login', permanent: false } };
    }
    return { props: {} };
}
