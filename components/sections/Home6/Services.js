import React from 'react';
import Link from 'next/link';

export default function Home6_Services() {
    return (
        <>
        <section id="services" className="service-section-six">
            <div className="outer-box">
                <div className="service-block-six mb-20">
                    <div className="image gsap__parallax-zoom">
                        <img src="images/service/service-six-image1.jpg" alt="image"/>
                    </div>
                    <h2 className="title"><Link href="/page-service-details">Foot Reflexology</Link></h2>
                </div>
                <div className="service-block-six mb-20">
                    <div className="image gsap__parallax-zoom">
                        <img src="images/service/service-six-image2.jpg" alt="image"/>
                    </div>
                    <h2 className="title"><Link href="/page-service-details">Stone Message</Link></h2>
                </div>
                <div className="service-block-six">
                    <div className="image gsap__parallax-zoom">
                        <img src="images/service/service-six-image3.jpg" alt="image"/>
                    </div>
                    <h2 className="title"><Link href="/page-service-details">Swedish Massage</Link></h2>
                </div>
            </div>
        </section>
        </>
    )
}
