import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
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
export default function Home1_MarqueeSwiper() {
    return (
        <>
        <div className="marqueeSwiper-area brand-area">
            <div className="container">
                <Swiper {...swiperOptions} dir="rtl" className="swiper marqueeSwiper__slider">
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <div className="brand__item">
                                <img src="/images/brand/brand-image1.png" alt="icon"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand__item">
                                <img src="/images/brand/brand-image2.png" alt="icon"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand__item">
                                <img src="/images/brand/brand-image3.png" alt="icon"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand__item">
                                <img src="/images/brand/brand-image4.png" alt="icon"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand__item">
                                <img src="/images/brand/brand-image5.png" alt="icon"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand__item">
                                <img src="/images/brand/brand-image1.png" alt="icon"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="brand__item">
                                <img src="/images/brand/brand-image2.png" alt="icon"/>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </div>
        </>
    )
}
