import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 0,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1199: {
            slidesPerView: 5,
        },
        1350: {
            slidesPerView: 5,
        },
    },
};
export default function Home2_Instagram() {
    return (
        <>
        <div className="instagram-section-two">
            <div className="container">
                <Swiper {...swiperOptions} className="swiper instagram-slider">
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide instagram-block">
                            <Link href="#0" className="inner-box">
                                <img src="images/instagram/instagram-image1.jpg" alt="image"/>
                                <div className="icon"><i className="fa-brands fa-instagram"></i></div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide instagram-block">
                            <Link href="#0" className="inner-box">
                                <img src="images/instagram/instagram-image2.jpg" alt="image"/>
                                <div className="icon"><i className="fa-brands fa-instagram"></i></div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide instagram-block">
                            <Link href="#0" className="inner-box">
                                <img src="images/instagram/instagram-image3.jpg" alt="image"/>
                                <div className="icon"><i className="fa-brands fa-instagram"></i></div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide instagram-block">
                            <Link href="#0" className="inner-box">
                                <img src="images/instagram/instagram-image4.jpg" alt="image"/>
                                <div className="icon"><i className="fa-brands fa-instagram"></i></div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide instagram-block">
                            <Link href="#0" className="inner-box">
                                <img src="images/instagram/instagram-image5.jpg" alt="image"/>
                                <div className="icon"><i className="fa-brands fa-instagram"></i></div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide instagram-block">
                            <Link href="#0" className="inner-box">
                                <img src="images/instagram/instagram-image2.jpg" alt="image"/>
                                <div className="icon"><i className="fa-brands fa-instagram"></i></div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide instagram-block">
                            <Link href="#0" className="inner-box">
                                <img src="images/instagram/instagram-image3.jpg" alt="image"/>
                                <div className="icon"><i className="fa-brands fa-instagram"></i></div>
                            </Link>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </div>
        </>
    )
}
