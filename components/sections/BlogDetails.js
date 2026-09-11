import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';

const FALLBACK_IMAGE = '/images/resource/news-details.jpg';

// Pinned to UTC so the server and the browser format the same string and
// hydration doesn't warn about a mismatch near midnight.
const formatDate = (value) => {
    if (!value) return '';
    return new Date(value).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC',
    });
};

const BlogDetails = ({ post, recentPosts = [], prevPost = null, nextPost = null, morePosts = [] }) => {
    // Search state
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searching, setSearching] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef(null);
    const debounceRef = useRef(null);

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
            const res = await fetch(`/api/search-posts/?q=${encodeURIComponent(q.trim())}`);
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

    const tags = Array.isArray(post?.tags) ? post.tags : [];

    return (
        <>
            <section className="blog-details pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-details__left">
                                {/* The cover image is the page-title hero background, so
                                    repeating it here would show the same photo twice in a
                                    row. The date it used to carry moves into the meta row. */}
                                <div className="blog-details__content">
                                    <ul className="list-unstyled blog-details__meta">
                                        {post?.category && (
                                            <li>
                                                <a href="#">
                                                    <i className="fas fa-folder"></i> {post.category}
                                                </a>
                                            </li>
                                        )}
                                        {post?.published_at && (
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>{' '}
                                                <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
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
                                                            <Link href={`/guide/${sr.slug}`} onClick={() => setShowResults(false)}>
                                                                <div className="sidebar-search-results__item">
                                                                    {sr.cover_image && (
                                                                        <img loading="lazy" decoding="async" src={sr.cover_image} alt={sr.title} />
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
                                                    <img loading="lazy" decoding="async" src={rp.cover_image || '/images/resource/news-1.jpg'} alt={rp.title} />
                                                </div>
                                                <div className="sidebar__post-content">
                                                    <h3>
                                                        <span className="sidebar__post-content-meta">
                                                            <i className="fas fa-user-circle"></i>{rp.author || 'Admin'}
                                                        </span>
                                                        <Link href={`/guide/${rp.slug}`}>{rp.title}</Link>
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

            {(prevPost || nextPost || morePosts.length > 0) && (
                /* Same torn-paper wrapper the homepage and treatment pages use:
                   the decoration classes own ::before/::after, bg-sub paints the
                   cream sheet, and pt-100/pb-100 keep the shared tablet rhythm. */
                <div className="guide-more-paper section__decoration-top section__decoration-bottom bg-sub">
                <section className="post-more pt-100 pb-100">
                    <div className="container">
                        {(prevPost || nextPost) && (
                            <nav className="post-nav" aria-label="Other articles">
                                {prevPost && (
                                    <Link href={`/guide/${prevPost.slug}`} className="post-nav__link post-nav__link--prev">
                                        <span className="post-nav__thumb">
                                            <img
                                                loading="lazy"
                                                decoding="async"
                                                src={prevPost.cover_image || FALLBACK_IMAGE}
                                                alt=""
                                            />
                                        </span>
                                        <span className="post-nav__text">
                                            <span className="post-nav__label">Previous</span>
                                            <span className="post-nav__title">{prevPost.title}</span>
                                        </span>
                                    </Link>
                                )}
                                {nextPost && (
                                    <Link href={`/guide/${nextPost.slug}`} className="post-nav__link post-nav__link--next">
                                        <span className="post-nav__text">
                                            <span className="post-nav__label">Next</span>
                                            <span className="post-nav__title">{nextPost.title}</span>
                                        </span>
                                        <span className="post-nav__thumb">
                                            <img
                                                loading="lazy"
                                                decoding="async"
                                                src={nextPost.cover_image || FALLBACK_IMAGE}
                                                alt=""
                                            />
                                        </span>
                                    </Link>
                                )}
                            </nav>
                        )}

                        {morePosts.length > 0 && (
                            <>
                                <h3 className="post-more__title">More Articles</h3>
                                <div className="post-more__grid">
                                    {morePosts.map((item) => (
                                        <Link key={item.id} href={`/guide/${item.slug}`} className="post-more__card">
                                            <span className="post-more__image">
                                                <img
                                                    loading="lazy"
                                                    decoding="async"
                                                    src={item.cover_image || FALLBACK_IMAGE}
                                                    alt={item.title}
                                                />
                                            </span>
                                            <span className="post-more__body">
                                                <span className="post-more__heading">{item.title}</span>
                                                {item.published_at && (
                                                    <time className="post-more__date" dateTime={item.published_at}>
                                                        {formatDate(item.published_at)}
                                                    </time>
                                                )}
                                                {item.excerpt && <span className="post-more__excerpt">{item.excerpt}</span>}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </section>
                </div>
            )}

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

                /* ---- Previous / Next + more articles ---- */
                /* Background and vertical padding come from bg-sub + pt/pb-100
                   on the wrapper, so the torn-paper edges line up with the rest
                   of the site. */
                .post-nav {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 24px 40px;
                    padding-bottom: 32px;
                    margin-bottom: 48px;
                    border-bottom: 1px solid #d9d2c6;
                }
                /* A lone Previous (oldest post) or Next (newest) keeps its side. */
                .post-nav__link--next:only-child { grid-column: 2; }
                .post-nav__link {
                    display: flex;
                    align-items: center;
                    gap: 18px;
                    text-decoration: none;
                    color: inherit;
                }
                .post-nav__link--next { justify-content: flex-end; text-align: right; }
                .post-nav__thumb {
                    flex-shrink: 0;
                    width: 64px;
                    height: 64px;
                    border-radius: 8px;
                    overflow: hidden;
                    background: #e7e1d6;
                }
                .post-nav__thumb img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }
                .post-nav__text { display: block; min-width: 0; }
                .post-nav__label {
                    display: block;
                    font-size: 14px;
                    letter-spacing: .04em;
                    color: #9a8f7e;
                    margin-bottom: 4px;
                }
                .post-nav__title {
                    display: block;
                    font-size: 18px;
                    line-height: 1.4;
                    color: #b8952e;
                    transition: color .2s ease;
                }
                .post-nav__link:hover .post-nav__title { color: #8f7223; }

                .post-more__title {
                    font-size: 26px;
                    color: #2f281e;
                    margin: 0 0 28px;
                }
                .post-more__grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 32px;
                }
                .post-more__card {
                    display: block;
                    text-decoration: none;
                    color: inherit;
                }
                .post-more__image {
                    display: block;
                    aspect-ratio: 16 / 10;
                    border-radius: 10px;
                    overflow: hidden;
                    background: #e7e1d6;
                    margin-bottom: 16px;
                }
                .post-more__image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform .45s ease;
                }
                .post-more__card:hover .post-more__image img { transform: scale(1.05); }
                .post-more__body { display: block; }
                .post-more__heading {
                    display: block;
                    font-size: 19px;
                    line-height: 1.35;
                    color: #2f281e;
                    margin-bottom: 6px;
                    transition: color .2s ease;
                }
                .post-more__card:hover .post-more__heading { color: #b8952e; }
                .post-more__date {
                    display: block;
                    font-size: 14px;
                    color: #9a8f7e;
                    margin-bottom: 10px;
                }
                .post-more__excerpt {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    font-size: 15px;
                    line-height: 1.6;
                    color: #6b5e4e;
                }

                @media (max-width: 991px) {
                    .post-more__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
                }
                @media (max-width: 767px) {
                    .post-nav {
                        grid-template-columns: minmax(0, 1fr);
                        margin-bottom: 36px;
                    }
                    .post-nav__link--next:only-child { grid-column: 1; }
                    .post-nav__link--next { justify-content: flex-start; text-align: left; flex-direction: row-reverse; }
                    .post-more__grid { grid-template-columns: minmax(0, 1fr); }
                }

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


