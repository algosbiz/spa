import React, { useState } from 'react';
import Link from 'next/link';

const defaultOptions = [
    { time: '30 mins', price: '$50' },
    { time: '60 mins', price: '$90' },
    { time: '90 mins', price: '$120' }
];

const servicesTab1 = [
  { id: 1, name: 'Aroma therapy', defaultPrice: '$50', desc: '20 mins Revitalize Facial', image: 'images/package/package-image1.png', options: defaultOptions },
  { id: 2, name: 'Sauna relax', defaultPrice: '$50', desc: '20 mins Revitalize Facial', image: 'images/package/package-image2.png', options: defaultOptions },
  { id: 3, name: 'Geothermal spa', defaultPrice: '$50', desc: '20 mins Revitalize Facial', image: 'images/package/package-image3.png', options: defaultOptions },
  { id: 4, name: 'Aroma therapy', defaultPrice: '$50', desc: '20 mins Revitalize Facial', image: 'images/package/package-image4.png', options: defaultOptions },
  { id: 5, name: 'Aroma therapy', defaultPrice: '$50', desc: '20 mins Revitalize Facial', image: 'images/package/package-image5.png', options: defaultOptions },
  { id: 6, name: 'Sauna relax', defaultPrice: '$50', desc: '20 mins Revitalize Facial', image: 'images/package/package-image6.png', options: defaultOptions },
  { id: 7, name: 'Geothermal spa', defaultPrice: '$50', desc: '20 mins Revitalize Facial', image: 'images/package/package-image7.png', options: defaultOptions },
  { id: 8, name: 'Aroma therapy', defaultPrice: '$50', desc: '20 mins Revitalize Facial', image: 'images/package/package-image8.png', options: defaultOptions },
];

const servicesTab2 = [
  { id: 11, name: 'Aroma therapy', defaultPrice: '$50', desc: '20 mins Revitalize Facial', image: 'images/package/package-image1.png', options: defaultOptions },
  { id: 12, name: 'Sauna relax', defaultPrice: '$60', desc: '20 mins Revitalize Facial', image: 'images/package/package-image2.png', options: defaultOptions },
  { id: 13, name: 'Geothermal spa', defaultPrice: '$70', desc: '20 mins Revitalize Facial', image: 'images/package/package-image3.png', options: defaultOptions },
  { id: 14, name: 'Aroma therapy', defaultPrice: '$80', desc: '20 mins Revitalize Facial', image: 'images/package/package-image4.png', options: defaultOptions },
  { id: 15, name: 'Aroma therapy', defaultPrice: '$90', desc: '20 mins Revitalize Facial', image: 'images/package/package-image5.png', options: defaultOptions },
  { id: 16, name: 'Sauna relax', defaultPrice: '$50', desc: '20 mins Revitalize Facial', image: 'images/package/package-image6.png', options: defaultOptions },
  { id: 17, name: 'Geothermal spa', defaultPrice: '$30', desc: '20 mins Revitalize Facial', image: 'images/package/package-image7.png', options: defaultOptions },
  { id: 18, name: 'Aroma therapy', defaultPrice: '$60', desc: '20 mins Revitalize Facial', image: 'images/package/package-image8.png', options: defaultOptions },
];

const PackageItem = ({ item, isLast }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`inner-box ${!isLast ? 'mb-50' : ''}`}>
            <div className="image">
                <img src={item.image} alt="image"/>
            </div>
            <div className="content">
                <h3 className="title">
                    <a href="#" onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen); }} style={{cursor: 'pointer'}}>
                        {item.name} {isOpen ? <i className="fa-solid fa-angle-up ms-1" style={{fontSize: '14px'}}></i> : <i className="fa-solid fa-angle-down ms-1" style={{fontSize: '14px'}}></i>}
                    </a> 
                    <span className="line"></span>
                    <span>from</span> {item.defaultPrice}
                </h3>
                <p>{item.desc}</p>
                <div 
                    className="pricing-dropdown" 
                    style={{ 
                        padding: isOpen ? '15px 0' : '0', 
                        maxHeight: isOpen ? '300px' : '0',
                        opacity: isOpen ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'all 0.4s ease-in-out',
                        visibility: isOpen ? 'visible' : 'hidden',
                        marginTop: isOpen ? '15px' : '0'
                    }}
                >
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
    const [activeIndex, setActiveIndex] = useState(2);
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
            <img className="sway_Y__animationY" src="images/shape/package-shape-left.png" alt="image"/>
        </div>
        <div className="shape2">
            <img className="sway__animation" src="images/shape/package-shape-right.png" alt="image"/>
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
                            <h6 className="title">SPA Solution</h6>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={activeIndex === 2 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(2)} id="item2-tab" data-bs-toggle="tab" data-bs-target="#item2" role="tab"
                            aria-controls="item2" aria-selected="false">
                            <div className="icon-box">
                            </div>
                            <h6 className="title">Massage</h6>
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
