import React from 'react';
import Link from 'next/link';

export default function HomeServiceBanner() {
    return (
        <>
            <section className="banner-two-area section__decoration-bottom" style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="banner-two__shape">
                    <img src="images/shape/banner-three-shape.png" alt="shape" />
                </div>
                <div className="slide-bg" style={{ 
                    backgroundImage: 'url(images/banner/banner-two-image1.jpg)', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    height: '80vh',
                    minHeight: '600px',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                        <div className="banner-two__content">
                            <h4 className="sub-title" style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '10px', 
                                color: '#ffffff',
                                fontFamily: 'var(--text-font)'
                            }}>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1_451)">
                                        <path
                                            d="M12.5 17.1875C12.3459 17.1875 12.199 17.1187 12.1 17C8.47609 12.65 8.47609 7.66143 12.1 3.31143C12.2969 3.07393 12.7021 3.07393 12.9 3.31143C16.524 7.66143 16.524 12.65 12.9 17C12.8011 17.1187 12.6542 17.1875 12.5 17.1875ZM12.5 4.48226C9.71359 8.16143 9.71359 12.151 12.5 15.8302C15.2865 12.151 15.2865 8.16143 12.5 4.48226Z"
                                            fill="white" />
                                    </g>
                                </svg>
                                Pure Balinese Spa Home Services
                            </h4>
                            <h1 className="title" style={{ 
                                color: '#ffffff', 
                                fontSize: '64px', 
                                fontWeight: '700', 
                                lineHeight: '1.2',
                                fontFamily: 'var(--title-font)' 
                            }}>
                                <span>Balinese Massage</span> <br /> Delivered To Your Place
                            </h1>
                            <Link href="https://wa.me/6287863175144" className="btn-two-light mt-50" target="_blank" style={{ fontFamily: 'var(--text-font)' }}>
                                Book via WhatsApp
                                <span className="icon_box" style={{ marginLeft: '10px' }}>
                                    <i className="fa-brands fa-whatsapp"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                    {/* Dark overlay for text readability */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.45)',
                        zIndex: 1
                    }}></div>
                </div>
            </section>
        </>
    );
}
