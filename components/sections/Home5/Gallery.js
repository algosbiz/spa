import React from 'react';
import Link from 'next/link';

export default function Home5_Gallery() {
    return (
        <>
        <section className="gallery-section-two pt-130">
            <div className="container-fluid px-3 px-md-4">
                <div className="row g-4 align-items-center">
                    <div className="col-sm-6 col-lg-3 gallery-block-two wow bounceInUp" data-wow-delay="100ms"
                        data-wow-duration="1500ms">
                        <div className="inner-box">
                            <img src="/images/gellery/gallery-two-image1.jpg" alt="image"/>
                            <div className="content">
                                <h5 className="sub-title">Escape</h5>
                                <h3 className="title"><Link href="/page-service-details">Relaxation</Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 gallery-block-two wow bounceInUp" data-wow-delay="200ms"
                        data-wow-duration="1500ms">
                        <div className="inner-box">
                            <img src="/images/gellery/gallery-two-image2.jpg" alt="image"/>
                            <div className="content">
                                <h5 className="sub-title">Beauty</h5>
                                <h3 className="title"><Link href="/page-service-details">Hot Spring</Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 gallery-block-two wow bounceInUp" data-wow-delay="300ms"
                        data-wow-duration="1500ms">
                        <div className="inner-box">
                            <img src="/images/gellery/gallery-two-image3.jpg" alt="image"/>
                            <div className="content">
                                <h5 className="sub-title">Hot</h5>
                                <h3 className="title"><Link href="/page-service-details">Wellness</Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 gallery-block-two wow bounceInUp" data-wow-delay="400ms"
                        data-wow-duration="1500ms">
                        <div className="inner-box">
                            <img src="/images/gellery/gallery-two-image4.jpg" alt="image"/>
                            <div className="content">
                                <h5 className="sub-title">Hot</h5>
                                <h3 className="title"><Link href="/page-service-details">Redefined</Link></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
