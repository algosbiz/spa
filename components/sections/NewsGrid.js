import Link from 'next/link';
import React from 'react';

const BlogOne = () => {

    return (
        <>
        <section className="blog-section-two pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xl-4  mb-30 blog-block wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="image">
                                    <img src="images/blog/blog-image1.jpg" alt="imag" />
                                </div>
                            </div>
                            <div className="content-box">
                                <h6 className="info">
                                    <span>Admin</span>
                                    <span className="dot">Body, Treatment</span>
                                </h6>
                                <h4 className="title">
                                    <Link href="/news-details">Spring is in the Air and So Our These Amazing Spa Offers</Link>
                                </h4>
                                <Link className="readMore-btn" href="/news-details">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4  mb-30 blog-block wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="image">
                                    <img src="images/blog/blog-image2.jpg" alt="imag" />
                                </div>
                            </div>
                            <div className="content-box">
                                <h6 className="info">
                                    <span>Admin</span>
                                    <span className="dot">Body, Treatment</span>
                                </h6>
                                <h4 className="title">
                                    <Link href="/news-details">We giving Amazing special spa and message service for vip.</Link>
                                </h4>
                                <Link className="readMore-btn" href="/news-details">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4  mb-30 blog-block wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="image">
                                    <img src="images/blog/blog-image3.jpg" alt="imag" />
                                </div>
                            </div>
                            <div className="content-box">
                                <h6 className="info">
                                    <span>Admin</span>
                                    <span className="dot">Body, Treatment</span>
                                </h6>
                                <h4 className="title">
                                    <Link href="/news-details">Looks reasonable. The generate is therefore always.</Link>
                                </h4>
                                <Link className="readMore-btn" href="/news-details">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4  mb-30 blog-block wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="image">
                                    <img src="images/blog/blog-image2.jpg" alt="imag" />
                                </div>
                            </div>
                            <div className="content-box">
                                <h6 className="info">
                                    <span>Admin</span>
                                    <span className="dot">Body, Treatment</span>
                                </h6>
                                <h4 className="title">
                                    <Link href="/news-details">We giving Amazing special spa and message service for vip.</Link>
                                </h4>
                                <Link className="readMore-btn" href="/news-details">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4  mb-30 blog-block wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="image">
                                    <img src="images/blog/blog-image3.jpg" alt="imag" />
                                </div>
                            </div>
                            <div className="content-box">
                                <h6 className="info">
                                    <span>Admin</span>
                                    <span className="dot">Body, Treatment</span>
                                </h6>
                                <h4 className="title">
                                    <Link href="/news-details">Looks reasonable. The generate is therefore always.</Link>
                                </h4>
                                <Link className="readMore-btn" href="/news-details">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4  mb-30 blog-block wow fadeInLeft" data-wow-delay="500ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="image">
                                    <img src="images/blog/blog-image1.jpg" alt="imag" />
                                </div>
                            </div>
                            <div className="content-box">
                                <h6 className="info">
                                    <span>Admin</span>
                                    <span className="dot">Body, Treatment</span>
                                </h6>
                                <h4 className="title">
                                    <Link href="/news-details">Spring is in the Air and So Our These Amazing Spa Offers</Link>
                                </h4>
                                <Link className="readMore-btn" href="/news-details">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default BlogOne;