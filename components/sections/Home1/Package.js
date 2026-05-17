import React, { useState } from 'react';
import Link from 'next/link';

const defaultOptions = [
    { time: '30 mins', price: '$50' },
    { time: '60 mins', price: '$90' },
    { time: '90 mins', price: '$120' }
];

const servicesTab1 = [
    {
        id: 1, name: 'Aloe Vera Massage', defaultPrice: '$50', desc: 'A soothing treatment that helps calm the skin, reduce irritation, and support gentle recovery after travel or sun exposure.', image: 'images/package/package-image1.png', options: [
            { time: '60 mins', price: 'IDR 199K' },
        ]
    },
    {
        id: 2, name: 'Aromatheraphy Massage', defaultPrice: '$50', desc: 'A calming treatment that uses essential oils and gentle strokes to ease tension and support circulation.', image: 'images/package/package-image2.png', options: [
            { time: '1 Hour', price: '169K' },
            { time: '1.5 Hours', price: '239K' },
            { time: '2 Hours', price: '339K' }
        ]
    },
    {
        id: 3, name: 'Bali Moon Tea Tree Facial', defaultPrice: '$50', desc: 'A purifying facial treatment for oily or blemish-prone skin using clay, tea tree care, and nourishing oils to restore balance.', image: 'images/package/package-image3.png',
        benefits: [
            'Regulates shine and excess oil',
            'Aids in decreasing redness and breakouts',
            'Soothes and refreshes the skin',
            'Maintains balanced hydration'
        ],
        options: [
            { time: 'Price', price: '196K' }
        ]
    },
    { id: 4, name: 'Aroma therapy', defaultPrice: '$50', desc: 'Essential oil massage to balance mind, body, and spirit.', image: 'images/package/package-image4.png', options: defaultOptions },
    {
        id: 5, name: 'Balinese Massage', defaultPrice: '$50', desc: 'Traditional Balinese technique for deep tissue relaxation.', image: 'images/package/package-image5.png', options: [
            { time: '60 mins', price: '$85' },
            { time: '90 mins', price: '$115' }
        ]
    },
    {
        id: 6, name: 'Body Scrub', defaultPrice: '$50', desc: 'Exfoliating treatment for smooth and radiant skin.', image: 'images/package/package-image6.png', options: [
            { time: '45 mins', price: '$60' }
        ]
    },
    {
        id: 7, name: 'Foot Reflexology', defaultPrice: '$50', desc: 'Pressure point massage on feet to improve circulation.', image: 'images/package/package-image7.png', options: [
            { time: '30 mins', price: '$35' },
            { time: '60 mins', price: '$60' }
        ]
    },
    { id: 8, name: 'Hot Stone Massage', defaultPrice: '$50', desc: 'Heated stones used to melt away tension and stress.', image: 'images/package/package-image8.png', options: defaultOptions },
];

const servicesTab2 = [
    {
        id: 11, name: 'Deep Tissue', defaultPrice: '$50', desc: 'Intense pressure to release chronic muscle tension.', image: 'images/package/package-image1.png', options: [
            { time: '60 mins', price: '$95' },
            { time: '90 mins', price: '$130' }
        ]
    },
    { id: 12, name: 'Thai Massage', defaultPrice: '$60', desc: 'Ancient yoga-like stretching for flexibility.', image: 'images/package/package-image2.png', options: defaultOptions },
    {
        id: 13, name: 'Facial Treatment', defaultPrice: '$70', desc: 'Skin cleansing and hydration for a youthful glow.', image: 'images/package/package-image3.png', options: [
            { time: '60 mins', price: '$75' }
        ]
    },
    {
        id: 14, name: 'Head & Shoulder', defaultPrice: '$80', desc: 'Relief for tension in the upper body.', image: 'images/package/package-image4.png', options: [
            { time: '30 mins', price: '$40' },
            { time: '45 mins', price: '$55' }
        ]
    },
    {
        id: 15, name: 'Manicure & Pedicure', defaultPrice: '$90', desc: 'Complete nail care and hand/foot massage.', image: 'images/package/package-image5.png', options: [
            { time: '90 mins', price: '$90' }
        ]
    },
    {
        id: 16, name: 'Pregnancy Massage', defaultPrice: '$50', desc: 'Gentle care for expectant mothers.', image: 'images/package/package-image6.png', options: [
            { time: '60 mins', price: '$85' }
        ]
    },
    { id: 17, name: 'Sports Massage', defaultPrice: '$30', desc: 'Focused treatment for athletes.', image: 'images/package/package-image7.png', options: defaultOptions },
    {
        id: 18, name: 'Ear Candle', defaultPrice: '$60', desc: 'Traditional ear clearing and relaxation.', image: 'images/package/package-image8.png', options: [
            { time: '30 mins', price: '$30' }
        ]
    },
];

