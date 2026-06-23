import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';

const FALLBACK_IMAGE = '/images/resource/news-details.jpg';

const BlogDetails = ({ post, recentPosts = [] }) => {
    const [formData, setFormData] = useState({
        form_name: "",
        form_email: "",
        form_message: "",
        form_botcheck: "",
    });

    const [submitting, setSubmitting] = useState(false);

    // Search state
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searching, setSearching] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef(null);
    const debounceRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            alert("Comment submitted!");
            setSubmitting(false);
            setFormData({ form_name: "", form_email: "", form_message: "", form_botcheck: "" });
        }, 1000);
    };

    // Debounced search
    const doSearch = useCallback(async (q) => {
        if (!q || q.trim().length < 2) {
            setSearchResults([]);
            setShowResults(false);
            setSearching(false);
            return;
        }
        setSearching(true);
        try {
            const res = await fetch(`/api/search-posts?q=${encodeURIComponent(q.trim())}`);
            const data = await res.json();
            setSearchResults(data.posts || []);
            setShowResults(true);
        } catch {
            setSearchResults([]);
        } finally {
            setSearching(false);
        }
    }, []);

    const handleSearchInput = (e) => {
        const val = e.target.value;
        setSearchQuery(val);
        if (debounceRef.current) clearTimeout(debounceRef.current);
        if (!val || val.trim().length < 2) {
            setSearchResults([]);
            setShowResults(false);
            return;
        }
        setSearching(true);
        debounceRef.current = setTimeout(() => doSearch(val), 400);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (debounceRef.current) clearTimeout(debounceRef.current);
        doSearch(searchQuery);
    };

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setShowResults(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const date = post?.published_at ? new Date(post.published_at) : null;
    const day = date ? date.toLocaleDateString('en-GB', { day: '2-digit' }) : '';
    const month = date ? date.toLocaleDateString('en-GB', { month: 'short' }) : '';
    const tags = Array.isArray(post?.tags) ? post.tags : [];

    return (
        <>
            <section className="blog-details pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-details__left">
                                <div className="blog-details__img">
                                    <img src={post?.cover_image || FALLBACK_IMAGE} alt={post?.title || 'Image'} />
                                    {date && (
                                        <div className="blog-details__date">
                                            <span className="day">{day}</span>
                                            <span className="month">{month}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="blog-details__content">
                                    <ul className="list-unstyled blog-details__meta">
                                        {post?.category && (
                                            <li>
                                                <a href="#">
                                                    <i className="fas fa-folder"></i> {post.category}
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                    <h3 className="blog-details__title">{post?.title}</h3>

                                    {/* Admin-authored, sanitized HTML from the WYSIWYG editor */}
                                    <div
                                        className="blog-details__rich"
                                        dangerouslySetInnerHTML={{ __html: post?.content_html || '' }}
                                    />
                                </div>

                                {tags.length > 0 && (
                                    <div className="blog-details__bottom">
                                        <p className="blog-details__tags">
                                            <span>Tags</span>
                                            {tags.map((t) => (
                                                <a href="#" key={t}>{t}</a>
                                            ))}
                                        </p>
                                        <div className="blog-details__social-list">
                                            <a href="#"><i className="fab fa-facebook"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                )}

                                <div className="comment-one">
                                    <div className="comment-form">
                                        <h3 className="comment-form__title mb-4">Leave a Comment</h3>
                                        <form id="contact_form" name="contact_form" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <input name="form_name" className="form-control" type="text" placeholder="Enter Name" value={formData.form_name} onChange={handleChange} required />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <input name="form_email" className="form-control" type="email" placeholder="Enter Email" value={formData.form_email} onChange={handleChange} required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <textarea name="form_message" className="form-control" rows="5" placeholder="Enter Message" value={formData.form_message} onChange={handleChange} required />
                                            </div>
                                            <div className="mb-3">
                                                <input name="form_botcheck" className="form-control" type="hidden" value={formData.form_botcheck} onChange={handleChange} />
                                                <button type="submit" className="btn-one" disabled={submitting} data-loading-text="Please wait...">
                                                    <span className="btn-title">{submitting ? "Please wait..." : "Submit Comment"}</span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="sidebar">
                                <div className="sidebar__single sidebar__search" ref={searchRef}>
                                    <form className="sidebar__search-form" onSubmit={handleSearchSubmit}>
                                        <input
                                            type="search"
                                            placeholder="Search here"
                                            value={searchQuery}
                                            onChange={handleSearchInput}
                                            onFocus={() => { if (searchResults.length > 0) setShowResults(true); }}
                                        />
                                        <button type="submit">
                                            <i className="fa-classic fa-light fa-magnifying-glass fa-fw"></i>
                                        </button>
                                    </form>
                                    {/* Search results dropdown */}
                                    {showResults && (
                                        <div className="sidebar-search-results">
                                            {searching && (
                                                <div className="sidebar-search-results__loading">Searching...</div>
                                            )}
                                            {!searching && searchResults.length === 0 && (
                                                <div className="sidebar-search-results__empty">No posts found.</div>
                                            )}
                                            {!searching && searchResults.length > 0 && (
                                                <ul className="sidebar-search-results__list">
                                                    {searchResults.map((sr) => (
                                                        <li key={sr.id}>
                                                            <Link href={`/blog/${sr.slug}`} onClick={() => setShowResults(false)}>
                                                                <div className="sidebar-search-results__item">
                                                                    {sr.cover_image && (
                                                                        <img src={sr.cover_image} alt={sr.title} />
                                                                    )}
                                                                    <div className="sidebar-search-results__text">
                                                                        <strong>{sr.title}</strong>
                                                                        {sr.excerpt && <p>{sr.excerpt.slice(0, 80)}…</p>}
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <div className="sidebar__single sidebar__post">
                                    <h3 className="sidebar__title">Latest Posts</h3>
                                    <ul className="sidebar__post-list list-unstyled">
                                        {recentPosts.map((rp) => (
                                            <li key={rp.id}>
                                                <div className="sidebar__post-image">
                                                    <img src={rp.cover_image || '/images/resource/news-1.jpg'} alt={rp.title} />
                                                </div>
                                                <div className="sidebar__post-content">
                                                    <h3>
                                                        <span className="sidebar__post-content-meta">
                                                            <i className="fas fa-user-circle"></i>{rp.author || 'Admin'}
                                                        </span>
                                                        <Link href={`/blog/${rp.slug}`}>{rp.title}</Link>
                                                    </h3>
                                                </div>
                                            </li>
                                        ))}
                                        {recentPosts.length === 0 && <li><p>No other posts yet.</p></li>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx global>{`
                .blog-details__rich { color: #6b5e4e; line-height: 1.8; }
                .blog-details__rich p { margin-bottom: 1.2em; }
                .blog-details__rich h2 { font-size: 1.7em; margin: 1em 0 .5em; color: #2f281e; }
                .blog-details__rich h3 { font-size: 1.35em; margin: 1em 0 .5em; color: #2f281e; }
                .blog-details__rich img { max-width: 100%; height: auto; border-radius: 10px; margin: 1em 0; }
                .blog-details__rich ol { padding-left: 1.5em; margin-bottom: 1.2em; }
                .blog-details__rich ol li { margin-bottom: .4em; }
                /* Bullet lists use the brand lotus icon as the marker */
                .blog-details__rich ul { list-style: none; padding-left: 0; margin-bottom: 1.2em; }
                .blog-details__rich ul li { position: relative; padding-left: 38px; margin-bottom: .7em; }
                .blog-details__rich ul li::before {
                    content: ''; position: absolute; left: 0; top: 2px;
                    width: 23px; height: 24px;
                    background: url('/images/icon/lotus.svg') no-repeat center / contain;
                }
                .blog-details__rich blockquote { border-left: 3px solid #b8952e; padding: .4em 1.2em; margin: 1.2em 0; color: #6b5e4e; font-style: italic; background: #faf7f1; }
                .blog-details__rich a { color: #b8952e; text-decoration: underline; }

                /* Search results dropdown */
                .sidebar__search { position: relative; }
                .sidebar-search-results {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: #fff;
                    border: 1px solid #ece9e0;
                    border-top: none;
                    border-radius: 0 0 10px 10px;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
                    z-index: 100;
                    max-height: 380px;
                    overflow-y: auto;
                }
                .sidebar-search-results__loading,
                .sidebar-search-results__empty {
                    padding: 16px 20px;
                    color: #999;
                    font-size: 14px;
                    text-align: center;
                }
                .sidebar-search-results__list {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                .sidebar-search-results__list li {
                    border-bottom: 1px solid #f5f2ec;
                }
                .sidebar-search-results__list li:last-child {
                    border-bottom: none;
                }
                .sidebar-search-results__list li a {
                    display: block;
                    padding: 12px 16px;
                    transition: background 0.2s ease;
                    text-decoration: none;
                    color: inherit;
                }
                .sidebar-search-results__list li a:hover {
                    background: #faf7f1;
                }
                .sidebar-search-results__item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .sidebar-search-results__item img {
                    width: 50px;
                    height: 50px;
                    object-fit: cover;
                    border-radius: 8px;
                    flex-shrink: 0;
                }
                .sidebar-search-results__text {
                    min-width: 0;
                }
                .sidebar-search-results__text strong {
                    display: block;
                    font-size: 14px;
                    line-height: 1.3;
                    color: #1c1a1d;
                    margin-bottom: 2px;
                }
                .sidebar-search-results__text p {
                    margin: 0;
                    font-size: 12px;
                    color: #999;
                    line-height: 1.4;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            `}</style>
        </>
    );
};

export default BlogDetails;


