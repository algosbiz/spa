import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
    { name: "Balinese Massage", image: "images/service/service-image1.jpg" },
    { name: "Cream Bath", image: "images/service/service-image2.jpg" },
    { name: "Hot Stone Massage", image: "images/service/service-image1.jpg" },
    { name: "Sports Massage", image: "images/service/service-image2.jpg" },
    { name: "Bali Moon Facial", image: "images/service/service-image1.jpg" },
    { name: "Deep Tissue Massage", image: "images/service/service-image2.jpg" },
    { name: "Head Massage", image: "images/service/service-image1.jpg" },
    { name: "Sunburn Treatment", image: "images/service/service-image2.jpg" },
    { name: "Body Scrub", image: "images/service/service-image1.jpg" },
    { name: "Ear Candle", image: "images/service/service-image2.jpg" },
    { name: "Lymphatic Massage", image: "images/service/service-image1.jpg" },
    { name: "Traditional Massage", image: "images/service/service-image2.jpg" },
    { name: "Cellulite Massage", image: "images/service/service-image1.jpg" },
    { name: "Foot Massage", image: "images/service/service-image2.jpg" },
    { name: "Manicure Pedicure", image: "images/service/service-image1.jpg" },
    { name: "Thai Massage", image: "images/service/service-image2.jpg" },
    { name: "Couple Massage", image: "images/service/service-image1.jpg" },
    { name: "Foot Reflexology", image: "images/service/service-image2.jpg" },
    { name: "Nail Art", image: "images/service/service-image1.jpg" },
    { name: "Waxing", image: "images/service/service-image2.jpg" },
    { name: "Coconut Oil Massage", image: "images/service/service-image1.jpg" },
    { name: "Hair Braiding", image: "images/service/service-image2.jpg" },
    { name: "Shiatsu Massage", image: "images/service/service-image1.jpg" }
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
                                            <svg width="81" height="80" viewBox="0 0 81 80" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M17.653 43.1256C17.653 38.647 21.2835 35.0165 25.7621 35.0165C30.2407 35.0165 33.8712 38.647 33.8712 43.1256C33.8712 47.6041 30.2407 51.2346 25.7621 51.2346C21.2835 51.2346 17.653 47.6041 17.653 43.1256Z"
                                                    stroke="#B39242" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <path
                                                    d="M47.1288 43.1256C47.1288 38.647 50.7593 35.0165 55.2379 35.0165C59.7165 35.0165 63.347 38.647 63.347 43.1256C63.347 47.6041 59.7165 51.2346 55.2379 51.2346C50.7593 51.2346 47.1288 47.6041 47.1288 43.1256Z"
                                                    stroke="#B39242" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <path
                                                    d="M21.7075 43.1256C21.7075 40.8863 23.5228 39.071 25.7621 39.071C28.0014 39.071 29.8167 40.8863 29.8167 43.1256C29.8167 45.3649 28.0014 47.1802 25.7621 47.1802C23.5228 47.1802 21.7075 45.3649 21.7075 43.1256Z"
                                                    fill="#B39242" />
                                                <path
                                                    d="M51.1834 43.1256C51.1834 40.8863 52.9987 39.071 55.238 39.071C57.4773 39.071 59.2926 40.8863 59.2926 43.1256C59.2926 45.3649 57.4773 47.1802 55.238 47.1802C52.9987 47.1802 51.1834 45.3649 51.1834 43.1256Z"
                                                    fill="#B39242" />
                                                <path
                                                    d="M72.4678 40.0834V46.1668C72.4678 47.2882 71.5592 48.1968 70.4378 48.1968H63.347V51.2346C63.347 52.356 62.4384 53.2646 61.317 53.2646H55.2337C54.1123 53.2646 53.2037 52.356 53.2037 51.2346V48.1968H27.7963V51.2346C27.7963 52.356 26.8877 53.2646 25.7663 53.2646H19.683C18.5616 53.2646 17.653 52.356 17.653 51.2346V48.1968H10.5622C9.4408 48.1968 8.53223 47.2882 8.53223 46.1668V40.0834C8.53223 38.9621 9.4408 38.0535 10.5622 38.0535H17.653V35.0157C17.653 33.8943 18.5616 32.9857 19.683 32.9857H25.7663C26.8877 32.9857 27.7963 33.8943 27.7963 35.0157V38.0535H53.2037V35.0157C53.2037 33.8943 54.1123 32.9857 55.2337 32.9857H61.317C62.4384 32.9857 63.347 33.8943 63.347 35.0157V38.0535H70.4378C71.5592 38.0535 72.4678 38.9621 72.4678 40.0834Z"
                                                    stroke="#B39242" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <path
                                                    d="M27.7963 20.8118L26.7832 23.8509C25.77 26.89 26.7832 29.9291 29.8223 30.9423L32.8614 31.9554C35.9004 32.9685 38.9395 31.9554 39.9526 28.9163L40.9658 25.8772C41.9789 22.8382 40.9658 19.7991 37.9267 18.7859L34.8876 17.7728C31.8485 16.7597 28.8094 17.7728 27.7963 20.8118Z"
                                                    stroke="#B39242" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <path
                                                    d="M53.2037 20.8118L54.2168 23.8509C55.23 26.89 54.2168 29.9291 51.1777 30.9423L48.1386 31.9554C45.0996 32.9685 42.0605 31.9554 41.0474 28.9163L40.0342 25.8772C39.0211 22.8382 40.0342 19.7991 43.0733 18.7859L46.1124 17.7728C49.1515 16.7597 52.1906 17.7728 53.2037 20.8118Z"
                                                    stroke="#B39242" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <circle cx="40.5" cy="40" r="39.5" stroke="#B39242" />
                                            </svg>
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