const PackageItem = ({ item, isLast }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`inner-box ${!isLast ? 'mb-50' : ''}`}>
            <div className="image">
                <img src={item.image} alt="image" />
            </div>
            <div className="content">
                <h3 className="title">
                    <a href="#" onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen); }} style={{ cursor: 'pointer' }}>
                        {item.name} {isOpen ? <i className="fa-solid fa-angle-up ms-1" style={{ fontSize: '14px' }}></i> : <i className="fa-solid fa-angle-down ms-1" style={{ fontSize: '14px' }}></i>}
                    </a>
                </h3>
                {item.desc && <p className="text" style={{ marginTop: '2px', marginBottom: '0', fontSize: '14px', color: '#5f5a54' }}>{item.desc}</p>}
                <div
                    className="pricing-dropdown"
                    style={{
                        padding: isOpen ? '5px 0 10px' : '0',
                        maxHeight: isOpen ? '500px' : '0',
                        opacity: isOpen ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'all 0.4s ease-in-out',
                        visibility: isOpen ? 'visible' : 'hidden',
                        marginTop: isOpen ? '5px' : '0'
                    }}
                >
                    {item.benefits && (
                        <div className="benefits-list" style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                            <p style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#2f2924' }}>Benefits:</p>
                            <ul className="list-unstyled" style={{ paddingLeft: '0' }}>
                                {item.benefits.map((benefit, idx) => (
                                    <li key={idx} style={{ fontSize: '13px', color: '#5f5a54', display: 'flex', gap: '10px', marginBottom: '5px', lineHeight: '1.4' }}>
                                        <i className="fa-solid fa-circle" style={{ fontSize: '5px', marginTop: '8px', color: '#A78627' }}></i>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <ul className="list-unstyled mb-0" style={{ paddingLeft: '0' }}>
                        {item.options.map((opt, idx) => (
                            <li key={idx} className="d-flex justify-content-between align-items-center pb-2 mb-2" style={{ borderBottom: '1px solid #e1e1e1' }}>
                                <span style={{ fontFamily: 'var(--subtitle-font)', fontSize: '18px', color: '#6A6F73' }}>{opt.time}</span>
                                <span style={{ fontFamily: 'var(--title-font)', fontSize: '24px', fontWeight: '500', color: 'var(--title-color)' }}>{opt.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default function PackageSection() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    const halfLength1 = Math.ceil(servicesTab1.length / 2);
    const tab1Col1 = servicesTab1.slice(0, halfLength1);
    const tab1Col2 = servicesTab1.slice(halfLength1);

    const halfLength2 = Math.ceil(servicesTab2.length / 2);
    const tab2Col1 = servicesTab2.slice(0, halfLength2);
    const tab2Col2 = servicesTab2.slice(halfLength2);

    return (
        <section className="package-section section__decoration-top section__decoration-bottom bg-sub-two pt-170 pb-170">
            <div className="shape1 wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                <img className="sway_Y__animationY" src="images/shape/package-shape-left.png" alt="image" />
            </div>
            <div className="shape2">
                <img className="sway__animation" src="images/shape/package-shape-right.png" alt="image" />
            </div>
            <div className="container">
                <div className="section-header mb-60 center">
                    <h4 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        Best Price
                    </h4>
                    <h2 className="title wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Our Flexible
                        Pricing Plan</h2>
                </div>
                <div className="package-tab mb-60">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className={activeIndex === 1 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(1)} id="item1-tab" data-bs-toggle="tab" data-bs-target="#item1" role="tab"
                                aria-controls="item1" aria-selected="true">
                                <div className="icon-box">
                                </div>
                                <h6 className="title">HOME SERVICE FEE</h6>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={activeIndex === 2 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(2)} id="item2-tab" data-bs-toggle="tab" data-bs-target="#item2" role="tab"
                                aria-controls="item2" aria-selected="false">
                                <div className="icon-box">
                                </div>
                                <h6 className="title">EXTRA 75K/THERAPIST</h6>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                    <div className={activeIndex === 1 ? "tab-pane fade show active" : "tab-pane fade show"} id="item1" role="tabpanel" aria-labelledby="item1-tab">
                        <div className="row g-5">
                            <div className="col-lg-6 package-block">
                                {tab1Col1.map((item, idx) => (
                                    <PackageItem key={item.id} item={item} isLast={idx === tab1Col1.length - 1} />
                                ))}
                            </div>
                            <div className="col-lg-6 package-block">
                                {tab1Col2.map((item, idx) => (
                                    <PackageItem key={item.id} item={item} isLast={idx === tab1Col2.length - 1} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={activeIndex === 2 ? "tab-pane fade show active" : "tab-pane fade show"} id="item2" role="tabpanel" aria-labelledby="item2-tab">
                        <div className="row g-5">
                            <div className="col-lg-6 package-block">
                                {tab2Col1.map((item, idx) => (
                                    <PackageItem key={item.id} item={item} isLast={idx === tab2Col1.length - 1} />
                                ))}
                            </div>
                            <div className="col-lg-6 package-block">
                                {tab2Col2.map((item, idx) => (
                                    <PackageItem key={item.id} item={item} isLast={idx === tab2Col2.length - 1} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
