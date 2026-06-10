import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { getSession } from '@/lib/session';
import { supabaseAdmin } from '@/lib/supabase';

export default function AdminDashboard({ initialPosts }) {
    const router = useRouter();
    const [posts, setPosts] = useState(initialPosts || []);
    const [busyId, setBusyId] = useState(null);

    const logout = async () => {
        await fetch('/api/admin/logout', { method: 'POST' });
        router.push('/admin/login');
    };

    const remove = async (post) => {
        if (!confirm(`Delete article "${post.title}"? This action cannot be undone.`)) return;
        setBusyId(post.id);
        const res = await fetch(`/api/admin/posts/${post.id}`, { method: 'DELETE' });
        setBusyId(null);
        if (res.ok) {
            setPosts((prev) => prev.filter((p) => p.id !== post.id));
        } else {
            const data = await res.json().catch(() => ({}));
            alert('Failed to delete: ' + (data.error || res.status));
        }
    };

    const fmt = (d) => (d ? new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—');

    return (
        <>
            <Head>
                <title>Blog Dashboard</title>
                <meta name="robots" content="noindex" />
            </Head>
            <div className="dash">
                <header className="dash-top">
                    <div>
                        <h1>Manage Blog</h1>
                        <p>{posts.length} {posts.length === 1 ? 'article' : 'articles'}</p>
                    </div>
                    <div className="top-actions">
                        <Link href="/admin/new" className="btn primary">+ New Article</Link>
                        <button className="btn ghost" onClick={logout}>Log Out</button>
                    </div>
                </header>

                {posts.length === 0 ? (
                    <div className="empty">
                        <p>No articles yet.</p>
                        <Link href="/admin/new" className="btn primary">Create your first article</Link>
                    </div>
                ) : (
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Status</th>
                                    <th>Category</th>
                                    <th>Updated</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((p) => (
                                    <tr key={p.id}>
                                        <td>
                                            <Link href={`/admin/edit/${p.id}`} className="title-link">{p.title}</Link>
                                            <div className="slug">/blog/{p.slug}</div>
                                        </td>
                                        <td>
                                            <span className={`badge ${p.status}`}>{p.status === 'published' ? 'Published' : 'Draft'}</span>
                                        </td>
                                        <td>{p.category || '—'}</td>
                                        <td>{fmt(p.updated_at)}</td>
                                        <td className="row-actions">
                                            {p.status === 'published' && (
                                                <a href={`/blog/${p.slug}`} target="_blank" rel="noreferrer" className="link">View</a>
                                            )}
                                            <Link href={`/admin/edit/${p.id}`} className="link">Edit</Link>
                                            <button className="link danger" onClick={() => remove(p)} disabled={busyId === p.id}>
                                                {busyId === p.id ? '…' : 'Delete'}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <style jsx>{`
                .dash { max-width: 1000px; margin: 0 auto; padding: 32px 20px 80px; font-family: 'Segoe UI', Arial, sans-serif; color: #3d3428; }
                .dash-top { display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 16px; margin-bottom: 24px; }
                .dash-top h1 { margin: 0; font-size: 26px; color: #2f281e; }
                .dash-top p { margin: 4px 0 0; color: #8b7d6b; font-size: 14px; }
                .top-actions { display: flex; gap: 10px; }
                .btn { padding: 10px 16px; border-radius: 8px; border: 1px solid #d9d2c5; background: #fff; color: #3d3428; font-size: 14px; cursor: pointer; text-decoration: none; font-weight: 500; }
                .btn.primary { background: #b8952e; border-color: #b8952e; color: #fff; }
                .btn.primary:hover { background: #a5841f; }
                .btn.ghost:hover { background: #f4efe6; }
                .table-wrap { background: #fff; border: 1px solid #ece6da; border-radius: 12px; overflow: hidden; }
                table { width: 100%; border-collapse: collapse; }
                th { text-align: left; font-size: 11px; text-transform: uppercase; letter-spacing: .05em; color: #a89a88; padding: 14px 16px; border-bottom: 1px solid #ece6da; }
                td { padding: 14px 16px; border-bottom: 1px solid #f2ede4; font-size: 14px; vertical-align: top; }
                tr:last-child td { border-bottom: none; }
                .title-link { color: #2f281e; font-weight: 600; text-decoration: none; }
                .title-link:hover { color: #b8952e; }
                .slug { color: #a89a88; font-size: 12px; margin-top: 2px; }
                .badge { font-size: 12px; padding: 3px 10px; border-radius: 20px; font-weight: 600; }
                .badge.published { background: #e7f4ea; color: #2e7d44; }
                .badge.draft { background: #f3eee4; color: #97852f; }
                .row-actions { display: flex; gap: 12px; }
                .link { background: none; border: none; color: #b8952e; cursor: pointer; font-size: 13px; text-decoration: none; padding: 0; }
                .link:hover { text-decoration: underline; }
                .link.danger { color: #c0392b; }
                .empty { text-align: center; padding: 70px 20px; background: #fff; border: 1px dashed #d9d2c5; border-radius: 12px; }
                .empty p { color: #8b7d6b; margin: 0 0 16px; }
            `}</style>
        </>
    );
}

export async function getServerSideProps({ req, res }) {
    const session = await getSession(req, res);
    if (!session.isAdmin) {
        return { redirect: { destination: '/admin/login', permanent: false } };
    }

    const { data } = await supabaseAdmin
        .from('posts')
        .select('id, slug, title, status, category, published_at, updated_at')
        .order('updated_at', { ascending: false });

    return { props: { initialPosts: data || [] } };
}
