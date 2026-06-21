import Link from 'next/link';
import { useState } from 'react';

const FALLBACK_IMAGE = '/images/resource/news-details.jpg';

const BlogDetails = ({ post, recentPosts = [] }) => {
    const [formData, setFormData] = useState({
        form_name: "",
        form_email: "",
        form_message: "",
        form_botcheck: "",
    });

    const [submitting, setSubmitting] = useState(false);

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
                                            <a href="#"><i className="fa fa-x"></i></a>
                                            <a href="#"><i className="fab fa-facebook"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
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
                                <div className="sidebar__single sidebar__search">
                                    <form action="#" className="sidebar__search-form">
                                        <input type="search" placeholder="Search here" />
                                        <button type="submit">
                                            <i className="fa-classic fa-light fa-magnifying-glass fa-fw"></i>
                                        </button>
                                    </form>
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
            `}</style>
        </>
    );
};

export default BlogDetails;
