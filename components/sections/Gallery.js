import Link from 'next/link';
import React from 'react';

const Gallery = () => {
    
    return (
        <>
        <section className="gellery-section pt-120 pb-120">
            <div className="container-fluid">
                <div className="row g-3">
                    <div className="col-sm-6 col-xl-3 gellery-block">
                        <div className="inner-box mb-3">
                            <img src="images/gellery/gellery-image1.jpg" alt="image"/>
                            <div className="content">
                                <Link className="lightbox-image" href="images/gellery/gellery-image1.jpg"><i
                                        className="fa-light fa-plus"></i></Link>
                                <h4><Link href="/page-gallery">Ruler Massage</Link></h4>
                                <h6>Classic</h6>
                            </div>
                        </div>
                        <div className="inner-box">
                            <img src="images/gellery/gellery-image5.jpg" alt="image"/>
                            <div className="content">
                                <Link className="lightbox-image" href="images/gellery/gellery-image5.jpg"><i
                                        className="fa-light fa-plus"></i></Link>
                                <h4><Link href="/page-gallery">Ruler Massage</Link></h4>
                                <h6>Classic</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3 gellery-block">
                        <div className="inner-box mb-3">
                            <img src="images/gellery/gellery-image2.jpg" alt="image"/>
                            <div className="content">
                                <Link className="lightbox-image" href="images/gellery/gellery-image2.jpg"><i
                                        className="fa-light fa-plus"></i></Link>
                                <h4><Link href="/page-gallery">Ruler Massage</Link></h4>
                                <h6>Classic</h6>
                            </div>
                        </div>
                        <div className="inner-box">
                            <img src="images/gellery/gellery-image6.jpg" alt="image"/>
                            <div className="content">
                                <Link className="lightbox-image" href="images/gellery/gellery-image6.jpg"><i
                                        className="fa-light fa-plus"></i></Link>
                                <h4><Link href="/page-gallery">Ruler Massage</Link></h4>
                                <h6>Classic</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3 gellery-block">
                        <div className="inner-box mb-3">
                            <img src="images/gellery/gellery-image3.jpg" alt="image"/>
                            <div className="content">
                                <Link className="lightbox-image" href="images/gellery/gellery-image3.jpg"><i
                                        className="fa-light fa-plus"></i></Link>
                                <h4><Link href="/page-gallery">Ruler Massage</Link></h4>
                                <h6>Classic</h6>
                            </div>
                        </div>
                        <div className="inner-box">
                            <img src="images/gellery/gellery-image7.jpg" alt="image"/>
                            <div className="content">
                                <Link className="lightbox-image" href="images/gellery/gellery-image7.jpg"><i
                                        className="fa-light fa-plus"></i></Link>
                                <h4><Link href="/page-gallery">Ruler Massage</Link></h4>
                                <h6>Classic</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3 gellery-block">
                        <div className="inner-box mb-3">
                            <img src="images/gellery/gellery-image4.jpg" alt="image"/>
                            <div className="content">
                                <Link className="lightbox-image" href="images/gellery/gellery-image4.jpg"><i
                                        className="fa-light fa-plus"></i></Link>
                                <h4><Link href="/page-gallery">Ruler Massage</Link></h4>
                                <h6>Classic</h6>
                            </div>
                        </div>
                        <div className="inner-box">
                            <img src="images/gellery/gellery-image8.jpg" alt="image"/>
                            <div className="content">
                                <Link className="lightbox-image" href="images/gellery/gellery-image8.jpg"><i
                                        className="fa-light fa-plus"></i></Link>
                                <h4><Link href="/page-gallery">Ruler Massage</Link></h4>
                                <h6>Classic</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Gallery;