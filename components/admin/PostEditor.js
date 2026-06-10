import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { makeSlug } from '@/lib/slug';

// Tiptap touches the DOM, so load the editor client-side only.
const RichTextEditor = dynamic(() => import('./RichTextEditor'), {
    ssr: false,
    loading: () => <div style={{ padding: 20, color: '#999' }}>Loading editor…</div>,
});

export default function PostEditor({ initialPost }) {
    const router = useRouter();
    const isEdit = Boolean(initialPost && initialPost.id);

    const [title, setTitle] = useState(initialPost?.title || '');
    const [slug, setSlug] = useState(initialPost?.slug || '');
    const [excerpt, setExcerpt] = useState(initialPost?.excerpt || '');
    const [category, setCategory] = useState(initialPost?.category || '');
    const [tags, setTags] = useState((initialPost?.tags || []).join(', '));
    const [author, setAuthor] = useState(initialPost?.author || 'Admin');
    const [coverImage, setCoverImage] = useState(initialPost?.cover_image || '');
    const [seoTitle, setSeoTitle] = useState(initialPost?.seo_title || '');
    const [seoDescription, setSeoDescription] = useState(initialPost?.seo_description || '');
    const [status, setStatus] = useState(initialPost?.status || 'draft');

    // content is held in a ref so editor keystrokes don't re-render the whole form.
    const contentRef = useRef(initialPost?.content_html || '');
    // Editor is remounted (key bump) when we restore a draft, so it re-reads content.
    const [editorKey, setEditorKey] = useState(0);
    const [editorInitial, setEditorInitial] = useState(initialPost?.content_html || '');

    // Track whether the user manually edited the slug; if not, keep syncing from title.
    const [slugTouched, setSlugTouched] = useState(isEdit);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [uploadingCover, setUploadingCover] = useState(false);
    const [autoSavedAt, setAutoSavedAt] = useState(null);

    // --- Unsaved-changes protection + local autosave -------------------------
    const storageKey = `blogdraft:${initialPost?.id || 'new'}`;
    const dirtyRef = useRef(false);         // are there changes not yet saved to the server?
    const firstRunRef = useRef(true);       // skip the field-change effect on initial mount
    const autosaveTimer = useRef(null);

    // Always-fresh view of the form values for the debounced autosave writer.
    const valuesRef = useRef({});
    valuesRef.current = {
        title, slug, excerpt, category, tags, author,
        coverImage, seoTitle, seoDescription, status,
    };

    const buildSnapshot = () => ({ ...valuesRef.current, content_html: contentRef.current });

    const writeAutosave = () => {
        try {
            localStorage.setItem(storageKey, JSON.stringify({ ...buildSnapshot(), _ts: Date.now() }));
            setAutoSavedAt(new Date());
        } catch {
            /* storage full / unavailable — ignore */
        }
    };

    const scheduleAutosave = () => {
        if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
        autosaveTimer.current = setTimeout(writeAutosave, 800);
    };

    // Mark the form dirty + schedule an autosave whenever any field changes.
    useEffect(() => {
        if (firstRunRef.current) {
            firstRunRef.current = false;
            return;
        }
        dirtyRef.current = true;
        scheduleAutosave();
    }, [title, slug, excerpt, category, tags, author, coverImage, seoTitle, seoDescription, status]);

    // On mount: offer to restore a locally-saved draft if it differs from the server copy.
    useEffect(() => {
        try {
            const raw = localStorage.getItem(storageKey);
            if (!raw) return;
            const saved = JSON.parse(raw);
            const serverSnap = JSON.stringify({
                title: initialPost?.title || '',
                slug: initialPost?.slug || '',
                excerpt: initialPost?.excerpt || '',
                category: initialPost?.category || '',
                tags: (initialPost?.tags || []).join(', '),
                author: initialPost?.author || 'Admin',
                coverImage: initialPost?.cover_image || '',
                seoTitle: initialPost?.seo_title || '',
                seoDescription: initialPost?.seo_description || '',
                status: initialPost?.status || 'draft',
                content_html: initialPost?.content_html || '',
            });
            const savedSnap = JSON.stringify({
                title: saved.title || '',
                slug: saved.slug || '',
                excerpt: saved.excerpt || '',
                category: saved.category || '',
                tags: saved.tags || '',
                author: saved.author || 'Admin',
                coverImage: saved.coverImage || '',
                seoTitle: saved.seoTitle || '',
                seoDescription: saved.seoDescription || '',
                status: saved.status || 'draft',
                content_html: saved.content_html || '',
            });
            if (savedSnap === serverSnap) {
                localStorage.removeItem(storageKey);
                return;
            }
            const when = saved._ts ? new Date(saved._ts).toLocaleString('en-GB') : '';
            if (window.confirm(`An unsaved draft was found${when ? ` (${when})` : ''}. Restore it?`)) {
                setTitle(saved.title || '');
                setSlug(saved.slug || '');
                setExcerpt(saved.excerpt || '');
                setCategory(saved.category || '');
                setTags(saved.tags || '');
                setAuthor(saved.author || 'Admin');
                setCoverImage(saved.coverImage || '');
                setSeoTitle(saved.seoTitle || '');
                setSeoDescription(saved.seoDescription || '');
                setStatus(saved.status || 'draft');
                setSlugTouched(true);
                contentRef.current = saved.content_html || '';
                setEditorInitial(saved.content_html || '');
                setEditorKey((k) => k + 1);
                dirtyRef.current = true;
            } else {
                localStorage.removeItem(storageKey);
            }
        } catch {
            /* ignore corrupt drafts */
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Warn the browser before refresh/close when there are unsaved changes.
    useEffect(() => {
        const beforeUnload = (e) => {
            if (!dirtyRef.current) return;
            e.preventDefault();
            e.returnValue = '';
        };
        window.addEventListener('beforeunload', beforeUnload);
        return () => {
            window.removeEventListener('beforeunload', beforeUnload);
            if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
        };
    }, []);

    const cancel = () => {
        if (dirtyRef.current && !window.confirm('You have unsaved changes. Leave this page?')) {
            return;
        }
        dirtyRef.current = false;
        router.push('/admin');
    };

    const onTitleChange = (v) => {
        setTitle(v);
        if (!slugTouched) setSlug(makeSlug(v));
    };

    const uploadCover = async (e) => {
        const file = e.target.files && e.target.files[0];
        e.target.value = '';
        if (!file) return;
        setUploadingCover(true);
        setError('');
        try {
            const res = await fetch('/api/admin/upload', {
                method: 'POST',
                headers: { 'Content-Type': file.type, 'x-filename': file.name },
                body: file,
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Upload failed');
            setCoverImage(data.url);
        } catch (err) {
            setError('Failed to upload cover: ' + err.message);
        } finally {
            setUploadingCover(false);
        }
    };

    const save = async (overrideStatus) => {
        const finalStatus = overrideStatus || status;
        if (!title.trim()) {
            setError('Title is required.');
            return;
        }
        setSaving(true);
        setError('');
        const payload = {
            title: title.trim(),
            slug: slug.trim(),
            excerpt,
            category,
            author,
            cover_image: coverImage,
            content_html: contentRef.current,
            tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
            seo_title: seoTitle,
            seo_description: seoDescription,
            status: finalStatus,
        };
        try {
            const url = isEdit ? `/api/admin/posts/${initialPost.id}` : '/api/admin/posts';
            const res = await fetch(url, {
                method: isEdit ? 'PUT' : 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to save');
            // Saved to the server — clear the local draft and the unsaved-changes guard.
            dirtyRef.current = false;
            if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
            try { localStorage.removeItem(storageKey); } catch {}
            router.push('/admin');
        } catch (err) {
            setError(err.message);
            setSaving(false);
        }
    };

    return (
        <div className="pe">
            <div className="pe-head">
                <h1>{isEdit ? 'Edit Article' : 'New Article'}</h1>
                <div className="pe-actions">
                    {autoSavedAt && (
                        <span className="pe-autosave" title="Auto-saved in this browser">
                            ✓ Auto-saved {autoSavedAt.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                    )}
                    <button type="button" className="pe-btn ghost" onClick={cancel} disabled={saving}>
                        Cancel
                    </button>
                    <button type="button" className="pe-btn" onClick={() => save('draft')} disabled={saving}>
                        {saving ? 'Saving…' : 'Save Draft'}
                    </button>
                    <button type="button" className="pe-btn primary" onClick={() => save('published')} disabled={saving}>
                        {saving ? 'Saving…' : 'Publish'}
                    </button>
                </div>
            </div>

            {error && <div className="pe-error">{error}</div>}

            <div className="pe-grid">
                <div className="pe-main">
                    <label className="pe-label">Title</label>
                    <input
                        className="pe-input pe-title"
                        value={title}
                        onChange={(e) => onTitleChange(e.target.value)}
                        placeholder="Article title"
                    />

                    <label className="pe-label">Slug (URL)</label>
                    <div className="pe-slug-row">
                        <span className="pe-slug-prefix">/blog/</span>
                        <input
                            className="pe-input"
                            value={slug}
                            onChange={(e) => {
                                setSlugTouched(true);
                                setSlug(e.target.value);
                            }}
                            placeholder="auto-slug-from-title"
                        />
                    </div>

                    <label className="pe-label">Content</label>
                    <RichTextEditor
                        key={editorKey}
                        initialContent={editorInitial}
                        onChange={(html) => {
                            contentRef.current = html;
                            dirtyRef.current = true;
                            scheduleAutosave();
                        }}
                    />

                    <label className="pe-label">Excerpt</label>
                    <textarea
                        className="pe-input"
                        rows={3}
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        placeholder="Short summary for the article list & preview."
                    />
                </div>

                <div className="pe-side">
                    <div className="pe-card">
                        <label className="pe-label">Status</label>
                        <select className="pe-input" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                        </select>
                    </div>

                    <div className="pe-card">
                        <label className="pe-label">Cover Image</label>
                        {coverImage ? (
                            <div className="pe-cover">
                                <img src={coverImage} alt="cover" />
                                <button type="button" className="pe-btn ghost sm" onClick={() => setCoverImage('')}>
                                    Remove
                                </button>
                            </div>
                        ) : (
                            <p className="pe-muted">No image yet.</p>
                        )}
                        <label className="pe-btn sm" style={{ marginTop: 8, display: 'inline-block' }}>
                            {uploadingCover ? 'Uploading…' : 'Upload Cover'}
                            <input type="file" accept="image/*" style={{ display: 'none' }} onChange={uploadCover} disabled={uploadingCover} />
                        </label>
                    </div>

                    <div className="pe-card">
                        <label className="pe-label">Category</label>
                        <input className="pe-input" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="e.g. Treatment" />

                        <label className="pe-label">Tags (comma separated)</label>
                        <input className="pe-input" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="spa, relax, bali" />

                        <label className="pe-label">Author</label>
                        <input className="pe-input" value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </div>

                    <div className="pe-card">
                        <label className="pe-label">SEO Title</label>
                        <input className="pe-input" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} placeholder="Default: article title" />

                        <label className="pe-label">SEO Description</label>
                        <textarea className="pe-input" rows={3} value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} placeholder="Summary for Google (~150 characters)." />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .pe { max-width: 1100px; margin: 0 auto; padding: 24px 20px 80px; }
                .pe-head { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 18px; }
                .pe-head h1 { font-size: 22px; margin: 0; color: #2f281e; }
                .pe-actions { display: flex; gap: 8px; align-items: center; }
                .pe-autosave { font-size: 12px; color: #2e7d44; margin-right: 6px; white-space: nowrap; }
                .pe-grid { display: grid; grid-template-columns: 1fr 320px; gap: 24px; }
                @media (max-width: 860px) { .pe-grid { grid-template-columns: 1fr; } }
                .pe-label { display: block; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: .04em; color: #8b7d6b; margin: 16px 0 6px; }
                .pe-input { width: 100%; padding: 10px 12px; border: 1px solid #d9d2c5; border-radius: 7px; font-size: 14px; color: #3d3428; background: #fff; font-family: inherit; }
                .pe-input:focus { outline: none; border-color: #b8952e; }
                .pe-title { font-size: 18px; font-weight: 600; }
                .pe-slug-row { display: flex; align-items: center; border: 1px solid #d9d2c5; border-radius: 7px; overflow: hidden; }
                .pe-slug-row .pe-input { border: none; border-radius: 0; }
                .pe-slug-prefix { padding: 0 10px; color: #a89a88; font-size: 13px; background: #f7f3ec; align-self: stretch; display: flex; align-items: center; }
                .pe-card { background: #fff; border: 1px solid #ece6da; border-radius: 10px; padding: 14px 16px; margin-bottom: 16px; }
                .pe-card .pe-label:first-child { margin-top: 0; }
                .pe-cover img { width: 100%; border-radius: 8px; display: block; }
                .pe-muted { color: #a89a88; font-size: 13px; margin: 0; }
                .pe-error { background: #fdecea; color: #b3261e; border: 1px solid #f5c6c0; padding: 10px 14px; border-radius: 8px; margin-bottom: 16px; font-size: 14px; }
                .pe-btn { padding: 9px 16px; border-radius: 7px; border: 1px solid #d9d2c5; background: #fff; color: #3d3428; font-size: 14px; cursor: pointer; font-weight: 500; }
                .pe-btn:hover { background: #f4efe6; }
                .pe-btn.primary { background: #b8952e; border-color: #b8952e; color: #fff; }
                .pe-btn.primary:hover { background: #a5841f; }
                .pe-btn.ghost { background: transparent; }
                .pe-btn.sm { padding: 6px 12px; font-size: 13px; }
                .pe-btn:disabled { opacity: .6; cursor: not-allowed; }
            `}</style>
        </div>
    );
}
