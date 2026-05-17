import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
    { name: "Balinese Massage", image: "images/service/service-image1.jpg", icon: "images/spa/Balinese.svg" },
    { name: "Cream Bath", image: "images/service/service-image2.jpg", icon: "images/spa/CreamBath.svg" },
    { name: "Hot Stone Massage", image: "images/service/service-image1.jpg", icon: "images/spa/HotStone.svg" },
    { name: "Sports Massage", image: "images/service/service-image2.jpg", icon: "images/spa/sports.svg" },
    { name: "Bali Moon Facial", image: "images/service/service-image1.jpg", icon: "images/spa/Balinese.svg" },
    { name: "Deep Tissue Massage", image: "images/service/service-image2.jpg", icon: "images/spa/DeepTissue.svg" },
    { name: "Head Massage", image: "images/service/service-image1.jpg", icon: "images/spa/Head.svg" },
    { name: "Sunburn Treatment", image: "images/service/service-image2.jpg", icon: "images/spa/Sunburn.svg" },
    { name: "Body Scrub", image: "images/service/service-image1.jpg", icon: "images/spa/Scrub.svg" },
    { name: "Ear Candle", image: "images/service/service-image2.jpg", icon: "images/spa/EarCandle.svg" },
    { name: "Lymphatic Massage", image: "images/service/service-image1.jpg", icon: "images/spa/Lymphatic.svg" },
    { name: "Traditional Massage", image: "images/service/service-image2.jpg", icon: "images/spa/Balinese.svg" },
    { name: "Cellulite Massage", image: "images/service/service-image1.jpg", icon: "images/spa/cellulite.svg" },
    { name: "Foot Massage", image: "images/service/service-image2.jpg", icon: "images/spa/FootMassage.svg" },
    { name: "Manicure Pedicure", image: "images/service/service-image1.jpg", icon: "images/spa/Manicure.svg" },
    { name: "Thai Massage", image: "images/service/service-image2.jpg", icon: "images/spa/thai.svg" },
    { name: "Couple Massage", image: "images/service/service-image1.jpg", icon: "images/spa/Couple.svg" },
    { name: "Foot Reflexology", image: "images/service/service-image2.jpg", icon: "images/spa/FootReflexology.svg" },
    { name: "Nail Art", image: "images/service/service-image1.jpg", icon: "images/spa/NailArt.svg" },
    { name: "Waxing", image: "images/service/service-image2.jpg", icon: "images/spa/waxing.svg" },
    { name: "Coconut Oil Massage", image: "images/service/service-image1.jpg", icon: "images/spa/CoconutOil.svg" },
    { name: "Hair Braiding", image: "images/service/service-image2.jpg", icon: "images/spa/HairBraiding.svg" },
    { name: "Shiatsu Massage", image: "images/service/service-image1.jpg", icon: "images/spa/Shiatsu.svg" }
];

export default function Home1_Feature() {
    const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: '.feature-arry-next',
            prevEl: '.feature-arry-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 2,
            },
            1350: {
                slidesPerView: 2,
            },
        },
    };

    return (
        <>
        <section id="projects" className="feature-section pb-100">
            <div className="container">
                <Swiper {...swiperOptions} className="swiper feature-slider">
                    <div className="swiper-wrapper">
                        {services.map((service, index) => (
                            <SwiperSlide key={index} className="feature-block swiper-slide">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <img src={service.image} alt={service.name} />
                                    </div>
                                    <div className="content-box">
                                        <div className="icon">
                                            <img src={service.icon} alt={service.name} style={{ width: '80px', height: '80px' }} />
                                        </div>
                                        <div className="info">
                                            <h6 className="sub-title">From $50 | 60 mins</h6>
                                            <h3><Link href="/service-details">{service.name}</Link></h3>
                                            <p className="text">Relax and rejuvenate your body and soul.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
                <div className="feature-arrys mt-60">
                    <div className="wrp">
                        <button className="feature-arry-prev"><i className="fa-regular fa-angle-left"></i></button>
                        <button className="feature-arry-next"><i className="fa-regular fa-angle-right"></i></button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
