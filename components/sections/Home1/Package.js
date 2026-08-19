import React, { useState } from 'react';
import Link from 'next/link';

const defaultOptions = [
    { time: '30 mins', price: '$50' },
    { time: '60 mins', price: '$90' },
    { time: '90 mins', price: '$120' }
];

const servicesTab1 = [
    {
        id: 1, name: 'Aloe Vera Massage', defaultPrice: '$50', desc: 'A soothing treatment that helps calm the skin, reduce irritation, and support gentle recovery after travel or sun exposure.', image: '/images/package/package-image1.png', options: [
            { time: '60 mins', price: 'IDR 199K' },
        ]
    },
    { id: 4, name: 'Aroma therapy', defaultPrice: '$50', desc: 'Essential oil massage to balance mind, body, and spirit.', image: '/images/package/package-image4.png', options: defaultOptions },
    {
        id: 2, name: 'Aromatheraphy Massage', defaultPrice: '$50', desc: 'A calming treatment that uses essential oils and gentle strokes to ease tension and support circulation.', image: '/images/package/package-image2.png', options: [
            { time: '1 Hour', price: '169K' },
            { time: '1.5 Hours', price: '239K' },
            { time: '2 Hours', price: '339K' }
        ]
    },
    {
        id: 3, name: 'Bali Moon Tea Tree Facial', defaultPrice: '$50', desc: 'A purifying facial treatment for oily or blemish-prone skin using clay, tea tree care, and nourishing oils to restore balance.', image: '/images/package/package-image3.png',
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
    {
        id: 5, name: 'Balinese Massage', defaultPrice: '$50', desc: 'Traditional Balinese technique for deep tissue relaxation.', image: '/images/package/package-image5.png', options: [
            { time: '60 mins', price: '$85' },
            { time: '90 mins', price: '$115' }
        ]
    },
    {
        id: 6, name: 'Body Scrub', defaultPrice: '$50', desc: 'Exfoliating treatment for smooth and radiant skin.', image: '/images/package/package-image6.png', options: [
            { time: '45 mins', price: '$60' }
        ]
    },
    {
        id: 7, name: 'Foot Reflexology', defaultPrice: '$50', desc: 'Pressure point massage on feet to improve circulation.', image: '/images/package/package-image7.png', options: [
            { time: '30 mins', price: '$35' },
            { time: '60 mins', price: '$60' }
        ]
    },
    { id: 8, name: 'Hot Stone Massage', defaultPrice: '$50', desc: 'Heated stones used to melt away tension and stress.', image: '/images/package/package-image8.png', options: defaultOptions },
];

const servicesTab2 = [
    {
        id: 11, name: 'Deep Tissue', defaultPrice: '$50', desc: 'Intense pressure to release chronic muscle tension.', image: '/images/package/package-image1.png', options: [
            { time: '60 mins', price: '$95' },
            { time: '90 mins', price: '$130' }
        ]
    },
    {
        id: 18, name: 'Ear Candle', defaultPrice: '$60', desc: 'Traditional ear clearing and relaxation.', image: '/images/package/package-image8.png', options: [
            { time: '30 mins', price: '$30' }
        ]
    },
    {
        id: 13, name: 'Facial Treatment', defaultPrice: '$70', desc: 'Skin cleansing and hydration for a youthful glow.', image: '/images/package/package-image3.png', options: [
            { time: '60 mins', price: '$75' }
        ]
    },
    {
        id: 14, name: 'Head & Shoulder', defaultPrice: '$80', desc: 'Relief for tension in the upper body.', image: '/images/package/package-image4.png', options: [
            { time: '30 mins', price: '$40' },
            { time: '45 mins', price: '$55' }
        ]
    },
    {
        id: 15, name: 'Manicure & Pedicure', defaultPrice: '$90', desc: 'Complete nail care and hand/foot massage.', image: '/images/package/package-image5.png', options: [
            { time: '90 mins', price: '$90' }
        ]
    },
    {
        id: 16, name: 'Pregnancy Massage', defaultPrice: '$50', desc: 'Gentle care for expectant mothers.', image: '/images/package/package-image6.png', options: [
            { time: '60 mins', price: '$85' }
        ]
    },
    { id: 17, name: 'Sports Massage', defaultPrice: '$30', desc: 'Focused treatment for athletes.', image: '/images/package/package-image7.png', options: defaultOptions },
    { id: 12, name: 'Thai Massage', defaultPrice: '$60', desc: 'Ancient yoga-like stretching for flexibility.', image: '/images/package/package-image2.png', options: defaultOptions },
];

const PackageItem = ({ item, isLast, outcallPricing, spreadDropdownArrow }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasDetails = Boolean(item.benefits?.length || item.options?.length || item.children?.length);
    const useSpreadToggle = outcallPricing || spreadDropdownArrow;

    return (
        <div className={`inner-box ${!isLast ? 'mb-50' : ''}`}>
            <div className="image">
                <img src={item.image} alt={item.name} />
            </div>
            <div className="content">
                <h3 className="title">
                    {hasDetails ? (
                        useSpreadToggle ? (
                            <button
                                type="button"
                                className="package-row-toggle"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-expanded={isOpen}
                            >
                                <span>{item.name}</span>
                                <span className="package-row-toggle__icon" aria-hidden="true">
                                    <i className="fa-solid fa-angle-down"></i>
                                </span>
                            </button>
                        ) : (
                            <a href="#" onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen); }} style={{ cursor: 'pointer' }}>
                                {item.name} {isOpen ? <i className="fa-solid fa-angle-up ms-1" style={{ fontSize: '14px' }}></i> : <i className="fa-solid fa-angle-down ms-1" style={{ fontSize: '14px' }}></i>}
                            </a>
                        )
                    ) : item.name}
                </h3>
                {item.desc && <p className="text" style={{ marginTop: '2px', marginBottom: '0', fontSize: '14px', color: '#5f5a54' }}>{item.desc}</p>}
                {hasDetails && <div
                    className="pricing-dropdown"
                    style={{
                        padding: isOpen ? '5px 0 10px' : '0',
                        maxHeight: isOpen ? '4000px' : '0',
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
                        {(item.options || []).map((opt, idx) => (
                            <li key={idx} className="d-flex justify-content-between align-items-center pb-2 mb-2" style={{ borderBottom: '1px solid #e1e1e1' }}>
                                <span style={{ fontFamily: 'var(--subtitle-font)', fontSize: '18px', color: '#6A6F73' }}>{opt.time}</span>
                                <span
                                    className={outcallPricing ? 'outcall-package-price' : 'package-item-price'}
                                    style={outcallPricing ? undefined : { fontFamily: 'var(--title-font)', fontSize: '24px', fontWeight: '500', color: 'var(--title-color)' }}
                                >
                                    {opt.price}
                                </span>
                            </li>
                        ))}
                    </ul>
                    {(item.children || []).map((child) => (
                        <section
                            className="package-child-service"
                            key={child.name}
                            style={{
                                marginTop: '20px',
                                padding: '18px 0 0 18px',
                                borderTop: '1px solid #e1e1e1',
                                borderLeft: '2px solid var(--theme-color1)'
                            }}
                        >
                            <h4 style={{ marginBottom: child.desc ? '7px' : '12px', fontSize: '18px', lineHeight: '1.35' }}>
                                {child.name}
                            </h4>
                            {child.desc && (
                                <p style={{ marginBottom: '12px', color: '#5f5a54', fontSize: '13px', lineHeight: '1.55' }}>
                                    {child.desc}
                                </p>
                            )}
                            <ul className="list-unstyled mb-0" style={{ paddingLeft: '0' }}>
                                {(child.options || []).map((opt, idx) => (
                                    <li
                                        key={`${child.name}-${idx}`}
                                        className="d-flex justify-content-between align-items-center pb-2 mb-2"
                                        style={{ gap: '18px', borderBottom: '1px solid #e1e1e1' }}
                                    >
                                        <span style={{ fontFamily: 'var(--subtitle-font)', fontSize: '16px', color: '#6A6F73' }}>
                                            {opt.time}
                                        </span>
                                        <span
                                            className={outcallPricing ? 'outcall-package-price' : 'package-item-price'}
                                            style={outcallPricing ? undefined : { flexShrink: 0, fontFamily: 'var(--title-font)', fontSize: '20px', fontWeight: '500', color: 'var(--title-color)' }}
                                        >
                                            {opt.price}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>}
            </div>
        </div>
    );
};

export default function PackageSection({
    subTitle = "Best Price",
    title = "Our Flexible Pricing Plan",
    firstServices = servicesTab1,
    secondServices = servicesTab2,
    firstTabLabel = "Home Service Fee",
    secondTabLabel = "Extra 75K/Therapist",
    tabs,
    outcallPricing = false,
    spreadDropdownArrow = false,
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const useSpreadToggle = outcallPricing || spreadDropdownArrow;
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    const pricingTabs = tabs || [
      { label: firstTabLabel, services: firstServices },
      { label: secondTabLabel, services: secondServices },
    ];

    return (
      <section className={`package-section section__decoration-top section__decoration-bottom bg-sub pt-170 pb-170${outcallPricing ? ' outcall-package-pricing' : ''}${useSpreadToggle ? ' package-spread-toggles' : ''}`}>
        <div
          className="shape1 wow slideInLeft"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <img
            className="sway_Y__animationY"
            src="/images/shape/banner-five-shape1.png"
            alt="image"
          />
        </div>
        <div className="shape2">
          <img
            className="sway__animation"
            src="/images/shape/package-shape-right.png"
            alt="image"
          />
        </div>
        <div className="container">
          <div className="section-header mb-60 center">
            <h4
              className="sub-title wow fadeInUp"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              {subTitle}
            </h4>
            <h2
              className="title wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              {title}
            </h2>
          </div>
          <div className="package-tab mb-60">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              {pricingTabs.map((tab, index) => (
                <li className="nav-item" role="presentation" key={tab.label}>
                  <button
                    className={activeIndex === index ? "nav-link active" : "nav-link"}
                    onClick={() => handleOnClick(index)}
                    id={`package-item-${index}-tab`}
                    type="button"
                    role="tab"
                    aria-controls={`package-item-${index}`}
                    aria-selected={activeIndex === index}
                  >
                    <div className="icon-box"></div>
                    <h6 className="title">
                      {tab.label}
                      {tabs && (
                        <span className="icon_box" aria-hidden="true">
                          <i className="fa-regular icon_first fa-arrow-right-long"></i>
                          <i className="fa-regular icon_second fa-arrow-right-long"></i>
                        </span>
                      )}
                    </h6>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="tab-content" id="myTabContent">
            {pricingTabs.map((tab, index) => {
              const halfLength = Math.ceil(tab.services.length / 2);
              const columns = [
                tab.services.slice(0, halfLength),
                tab.services.slice(halfLength),
              ];

              return (
                <div
                  className={activeIndex === index ? "tab-pane fade show active" : "tab-pane fade"}
                  id={`package-item-${index}`}
                  role="tabpanel"
                  aria-labelledby={`package-item-${index}-tab`}
                  key={tab.label}
                >
                  <div className="row g-5">
                    {columns.map((services, columnIndex) => (
                      <div className="col-lg-6 package-block" key={columnIndex}>
                        {services.map((item, itemIndex) => (
                          <PackageItem
                            key={item.id}
                            item={item}
                            isLast={itemIndex === services.length - 1}
                            outcallPricing={outcallPricing}
                            spreadDropdownArrow={spreadDropdownArrow}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {useSpreadToggle && (
          <style jsx global>{`
            .package-spread-toggles .package-block .inner-box .content .title .package-row-toggle {
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 16px;
              width: 100%;
              padding: 0;
              border: 0;
              background: transparent;
              color: var(--title-color);
              font-family: var(--title-font);
              font-size: 22px;
              font-weight: 500;
              line-height: 1.25;
              text-align: left;
            }

            .package-spread-toggles .package-block .inner-box .content .title .package-row-toggle > span:first-child {
              min-width: 0;
              color: inherit;
              font-size: inherit;
              font-weight: inherit;
              white-space: normal;
            }

            .package-spread-toggles .package-block .inner-box .content .title .package-row-toggle__icon {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 34px;
              height: 34px;
              flex: 0 0 34px;
              border-radius: 50%;
              color: var(--title-color);
              font-size: 18px;
              transition: color 0.25s ease, background-color 0.25s ease;
            }

            .package-spread-toggles .package-block .inner-box .content .title .package-row-toggle__icon i {
              transition: transform 0.25s ease;
            }

            .package-spread-toggles .package-block .inner-box .content .title .package-row-toggle[aria-expanded="true"] .package-row-toggle__icon,
            .package-spread-toggles .package-block .inner-box .content .title .package-row-toggle:hover .package-row-toggle__icon,
            .package-spread-toggles .package-block .inner-box .content .title .package-row-toggle:focus-visible .package-row-toggle__icon {
              color: #fff;
              background: var(--theme-color1);
            }

            .package-spread-toggles .package-block .inner-box .content .title .package-row-toggle[aria-expanded="true"] .package-row-toggle__icon i {
              transform: rotate(180deg);
            }

            .package-spread-toggles .package-block .inner-box .content .title .package-row-toggle:focus-visible {
              outline: none;
            }

            .outcall-package-pricing .outcall-package-price {
              flex-shrink: 0;
              color: var(--theme-color1);
              font-family: var(--title-font);
              font-size: 19px;
              font-weight: 500;
              line-height: 1.25;
            }

            @media (max-width: 575px) {
              .package-spread-toggles .package-block .inner-box .content .title {
                width: 100%;
              }

              .package-spread-toggles .package-block .inner-box .content .title .package-row-toggle {
                font-size: 18px;
              }

              .package-spread-toggles .package-block .inner-box .content .title .package-row-toggle__icon {
                width: 30px;
                height: 30px;
                flex-basis: 30px;
                font-size: 16px;
              }

              .outcall-package-pricing .outcall-package-price {
                font-size: 17px;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .package-spread-toggles .package-block .inner-box .content .title .package-row-toggle__icon,
              .package-spread-toggles .package-block .inner-box .content .title .package-row-toggle__icon i {
                transition: none;
              }
            }
          `}</style>
        )}
      </section>
    );
}
