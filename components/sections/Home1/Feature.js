import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { homepageTreatments } from '@/lib/homepageTreatments';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
    { name: "Balinese Massage", image: "/images/listmenu/balinesemassage.webp", icon: "/images/spa/Balinese.svg" },
    { name: "Cream Bath", image: "/images/listmenu/creambath.webp", icon: "/images/spa/CreamBath.svg" },
    { name: "Hot Stone Massage", image: "/images/listmenu/hotstonemassage.webp", icon: "/images/spa/HotStone.svg" },
    { name: "Sports Massage", image: "/images/listmenu/sportmassage.webp", icon: "/images/spa/sports.svg" },
    { name: "Bali Moon Facial", image: "/images/listmenu/balimoonteatreefacial.webp", icon: "/images/spa/Balinese.svg" },
    { name: "Deep Tissue Massage", image: "/images/listmenu/deeptissuemassage.webp", icon: "/images/spa/DeepTissue.svg" },
    { name: "Head Massage", image: "/images/listmenu/headmassage.webp", icon: "/images/spa/Head.svg" },
    { name: "Sunburn Treatment", image: "/images/listmenu/aloeveramassage.webp", icon: "/images/spa/Sunburn.svg" },
    { name: "Body Scrub", image: "/images/listmenu/bodyscrub.webp", icon: "/images/spa/Scrub.svg" },
    { name: "Ear Candle", image: "/images/listmenu/earcandle.webp", icon: "/images/spa/EarCandle.svg" },
    { name: "Lymphatic Massage", image: "/images/listmenu/lymphaticmassage%20.webp", icon: "/images/spa/Lymphatic.svg" },
    { name: "Traditional Massage", image: "/images/listmenu/traditionalmassage.webp", icon: "/images/spa/Balinese.svg" },
    { name: "Cellulite Massage", image: "/images/listmenu/cellulitemassage.webp", icon: "/images/spa/cellulite.svg" },
    { name: "Foot Massage", image: "/images/listmenu/footmassage.webp", icon: "/images/spa/FootMassage.svg" },
    { name: "Manicure Pedicure", image: "/images/listmenu/manicurepedicure.webp", icon: "/images/spa/Manicure.svg" },
    { name: "Thai Massage", image: "/images/listmenu/thaimassage.webp", icon: "/images/spa/thai.svg" },
    { name: "Couple Massage", image: "/images/listmenu/couplemassage.webp", icon: "/images/spa/Couple.svg" },
    { name: "Foot Reflexology", image: "/images/listmenu/footreflexology.webp", icon: "/images/spa/FootReflexology.svg" },
    { name: "Nail Art", image: "/images/listmenu/manicurepedicure.webp", icon: "/images/spa/NailArt.svg" },
    { name: "Waxing", image: "/images/listmenu/waxing.webp", icon: "/images/spa/waxing.svg" },
    { name: "Coconut Oil Massage", image: "/images/listmenu/coconutoilmassage.webp", icon: "/images/spa/CoconutOil.svg" },
    { name: "Hair Braiding", image: "/images/listmenu/creambath.webp", icon: "/images/spa/HairBraiding.svg" },
    { name: "Shiatsu Massage", image: "/images/listmenu/shiatsumassage.webp", icon: "/images/spa/Shiatsu.svg" }
];

const homepageTreatmentByName = new Map(
    homepageTreatments.map((treatment) => [treatment.name, treatment])
);

const treatmentNameAliases = {
    "Bali Moon Facial": "Bali Moon Tea Tree Facial",
    "Coconut Oil Massage": "Virgin Cold-Press Coconut Oil Massage",
    "Couple Massage": "Couple Massage Balinese",
    "Cream Bath": "Hair Cream Bath",
    "Hot Stone Massage": "Warm Stone Massage",
    "Sunburn Treatment": "Aloe Vera Massage",
};

const standaloneServiceHrefs = {
    "Hair Braiding": "/seminyak/hair-braiding",
    "Nail Art": "/seminyak/nail-spa",
};

// Hair Braiding and Nail Art are the two cards with no entry in
// homepageTreatments, so their opening prices are carried here. They match the
// cheapest option on /seminyak/hair-braiding and /seminyak/nail-spa.
const standaloneServicePrices = {
    "Hair Braiding": "IDR 279K",
    "Nail Art": "IDR 159K",
};

// The card carries no other pricing context the way the catalog and the
// package tables do, so it keeps the IDR prefix instead of stripping it.
const withCurrency = (price) => (/^IDR/i.test(price) ? price : `IDR ${price}`);

// Prices are written as "IDR 159K" throughout the site, so comparing them only
// needs the number in front of the K.
const priceValue = (price) => {
    const match = /([\d.]+)\s*K/i.exec(price || "");
    return match ? Number(match[1]) : Number.POSITIVE_INFINITY;
};

// Most treatments are priced by session length, but scrubs, cream baths, nails
// and waxing are priced by variant or body part instead ("Chocolate",
// "Half Legs"). Only a real duration is worth putting on the card.
const isDuration = (label) => /\b(hour|hours|minute|minutes|min|mins)\b/i.test(label || "");

const openingPriceLabel = (treatment, serviceName) => {
    const options = treatment?.options || [];
    if (!options.length) {
        const fallback = standaloneServicePrices[serviceName];
        return fallback ? `From ${withCurrency(fallback)}` : null;
    }
    const cheapest = options.reduce((lowest, option) =>
        priceValue(option.price) < priceValue(lowest.price) ? option : lowest
    );
    const from = `From ${withCurrency(cheapest.price)}`;
    return isDuration(cheapest.label) ? `${from} | ${cheapest.label}` : from;
};

const linkedServices = services.map((service) => {
    const treatment = homepageTreatmentByName.get(
        treatmentNameAliases[service.name] || service.name
    );
    const price = openingPriceLabel(treatment, service.name);
    return treatment
        ? { ...service, href: treatment.href, image: treatment.image, price }
        : { ...service, href: standaloneServiceHrefs[service.name], price };
});

export default function Home1_Feature({
    images = [],
    services: serviceItems = linkedServices,
    excludeHref,
    showHeader = false,
    subTitle = "Services",
    title = "Our Services Will Make You Glow",
}) {
    const visibleServices = serviceItems.filter((service) => service.href !== excludeHref);
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
        <section id="projects" className={`feature-section pb-100${showHeader ? ' pt-130' : ''}`}>
            <div className="container">
                {showHeader && (
                    <div className="section-header mb-60 center">
                        <h4 className="sub-title">{subTitle}</h4>
                        <h2 className="title">{title}</h2>
                    </div>
                )}
                <Swiper {...swiperOptions} className="swiper feature-slider">
                    <div className="swiper-wrapper">
                        {visibleServices.map((service, index) => (
                            <SwiperSlide key={service.href || service.name} className="feature-block swiper-slide">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <img loading="lazy" decoding="async" src={images[index] || service.image} alt={service.name} />
                                    </div>
                                    <div className="content-box">
                                        <div className="icon">
                                            <img loading="lazy" decoding="async" src={service.icon} alt={service.name} style={{ width: '80px', height: '80px' }} />
                                        </div>
                                        <div className="info">
                                            {service.price && <h6 className="sub-title">{service.price}</h6>}
                                            <h3><Link prefetch={false} href={service.href || "/page-service-details"}>{service.name}</Link></h3>
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
                        <button type="button" className="feature-arry-prev" aria-label="Previous slide"><i className="fa-regular fa-angle-left" aria-hidden="true"></i></button>
                        <button type="button" className="feature-arry-next" aria-label="Next slide"><i className="fa-regular fa-angle-right" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
