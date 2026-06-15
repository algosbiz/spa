import React from 'react';

export default function Home5_Banner() {
    return (
        <>
        <section id="home" className="banner-five-area section__decoration-bottom paralax__animation mb-130">
            <div className="banner-five__shape-one parallaxLeftScroll">
                <img src="/images/shape/banner-five-shape1.png" alt="image"/>
            </div>
            <div className="banner-five__shape-two parallaxLeftScroll">
                <img className="animation__arryLeftRight" src="/images/shape/banner-five-shape2.png" alt="image"/>
            </div>
            <div className="container">
                <div className="banner-five__wrp">
                    <div className="banner-five__content">
                        <h1 className="title">Experience <span>Bliss, Embrace</span></h1>
                        <div className="info">
                            <a href="https://wa.me/6287863031503" target="_blank" rel="noopener noreferrer" className="video-btn wow zoomIn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderColor: '#a78627' }}>
                                <i className="fa-brands fa-whatsapp" style={{ color: '#a78627', fontSize: '45px' }}></i>
                            </a>
                            <p className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur
                                ligula, eget egestas magna mi ut arcu.</p>
                            <div className="arry">
                                <img className="animation__arryUpDown" src="/images/banner/banner-five-arry.png" alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className="banner-five__image-left">
                        <div className="gsap__parallax">
                            <img src="/images/banner/banner-five-image1.jpg" alt="image"/>
                        </div>
                        <img className="shape" data-depth="0.03" src="/images/banner/banner-five-image2.jpg"
                            alt="image"/>
                    </div>
                    <div className="banner-five__image-right">
                        <div className="gsap__parallax">
                            <img src="/images/banner/banner-five-image1-shape.png" alt="image"/>
                        </div>
                        <img className="shape parallaxRightRotateScroll" src="/images/banner/banner-five-image2-shape.png"
                            alt="image"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
