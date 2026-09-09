import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const defaultTestimonials = [
    { name: "Wade Warren", designation: "Happy Client", text: "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet.", stars: 5 },
    { name: "Jane William", designation: "Happy Client", text: "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet.", stars: 5 },
    { name: "Guy Hawkins", designation: "Happy Client", text: "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet.", stars: 5 },
    { name: "Robert Fox", designation: "Happy Client", text: "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet.", stars: 5 },
];

function QuoteIcon() {
    return (
        <svg width="56" height="40" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M55.125 14.1875C55.125 17.8317 54.4211 21.3452 53.0342 24.6281C48.69 35.08 42.5634 39.356 31.8977 39.375C31.8957 39.375 31.8957 39.375 31.8938 39.375C30.9704 39.375 30.1758 38.7242 29.9941 37.8198C29.8123 36.9134 30.295 36.0053 31.1482 35.6496C36.2607 33.5191 37.797 31.0234 39.5965 25.8127H35.75C32.5448 25.8127 29.9375 23.2054 29.9375 20.0002V6.4375C29.9375 3.23229 32.5448 0.625 35.75 0.625H49.216C49.8744 0.625 50.4893 0.959994 50.8451 1.51431C53.4297 5.53114 55.125 8.58309 55.125 14.1875ZM20.1535 0.625H6.6875C3.48229 0.625 0.875 3.23229 0.875 6.4375V20C0.875 23.2052 3.48229 25.8125 6.6875 25.8125H10.5342C8.73486 31.0234 7.19842 33.5189 2.08594 35.6494C1.23266 36.0051 0.750031 36.9132 0.931769 37.8196C1.11331 38.7242 1.90807 39.375 2.83149 39.375H2.83536C13.5011 39.356 19.6277 35.08 23.9719 24.6281C25.3586 21.3452 26.0625 17.8317 26.0625 14.1875C26.0625 8.58309 24.3672 5.53114 21.7826 1.51431C21.4268 0.959994 20.8119 0.625 20.1535 0.625Z" fill="#A78627" />
        </svg>
    );
}

function reviewToTestimonial(review, reviewsUrl) {
    return {
        id: review.id,
        name: review.name || "Google user",
        designation: review.relativeTime ? `Google review · ${review.relativeTime}` : "Google review",
        text: review.text,
        stars: Math.max(1, Math.min(5, Math.round(review.rating || 5))),
        avatar: review.photo,
        sourceUrl: review.url || reviewsUrl,
    };
}

export default function Home2_Testimonial({
    paperDecoration = true,
    rightShapeSrc = "/images/shape/testimonial-two-shape-right.png",
    testimonialsData = null,
    googleReviews = null,
    reviewKey = null,
}) {
    const router = useRouter();
    const pageKey = reviewKey || router.asPath || router.pathname || "treatment";
    const [liveReviews, setLiveReviews] = useState(googleReviews?.reviews || []);
    const [reviewsUrl, setReviewsUrl] = useState(googleReviews?.reviewsUrl || null);

    useEffect(() => {
        if (googleReviews?.reviews?.length || testimonialsData?.length) return;

        let cancelled = false;
        fetch(`/api/google-reviews?key=${encodeURIComponent(pageKey)}`)
            .then((response) => response.ok ? response.json() : null)
            .then((data) => {
                if (!cancelled && data) {
                    setLiveReviews(data.reviews || []);
                    setReviewsUrl(data.reviewsUrl || null);
                }
            })
            .catch(() => {});

        return () => { cancelled = true; };
    }, [googleReviews, testimonialsData, pageKey]);

    const items = useMemo(() => {
        if (testimonialsData?.length) return testimonialsData;
        if (liveReviews.length) return liveReviews.map((review) => reviewToTestimonial(review, reviewsUrl));
        return defaultTestimonials;
    }, [liveReviews, reviewsUrl, testimonialsData]);

    const swiperOptions = {
        modules: [Autoplay],
        slidesPerView: 1,
        autoplay: { delay: 5000, disableOnInteraction: false },
        loop: items.length > 1,
        autoHeight: true,
    };

    return (
        <section className={`testimonial-section-two${paperDecoration ? " section__decoration-top section__decoration-bottom bg-sub" : ""} pt-170 pb-170`}>
            <div className="shape1"><img loading="lazy" decoding="async" className="animation__arryUpDown" src="/images/shape/testimonial-two-shape-left.png" alt="" aria-hidden="true" /></div>
            <div className="shape2"><img loading="lazy" decoding="async" className="animation__arryLeftRight" src={rightShapeSrc} alt="" aria-hidden="true" /></div>
            <div className="shape3"><img loading="lazy" decoding="async" className="bobble__animation" src="/images/logo/sbm.webp" alt="Spa Bali Moon watermark" /></div>
            <div className="container">
                <div className="outer-box">
                    <Swiper {...swiperOptions} className="swiper testimonial-slider-two wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="swiper-wrapper">
                            {items.map((item, index) => (
                                <SwiperSlide key={item.id || `${item.name}-${index}`} className="swiper-slide testimonial-block-two">
                                    <div className="inner-box">
                                        <div className="icon"><QuoteIcon /></div>
                                        <p className="text">{item.text}</p>
                                        <div className="info">
                                            {item.avatar && <img className="review-avatar" src={item.avatar} alt="" loading="lazy" referrerPolicy="no-referrer" onError={(event) => { event.currentTarget.style.display = "none"; }} />}
                                            <h4>{item.name}</h4>
                                            <span>{item.designation || "Happy Client"}</span>
                                            <div className="star" aria-label={`${item.stars || 5} out of 5 stars`}>
                                                {[...Array(item.stars || 5)].map((_, starIndex) => <i key={starIndex} className="fa-solid fa-star" aria-hidden="true"></i>)}
                                            </div>
                                            {item.sourceUrl && <a className="review-source" href={item.sourceUrl} target="_blank" rel="noopener noreferrer">Posted on Google</a>}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
