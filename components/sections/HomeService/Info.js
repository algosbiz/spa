import React from 'react';

const lotusIcon = (
    <img className="brand-lotus-icon" src="/images/logo/sbm.webp" alt="" aria-hidden="true" />
);

export default function HomeServiceInfo({ plain = false }) {
    const listItems = [
        {
            title: "Professional & Experienced Therapists",
            desc: "Our trained therapists provide Balinese massage and selected spa treatments with attentive techniques suited to each guest."
        },
        {
            title: "Clean & Hygienic Practice",
            desc: "Every appointment is prepared with clean linens, sanitised equipment, and quality massage oils for a safe and comfortable experience."
        },
        {
            title: "Full Spa Setup Provided to You",
            desc: "Therapists bring the massage setup, towels, oils, and treatment essentials, so you do not need to prepare equipment before the session."
        },
        {
            title: "On-Time & Reliable Service",
            desc: "Your appointment time and location are confirmed in advance so the therapist can arrive prepared and begin as scheduled."
        },
        {
            title: "Flexible Scheduling",
            desc: "Home service is available daily from 9:00 AM to 11:00 PM, making it easier to arrange a treatment around your Bali plans."
        },
        {
            title: "Simple Booking via WhatsApp",
            desc: "Send your preferred treatment, time, number of guests, and location through WhatsApp, and our team will confirm the booking details."
        }
    ];

    return (
        <section className="home-service-info-area pt-100 pb-100" style={{ backgroundColor: plain ? 'transparent' : '#fcfaf6', position: 'relative', overflow: 'hidden', zIndex: 1 }}>
            {/* Elegant Floating Background Leaf Shapes (Unique to this section) */}
            <div className="shape1" style={{ position: 'absolute', left: 0, top: '15%', zIndex: -1 }}>
                <img src="/images/shape/about-left-shape.png" alt="shape" />
            </div>
            <div className="shape2" style={{ position: 'absolute', right: 0, bottom: '15%', zIndex: -1 }}>
                <img className="sway_Y__animation" src="/images/shape/about-right-shape.png" alt="shape" />
            </div>

            <div className="container">
                {/* Section Header */}
                <div className="section-header center mb-60">
                    <h4 className="sub-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                        {lotusIcon}
                        Treat yourself to a Balinese spa experience right where you are
                    </h4>
                    <h2 className="title" style={{ marginBottom: '20px' }}>
                        Home Service Massage
                    </h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-10" style={{ position: 'relative', zIndex: 2 }}>
                        <div style={{
                            backgroundColor: '#ffffff',
                            borderRadius: '16px',
                            padding: '50px 40px',
                            boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.04)',
                            border: '1px solid rgba(232, 227, 218, 0.6)'
                        }}>
                            {/* List using exact reservation markup and fonts */}
                            <div className="list mt-25">
                                <ul style={{ padding: 0, listStyle: 'none' }}>
                                    {listItems.map((item, idx) => (
                                        <li key={idx} style={{ display: 'flex', gap: '18px', marginBottom: '25px', alignItems: 'flex-start' }}>
                                            <span style={{ minWidth: '25px', paddingTop: '3px', display: 'inline-flex' }}>{lotusIcon}</span>
                                            <div>
                                                <h5 style={{ 
                                                    marginBottom: '6px', 
                                                    fontWeight: '500', 
                                                    color: '#1c1a1d', 
                                                    fontSize: '20px',
                                                    fontFamily: 'var(--title-font)'
                                                }}>
                                                    {item.title}
                                                </h5>
                                                <p className="text" style={{ 
                                                    margin: 0, 
                                                    fontSize: '15px', 
                                                    color: '#707070',
                                                    fontFamily: 'var(--text-font)',
                                                    lineHeight: '1.75'
                                                }}>
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Footer fee info */}
                            <div className="text-center mt-40" style={{
                                borderTop: '1px solid rgba(95, 90, 84, 0.12)',
                                paddingTop: '25px'
                            }}>
                                <h5 style={{
                                    fontSize: '20px',
                                    fontWeight: '500',
                                    color: '#1c1a1d',
                                    fontFamily: 'var(--title-font)',
                                    margin: 0
                                }}>
                                    Home service fee: <span style={{ color: '#A78627', fontWeight: '600' }}>IDR 75,000</span> per therapist
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
