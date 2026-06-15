import React, { useState } from 'react';
import Link from 'next/link';

export default function PackageSection() {
    const [activeIndex, setActiveIndex] = useState(2);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

  return (
    <section className="package-section section__decoration-top section__decoration-bottom pt-170 pb-170">
        <div className="shape1 wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <img className="sway_Y__animationY" src="/images/shape/package-shape-left.png" alt="image"/>
        </div>
        <div className="shape2">
            <img className="sway__animation" src="/images/shape/package-shape-right.png" alt="image"/>
        </div>
        <div className="container">
            <div className="section-header mb-60 center">
                <h4 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                    Best Price
                </h4>
                <h2 className="title wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Our Flexible
                    Pricing Plan</h2>
            </div>
            <div className="package-tab mb-60">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className={activeIndex === 1 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(1)} id="item1-tab" data-bs-toggle="tab" data-bs-target="#item1" role="tab"
                            aria-controls="item1" aria-selected="true">
                            <div className="icon-box">
                            </div>
                            <h6 className="title">SPA Solution</h6>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={activeIndex === 2 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(2)} id="item2-tab" data-bs-toggle="tab" data-bs-target="#item2" role="tab"
                            aria-controls="item2" aria-selected="false">
                            <div className="icon-box">
                            </div>
                            <h6 className="title">Massage</h6>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="tab-content" id="myTabContent">
                <div className={activeIndex === 1 ? "tab-pane fade show active" : "tab-pane fade show"} id="item1" role="tabpanel" aria-labelledby="item1-tab">
                    <div className="row g-5">
                        <div className="col-lg-6 package-block">
                            <div className="inner-box mb-50">
                                <div className="image">
                                    <img src="/images/package/package-image1.png" alt="image"/>
                                </div>
                                <div className="content">
                                    <h3 className="title"><Link href="/page-pricing">Aroma therapy</Link> <span
                                            className="line"></span>
                                        <span>from</span> $50
                                    </h3>
                                    <p>20 mins Revitalize Facial</p>
                                </div>
                            </div>
                            <div className="inner-box mb-50">
                                <div className="image">
                                    <img src="/images/package/package-image2.png" alt="image"/>
                                </div>
                                <div className="content">
                                    <h3 className="title"><Link href="/page-pricing">Sauna relax</Link> <span
                                            className="line"></span>
                                        <span>from</span> $50
                                    </h3>
                                    <p>20 mins Revitalize Facial</p>
                                </div>
                            </div>
                            <div className="inner-box mb-50">
                                <div className="image">
                                    <img src="/images/package/package-image3.png" alt="image"/>
                                </div>
                                <div className="content">
                                    <h3 className="title"><Link href="/page-pricing">Geothermal spa</Link> <span
                                            className="line"></span>
                                        <span>from</span> $50
                                    </h3>
                                    <p>20 mins Revitalize Facial</p>
                                </div>
                            </div>
                            <div className="inner-box">
                                <div className="image">
                                    <img src="/images/package/package-image4.png" alt="image"/>
                                </div>
                                <div className="content">
                                    <h3 className="title"><Link href="/page-pricing">Aroma therapy</Link> <span
                                            className="line"></span>
                                        <span>from</span> $50
                                    </h3>
                                    <p>20 mins Revitalize Facial</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 package-block">
                            <div className="inner-box mb-50">
                                <div className="image">
                                    <img src="/images/package/package-image5.png" alt="image"/>
                                </div>
                                <div className="content">
                                    <h3 className="title"><Link href="/page-pricing">Aroma therapy</Link> <span
                                            className="line"></span>
                                        <span>from</span> $50
                                    </h3>
                                    <p>20 mins Revitalize Facial</p>
                                </div>
                            </div>
                            <div className="inner-box mb-50">
                                <div className="image">
                                    <img src="/images/package/package-image6.png" alt="image"/>
                                </div>
                                <div className="content">
                                    <h3 className="title"><Link href="/page-pricing">Sauna relax</Link> <span
                                            className="line"></span>
                                        <span>from</span> $50
                                    </h3>
                                    <p>20 mins Revitalize Facial</p>
                                </div>
                            </div>
                            <div className="inner-box mb-50">
                                <div className="image">
                                    <img src="/images/package/package-image7.png" alt="image"/>
                                </div>
                                <div className="content">
                                    <h3 className="title"><Link href="/page-pricing">Geothermal spa</Link> <span
                                            className="line"></span>
                                        <span>from</span> $50
                                    </h3>
                                    <p>20 mins Revitalize Facial</p>
                                </div>
                            </div>
                            <div className="inner-box">
                                <div className="image">
                                    <img src="/images/package/package-image8.png" alt="image"/>
                                </div>
                                <div className="content">
                                    <h3 className="title"><Link href="/page-pricing">Aroma therapy</Link> <span
                                            className="line"></span>
                                        <span>from</span> $50
                                    </h3>
                                    <p>20 mins Revitalize Facial</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeIndex === 2 ? "tab-pane fade show active" : "tab-pane fade show"} id="item2" role="tabpanel" aria-labelledby="item2-tab">
                    <div className="row g-5">
                        <div className="col-lg-6 package-block">
                            <div className="inner-box mb-50">
                                <div className="image">
                                    <img src="/images/package/package-image1.png" alt="image"/>
                                </div>
                                <div className="content">
                                    <h3 className="title"><Link href="/page-pricing">Aroma therapy</Link> <span
                                            className="line"></span>
                                        <span>from</span> $50
                                    </h3>
                                    <p>20 mins Revitalize Facial</p>
                                </div>
                            </div>
                            <div className="inner-box mb-50">
                                <div className="image">
                                    <img src="/images/package/package-image2.png" alt="image"/>
                                </div>
                                <div className="content">
                                    <h3 className="title"><Link href="/page-pricing">Sauna relax</Link> <span
                                            className="line"></span>
                                        <span>from</span> $60
                                    </h3>
                                    <p>20 mins Revitalize Facial</p>
                                </div>
                            </div>
                            <div className="inner-box mb-50">
                                <div className="image">
                                    <img src="/images/package/package-image3.png" alt="image"/>
                                </div>
                                <div className="content">
                                    <h3 className="title"><Link href="/page-pricing">Geothermal spa</Link> <span
                                            className="line"></span>
                                        <span>from</span> $70
                                    </h3>
                                    <p>20 mins Revitalize Facial</p>
                                </div>
                            </div>
                            <div className="inner-box">
                                <div className="image">
                                    <img src="/images/package/package-image4.png" alt="image"/>
                                </div>
                                <div className="content">
                                    <h3 className="title"><Link href="/page-pricing">Aroma therapy</Link> <span
                                            className="line"></span>
                                        <span>from</span> $80
                                    </h3>
                                    <p>20 mins Revitalize Facial</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 package-block">
                            <div className="inner-box mb-50">
                                <div className="image">
                                    <img src="/images/package/package-image5.png" alt="image"/>
                                </div>
                                <div className="content">
                                    <h3 className="title"><Link href="/page-pricing">Aroma therapy</Link> <span
                                            className="line"></span>
                                        <span>from</span> $90
                                    </h3>
                                    <p>20 mins Revitalize Facial</p>
                                </div>
                            </div>
                            <div className="inner-box mb-50">
                                <div className="image">
                                    <img src="/images/package/package-image6.png" alt="image"/>
                                </div>
                                <div className="content">
                                    <h3 className="title"><Link href="/page-pricing">Sauna relax</Link> <span
                                            className="line"></span>
                                        <span>from</span> $50
                                    </h3>
                                    <p>20 mins Revitalize Facial</p>
                                </div>
                            </div>
                            <div className="inner-box mb-50">
                                <div className="image">
                                    <img src="/images/package/package-image7.png" alt="image"/>
                                </div>
                                <div className="content">
                                    <h3 className="title"><Link href="/page-pricing">Geothermal spa</Link> <span
                                            className="line"></span>
                                        <span>from</span> $30
                                    </h3>
                                    <p>20 mins Revitalize Facial</p>
                                </div>
                            </div>
                            <div className="inner-box">
                                <div className="image">
                                    <img src="/images/package/package-image8.png" alt="image"/>
                                </div>
                                <div className="content">
                                    <h3 className="title"><Link href="/page-pricing">Aroma therapy</Link> <span
                                            className="line"></span>
                                        <span>from</span> $60
                                    </h3>
                                    <p>20 mins Revitalize Facial</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
