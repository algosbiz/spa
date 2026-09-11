import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { getSession } from '@/lib/session';
import { supabaseAdmin } from '@/lib/supabase';

export default function AdminDashboard({ initialPosts }) {
    const router = useRouter();
    const [posts, setPosts] = useState(initialPosts || []);
    const [busyId, setBusyId] = useState(null);
    const [confirmPost, setConfirmPost] = useState(null);
    const [error, setError] = useState('');

    const published = posts.filter((p) => p.status === 'published').length;
    const drafts = posts.length - published;

    // Escape closes the delete dialog, unless the delete is already running.
    useEffect(() => {
        if (!confirmPost) return;
        const onKey = (e) => {
            if (e.key === 'Escape' && !busyId) setConfirmPost(null);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [confirmPost, busyId]);

    const logout = async () => {
        await fetch('/api/admin/logout/', { method: 'POST' });
        router.push('/admin/login');
    };

    const remove = async (post) => {
        setBusyId(post.id);
        setError('');
        const res = await fetch(`/api/admin/posts/${post.id}/`, { method: 'DELETE' });
        setBusyId(null);
        if (res.ok) {
            setPosts((prev) => prev.filter((p) => p.id !== post.id));
            setConfirmPost(null);
        } else {
            const data = await res.json().catch(() => ({}));
            setConfirmPost(null);
            setError(`Failed to delete “${post.title}”: ${data.error || res.status}`);
        }
    };

    const fmt = (d) => (d ? new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—');

    return (
        <>
            <Head>
                <title>Blog Dashboard</title>
                <meta name="robots" content="noindex" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400..600&family=Mulish:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="page">
                <div className="adm-bg" aria-hidden="true">
                    <span className="glow glow-a" />
                    <span className="glow glow-b" />
                    <img className="watermark" src="/images/logo/sbm.webp" alt="" />
                </div>

                <header className="topbar">
                    <div className="topbar-inner">
                        <Link href="/admin" className="brand">
                            <img src="/images/logo/SMBtitle.svg" alt="Spa Bali Moon" width="435" height="80" />
                            <span className="eyebrow">Content Studio</span>
                        </Link>
                        <div className="top-actions">
                            <Link href="/admin/new" className="adm-btn primary">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M12 5.5v13M5.5 12h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                New Article
                            </Link>
                            <button className="adm-btn ghost" onClick={logout}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path
                                        d="M14.5 8.2V6.4A1.9 1.9 0 0 0 12.6 4.5H6.4A1.9 1.9 0 0 0 4.5 6.4v11.2a1.9 1.9 0 0 0 1.9 1.9h6.2a1.9 1.9 0 0 0 1.9-1.9v-1.8"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                    />
                                    <path d="M10 12h9.5m0 0-2.7-2.7M19.5 12l-2.7 2.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Log Out
                            </button>
                        </div>
                    </div>
                </header>

                <main className="dash">
                    <div className="dash-head">
                        <div>
                            <h1>Manage Blog</h1>
                            <p>Write, publish and keep your guides up to date.</p>
                        </div>
                        <div className="stats">
                            <div className="stat">
                                <span className="num">{posts.length}</span>
                                <span className="cap">Total</span>
                            </div>
                            <div className="stat">
                                <span className="num pub">{published}</span>
                                <span className="cap">Published</span>
                            </div>
                            <div className="stat">
                                <span className="num draft">{drafts}</span>
                                <span className="cap">Drafts</span>
                            </div>
                        </div>
                    </div>

                    {error && (
                        <div className="err" role="alert">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                                <path d="M12 7.5v5.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                <circle cx="12" cy="16.3" r="1.05" fill="currentColor" />
                            </svg>
                            <span>{error}</span>
                            <button type="button" className="err-close" onClick={() => setError('')} aria-label="Dismiss">
                                ×
                            </button>
                        </div>
                    )}

                    {posts.length === 0 ? (
                        <div className="empty">
                            <div className="empty-mark" aria-hidden="true">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M6.5 3.5h7.2L18.5 8.3v12.2H6.5z"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M13.4 3.6v5h5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                                    <path d="M9.3 13h6.2M9.3 16.3h4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h2>No articles yet</h2>
                            <p>Your published guides will show up here once you write the first one.</p>
                            <Link href="/admin/new" className="adm-btn primary">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M12 5.5v13M5.5 12h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                Create your first article
                            </Link>
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
                                        <th aria-label="Actions" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts.map((p) => (
                                        <tr key={p.id} className={busyId === p.id ? 'is-busy' : ''}>
                                            <td data-label="Title">
                                                <Link href={`/admin/edit/${p.id}`} className="title-link">
                                                    {p.title}
                                                </Link>
                                                <div className="slug">/guide/{p.slug}</div>
                                            </td>
                                            <td data-label="Status">
                                                <span className={`adm-badge ${p.status}`}>
                                                    <span className="adm-dot" aria-hidden="true" />
                                                    {p.status === 'published' ? 'Published' : 'Draft'}
                                                </span>
                                            </td>
                                            <td data-label="Category">
                                                {p.category ? <span className="adm-cat">{p.category}</span> : <span className="muted">—</span>}
                                            </td>
                                            <td data-label="Updated" className="date">
                                                {fmt(p.updated_at)}
                                            </td>
                                            <td className="row-actions">
                                                {p.status === 'published' && (
                                                    <a href={`/guide/${p.slug}`} target="_blank" rel="noreferrer" className="act" title="View live article">
                                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                            <path
                                                                d="M13.8 5.2h5v5M19 5.4 11.6 12.8"
                                                                stroke="currentColor"
                                                                strokeWidth="1.7"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M18 14.4v3.4a1.9 1.9 0 0 1-1.9 1.9H6.4a1.9 1.9 0 0 1-1.9-1.9V8.1a1.9 1.9 0 0 1 1.9-1.9h3.4"
                                                                stroke="currentColor"
                                                                strokeWidth="1.7"
                                                                strokeLinecap="round"
                                                            />
                                                        </svg>
                                                        <span>View</span>
                                                    </a>
                                                )}
                                                <Link href={`/admin/edit/${p.id}`} className="act" title="Edit article">
                                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                        <path
                                                            d="m15.6 4.9 3.5 3.5M4.5 19.5l.8-3.6L16 5.2a1.4 1.4 0 0 1 2 0l.8.8a1.4 1.4 0 0 1 0 2L8.1 18.7z"
                                                            stroke="currentColor"
                                                            strokeWidth="1.7"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <span>Edit</span>
                                                </Link>
                                                <button
                                                    className="act danger"
                                                    onClick={() => setConfirmPost(p)}
                                                    disabled={busyId === p.id}
                                                    title="Delete article"
                                                >
                                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                        <path
                                                            d="M5 7h14M9.5 7V5.6A1.1 1.1 0 0 1 10.6 4.5h2.8A1.1 1.1 0 0 1 14.5 5.6V7m2 0v11.4a1.6 1.6 0 0 1-1.6 1.6H9.1a1.6 1.6 0 0 1-1.6-1.6V7"
                                                            stroke="currentColor"
                                                            strokeWidth="1.7"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path d="M10.4 10.8v5.4M13.6 10.8v5.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                                    </svg>
                                                    <span>{busyId === p.id ? 'Deleting…' : 'Delete'}</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </main>

                {confirmPost && (
                <div className="adm-overlay" role="dialog" aria-modal="true" aria-labelledby="del-title">
                    <div className="adm-modal">
                        <div className="adm-modal-mark" aria-hidden="true">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M5 7h14M9.5 7V5.6A1.1 1.1 0 0 1 10.6 4.5h2.8A1.1 1.1 0 0 1 14.5 5.6V7m2 0v11.4a1.6 1.6 0 0 1-1.6 1.6H9.1a1.6 1.6 0 0 1-1.6-1.6V7"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path d="M10.4 10.8v5.4M13.6 10.8v5.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h2 id="del-title">Delete this article?</h2>
                        <p>
                            “{confirmPost.title}” will be removed permanently. This action cannot be undone.
                        </p>
                        <div className="adm-modal-actions">
                            <button type="button" className="adm-btn ghost" onClick={() => setConfirmPost(null)} disabled={Boolean(busyId)} autoFocus>
                                Cancel
                            </button>
                            <button type="button" className="adm-btn danger" onClick={() => remove(confirmPost)} disabled={Boolean(busyId)}>
                                {busyId ? 'Deleting…' : 'Delete article'}
                            </button>
                        </div>
                    </div>
                </div>
                )}
            </div>

            <style jsx>{`
                .page {
                    position: relative;
                    min-height: 100vh;
                    background: #f5efe5;
                    font-family: 'Mulish', 'Segoe UI', Arial, sans-serif;
                    line-height: 1.5;
                    color: #3d3428;
                }
                .adm-bg {
                    position: fixed;
                    inset: 0;
                    overflow: hidden;
                    pointer-events: none;
                    background: linear-gradient(180deg, #fbf8f2 0%, #f4eee4 46%, #efe6d7 100%);
                }
                .glow {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(100px);
                }
                .glow-a {
                    width: 520px;
                    height: 520px;
                    top: -200px;
                    left: -150px;
                    background: rgba(184, 149, 46, 0.14);
                }
                .glow-b {
                    width: 560px;
                    height: 560px;
                    bottom: -240px;
                    right: -160px;
                    background: rgba(140, 160, 128, 0.12);
                }
                .watermark {
                    position: absolute;
                    width: 720px;
                    max-width: 120%;
                    height: auto;
                    right: -120px;
                    bottom: -140px;
                    opacity: 0.04;
                }

                .topbar {
                    position: sticky;
                    top: 0;
                    z-index: 20;
                    background: rgba(253, 251, 247, 0.86);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid #e9e0ce;
                }
                .topbar-inner {
                    max-width: 1060px;
                    margin: 0 auto;
                    padding: 14px 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                    flex-wrap: wrap;
                }
                /* next/link renders its own <a>, which the SWC styled-jsx transform does not
                   tag with the scoped class. Every class that lands on a <Link> therefore has
                   to be matched through :global(), kept inside .page so nothing leaks out. */
                .page :global(.brand) {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    text-decoration: none;
                    min-width: 0;
                }
                .page :global(.brand img) {
                    width: 176px;
                    height: auto;
                    flex: none;
                }
                .eyebrow {
                    font-family: 'Mulish', 'Segoe UI', Arial, sans-serif;
                    line-height: 1.4;
                    padding-left: 14px;
                    border-left: 1px solid #e0d5be;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                    color: #b8952e;
                    white-space: nowrap;
                }
                .top-actions {
                    display: flex;
                    gap: 10px;
                }

                .page :global(.adm-btn) {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 17px;
                    border-radius: 10px;
                    border: 1px solid #ded5c5;
                    background: #fff;
                    color: #3d3428;
                    font-family: inherit;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    text-decoration: none;
                    white-space: nowrap;
                    transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
                }
                .page :global(.adm-btn:focus-visible) {
                    outline: 2px solid #b8952e;
                    outline-offset: 2px;
                }
                .page :global(.adm-btn.primary) {
                    background: linear-gradient(180deg, #c2a03a 0%, #b8952e 55%, #a5841f 100%);
                    border-color: #a5841f;
                    color: #fff;
                    box-shadow: 0 6px 16px -7px rgba(165, 132, 31, 0.65);
                }
                .page :global(.adm-btn.primary:hover) {
                    filter: brightness(1.05);
                    transform: translateY(-1px);
                }
                .page :global(.adm-btn.ghost:hover) {
                    background: #f6f1e7;
                    border-color: #cfc3ac;
                }
                .page :global(.adm-btn.danger) {
                    background: #c0392b;
                    border-color: #ad3122;
                    color: #fff;
                }
                .page :global(.adm-btn.danger:hover) {
                    filter: brightness(1.06);
                }
                .page :global(.adm-btn:disabled) {
                    opacity: 0.55;
                    cursor: not-allowed;
                    transform: none;
                }

                .dash {
                    position: relative;
                    z-index: 1;
                    max-width: 1060px;
                    margin: 0 auto;
                    padding: 36px 20px 90px;
                }
                .dash-head {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    flex-wrap: wrap;
                    gap: 20px;
                    margin-bottom: 26px;
                }
                .dash-head h1 {
                    margin: 0;
                    font-family: 'Literata', Georgia, serif;
                    line-height: 1.2;
                    font-size: 30px;
                    font-weight: 500;
                    letter-spacing: -0.015em;
                    color: #2f281e;
                }
                .dash-head p {
                    margin: 6px 0 0;
                    color: #8b7d6b;
                    font-size: 14px;
                    line-height: 1.5;
                }

                .stats {
                    display: flex;
                    gap: 10px;
                }
                .stat {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2px;
                    min-width: 86px;
                    padding: 11px 16px;
                    background: rgba(255, 255, 255, 0.82);
                    border: 1px solid #ece3d3;
                    border-radius: 12px;
                    box-shadow: 0 1px 2px rgba(58, 45, 24, 0.03);
                }
                .num {
                    font-family: 'Literata', Georgia, serif;
                    font-size: 21px;
                    font-weight: 600;
                    line-height: 1.1;
                    color: #2f281e;
                }
                .num.pub {
                    color: #2e7d44;
                }
                .num.draft {
                    color: #a5841f;
                }
                .cap {
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: #a89a88;
                }

                .err {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    background: #fdf0ee;
                    color: #a8261d;
                    border: 1px solid #f3cac4;
                    padding: 11px 14px;
                    border-radius: 11px;
                    margin-bottom: 18px;
                    font-size: 13.5px;
                }
                .err svg {
                    flex: none;
                }
                .err span {
                    flex: 1;
                }
                .err-close {
                    flex: none;
                    border: none;
                    background: none;
                    color: inherit;
                    font-size: 20px;
                    line-height: 1;
                    cursor: pointer;
                    padding: 0 2px;
                    opacity: 0.6;
                }
                .err-close:hover {
                    opacity: 1;
                }

                .table-wrap {
                    position: relative;
                    background: rgba(255, 255, 255, 0.92);
                    border: 1px solid #ece3d3;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 1px 2px rgba(58, 45, 24, 0.04), 0 14px 40px -18px rgba(58, 45, 24, 0.16);
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th {
                    text-align: left;
                    font-size: 10.5px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: #a89a88;
                    padding: 14px 18px;
                    background: #fbf7f0;
                    border-bottom: 1px solid #ece3d3;
                }
                td {
                    padding: 15px 18px;
                    border-bottom: 1px solid #f3ede2;
                    font-size: 14px;
                    vertical-align: middle;
                }
                tbody tr {
                    transition: background 0.14s ease;
                }
                tbody tr:hover {
                    background: #fdfaf4;
                }
                tr.is-busy {
                    opacity: 0.55;
                }
                tr:last-child td {
                    border-bottom: none;
                }

                .page :global(.title-link) {
                    font-family: 'Mulish', 'Segoe UI', Arial, sans-serif;
                    color: #2f281e;
                    font-weight: 700;
                    text-decoration: none;
                    line-height: 1.35;
                }
                .page :global(.title-link:hover) {
                    color: #a5841f;
                }
                .slug {
                    color: #a89a88;
                    font-size: 12px;
                    margin-top: 3px;
                }
                .muted {
                    color: #bbaa90;
                }
                .date {
                    color: #7d7060;
                    white-space: nowrap;
                }
                .adm-cat {
                    display: inline-block;
                    white-space: nowrap;
                    padding: 3px 10px;
                    border-radius: 7px;
                    background: #f5f0e6;
                    border: 1px solid #eae0cd;
                    font-size: 12.5px;
                    color: #7d7060;
                }

                .adm-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 12px;
                    padding: 4px 11px;
                    border-radius: 20px;
                    font-weight: 700;
                    white-space: nowrap;
                }
                .adm-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: currentColor;
                }
                .adm-badge.published {
                    background: #e7f4ea;
                    color: #2e7d44;
                    border: 1px solid #cfe7d6;
                }
                .adm-badge.draft {
                    background: #f7f1e2;
                    color: #97852f;
                    border: 1px solid #ebdfc3;
                }

                .row-actions {
                    display: flex;
                    gap: 6px;
                    justify-content: flex-end;
                }
                .page :global(.act) {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 11px;
                    border: 1px solid transparent;
                    border-radius: 8px;
                    background: none;
                    color: #8b7d6b;
                    font-family: inherit;
                    font-size: 13px;
                    font-weight: 600;
                    text-decoration: none;
                    cursor: pointer;
                    white-space: nowrap;
                    transition: color 0.14s ease, background 0.14s ease, border-color 0.14s ease;
                }
                .page :global(.act:hover) {
                    color: #8a6f1c;
                    background: #f8f2e4;
                    border-color: #eadfc6;
                }
                .page :global(.act.danger:hover) {
                    color: #c0392b;
                    background: #fdf0ee;
                    border-color: #f3cac4;
                }
                .page :global(.act:focus-visible) {
                    outline: 2px solid #b8952e;
                    outline-offset: 1px;
                }
                .page :global(.act:disabled) {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                .empty {
                    text-align: center;
                    padding: 66px 24px;
                    background: rgba(255, 255, 255, 0.8);
                    border: 1px dashed #d9cdb6;
                    border-radius: 16px;
                }
                .empty-mark {
                    display: grid;
                    place-items: center;
                    width: 62px;
                    height: 62px;
                    margin: 0 auto 18px;
                    border-radius: 50%;
                    background: #f7f1e3;
                    border: 1px solid #ebe0c9;
                    color: #b8952e;
                }
                .empty h2 {
                    margin: 0 0 6px;
                    font-family: 'Literata', Georgia, serif;
                    line-height: 1.3;
                    font-size: 20px;
                    font-weight: 500;
                    color: #2f281e;
                }
                .empty p {
                    color: #8b7d6b;
                    font-size: 14px;
                    line-height: 1.55;
                    margin: 0 0 20px;
                }

                .adm-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 60;
                    display: grid;
                    place-items: center;
                    padding: 20px;
                    background: rgba(47, 40, 30, 0.42);
                    backdrop-filter: blur(3px);
                    animation: fade 0.18s ease both;
                    font-family: 'Mulish', 'Segoe UI', Arial, sans-serif;
                }
                .adm-modal {
                    width: 100%;
                    max-width: 400px;
                    background: #fff;
                    border: 1px solid #ece3d3;
                    border-radius: 18px;
                    padding: 30px 28px 24px;
                    text-align: center;
                    box-shadow: 0 24px 60px -16px rgba(35, 27, 14, 0.4);
                    animation: rise 0.22s cubic-bezier(0.22, 1, 0.36, 1) both;
                }
                .adm-modal-mark {
                    display: grid;
                    place-items: center;
                    width: 52px;
                    height: 52px;
                    margin: 0 auto 16px;
                    border-radius: 50%;
                    background: #fdf0ee;
                    color: #c0392b;
                }
                .adm-modal h2 {
                    margin: 0 0 8px;
                    font-family: 'Literata', Georgia, serif;
                    line-height: 1.3;
                    font-size: 20px;
                    font-weight: 500;
                    color: #2f281e;
                }
                .adm-modal p {
                    margin: 0 0 22px;
                    color: #8b7d6b;
                    font-size: 14px;
                    line-height: 1.55;
                }
                .adm-modal-actions {
                    display: flex;
                    gap: 10px;
                }
                .adm-modal-actions :global(.adm-btn) {
                    flex: 1;
                    justify-content: center;
                }
                @keyframes fade {
                    from {
                        opacity: 0;
                    }
                }
                @keyframes rise {
                    from {
                        opacity: 0;
                        transform: translateY(12px) scale(0.98);
                    }
                }

                @media (max-width: 760px) {
                    .dash-head {
                        align-items: flex-start;
                    }
                    .stats {
                        width: 100%;
                    }
                    .stat {
                        flex: 1;
                        min-width: 0;
                    }
                    thead {
                        display: none;
                    }
                    table,
                    tbody,
                    tr,
                    td {
                        display: block;
                        width: 100%;
                    }
                    tbody tr {
                        padding: 16px 16px 12px;
                        border-bottom: 1px solid #f0e8da;
                    }
                    tbody tr:last-child {
                        border-bottom: none;
                    }
                    td {
                        padding: 0;
                        border: none;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 14px;
                        margin-bottom: 9px;
                    }
                    td[data-label='Title'] {
                        display: block;
                        margin-bottom: 12px;
                    }
                    td[data-label]:not([data-label='Title'])::before {
                        content: attr(data-label);
                        flex: none;
                        font-size: 10.5px;
                        font-weight: 700;
                        letter-spacing: 0.1em;
                        text-transform: uppercase;
                        color: #a89a88;
                    }
                    .row-actions {
                        justify-content: flex-start;
                        margin: 12px 0 0;
                        padding-top: 12px;
                        border-top: 1px dashed #ece3d3;
                        flex-wrap: wrap;
                    }
                    .page :global(.act) {
                        border-color: #eadfc6;
                        background: #fdfaf4;
                    }
                }

                @media (max-width: 560px) {
                    .topbar-inner {
                        gap: 12px;
                    }
                    .page :global(.brand img) {
                        width: 150px;
                    }
                    .eyebrow {
                        display: none;
                    }
                    .top-actions {
                        width: 100%;
                    }
                    .top-actions :global(.adm-btn) {
                        flex: 1;
                        justify-content: center;
                    }
                    .dash-head h1 {
                        font-size: 25px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .adm-modal,
                    .adm-overlay {
                        animation: none;
                    }
                    .page :global(.adm-btn.primary:hover) {
                        transform: none;
                    }
                }
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
