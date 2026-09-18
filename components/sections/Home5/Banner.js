import React from 'react';
import FrangipaniSpray, { FrangipaniMark } from '../../elements/FrangipaniSpray';

export default function Home5_Banner({
    title = "Experience",
    highlightedTitle = "Bliss, Embrace",
    text = "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu.",
    primaryImage = "/images/banner/banner-five-image1.jpg",
    secondaryImage = "/images/banner/banner-five-image2.jpg",
}) {
    return (
        <>
        <section id="home" className="banner-five-area section__decoration-bottom paralax__animation mb-130">
            <div className="banner-five__shape-one parallaxLeftScroll">
                <img src="/images/shape/about-two-left.png" alt="" aria-hidden="true"/>
            </div>
            {/* Replaces the theme's magenta petal and pink cosmos cut-outs, which
                were the only two things on the page outside the gold and cream
                palette, with the flower the spa is actually surrounded by. */}
            <FrangipaniSpray />
            <div className="container">
                <div className="banner-five__wrp">
                    <div className="banner-five__content">
                        <FrangipaniMark />
                        <h1 className="title">{title} <span>{highlightedTitle}</span></h1>
                        <div className="info">
                            <a href="https://wa.me/6287863175144" target="_blank" rel="noopener noreferrer" className="video-btn wow zoomIn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderColor: '#a78627' }}>
                                <i className="fa-brands fa-whatsapp" style={{ color: '#a78627', fontSize: '45px' }}></i>
                            </a>
                            <p className="text">{text}</p>
                            <div className="arry">
                                <img className="animation__arryUpDown" src="/images/banner/banner-five-arry.png" alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className="banner-five__image-left">
                        <div className="gsap__parallax">
                            <img src={primaryImage} alt="Spa towels and candles"/>
                        </div>
                        <img className="shape" data-depth="0.03" src={secondaryImage}
                            alt="Hot stone spa treatment"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
