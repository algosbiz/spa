import Link from 'next/link';
import React from 'react';

const FALLBACK_IMAGE = '/images/blog/blog-image1.jpg';

const NewsGrid = ({ posts = [] }) => {
    if (!posts.length) {
        return (
            <section className="blog-section-two pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p>No articles yet. Please check back later.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="blog-section-two pt-120 pb-90">
            <div className="container">
                <div className="row">
                    {posts.map((post, i) => (
                        <div
                            key={post.id}
                            className="col-md-6 col-xl-4 mb-30 blog-block wow fadeInLeft"
                            data-wow-delay={`${(i % 3) * 100}ms`}
                            data-wow-duration="1500ms"
                        >
                            <div className="inner-box">
                                <div className="image-box">
                                    <div className="image">
                                        <Link href={`/blog/${post.slug}`}>
                                            <img src={post.cover_image || FALLBACK_IMAGE} alt={post.title} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <h6 className="info">
                                        <span>{post.author || 'Admin'}</span>
                                        {post.category ? <span className="dot">{post.category}</span> : null}
                                    </h6>
                                    <h4 className="title">
                                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h4>
                                    <Link className="readMore-btn" href={`/blog/${post.slug}`}>
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsGrid;
