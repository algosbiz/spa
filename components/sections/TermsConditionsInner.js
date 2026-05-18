import React from 'react';

export default function TermsConditionsInner() {
    return (
        <section className="terms-conditions-section pt-120 pb-120" style={{ backgroundColor: '#fcfaf6', position: 'relative', overflow: 'hidden', zIndex: 1 }}>
            {/* Elegant Floating Background Leaf Shapes */}
            <div className="shape1" style={{ position: 'absolute', left: 0, top: '10%', zIndex: -1 }}>
                <img src="images/shape/about-left-shape.png" alt="shape" />
            </div>
            <div className="shape2" style={{ position: 'absolute', right: 0, bottom: '15%', zIndex: -1 }}>
                <img className="sway_Y__animation" src="images/shape/about-right-shape.png" alt="shape" />
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10" style={{ position: 'relative', zIndex: 2 }}>
                        <div style={{
                            backgroundColor: '#ffffff',
                            borderRadius: '16px',
                            padding: '60px 50px',
                            boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.04)',
                            border: '1px solid rgba(232, 227, 218, 0.6)'
                        }}>
                            {/* Intro Paragraph */}
                            <p style={{
                                fontFamily: 'var(--text-font)',
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#5f5a54',
                                marginBottom: '40px',
                                borderLeft: '3px solid #A78627',
                                paddingLeft: '20px'
                            }}>
                                Welcome to Spa Bali Moon. By booking our services in the spa or choosing home service treatments, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
                            </p>

                            {/* Section 1 - Spa Etiquette */}
                            <div className="mb-40">
                                <h3 style={{ 
                                    fontFamily: 'var(--title-font)', 
                                    fontSize: '26px', 
                                    fontWeight: '500', 
                                    color: '#1c1a1d', 
                                    marginBottom: '18px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px'
                                }}>
                                    <i className="fa-solid fa-spa" style={{ color: '#A78627', fontSize: '28px', width: '32px', textAlign: 'center' }}></i>
                                    Spa Etiquette
                                </h3>
                                <p style={{ fontFamily: 'var(--text-font)', fontSize: '15px', color: '#5f5a54', lineHeight: '1.75' }}>
                                    Our spa warmly welcomes guests of all genders aged 18 and above. Visitors between 16–18 years may join with written parental consent, while children under 16 must be accompanied by a parent throughout the treatment.
                                </p>
                            </div>

                            {/* Section 2 - Bookings & Arrival */}
                            <div className="mb-40">
                                <h3 style={{ 
                                    fontFamily: 'var(--title-font)', 
                                    fontSize: '26px', 
                                    fontWeight: '500', 
                                    color: '#1c1a1d', 
                                    marginBottom: '18px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px'
                                }}>
                                    <i className="fa-solid fa-calendar-check" style={{ color: '#A78627', fontSize: '28px', width: '32px', textAlign: 'center' }}></i>
                                    Bookings & Arrival
                                </h3>
                                <p style={{ fontFamily: 'var(--text-font)', fontSize: '15px', color: '#5f5a54', lineHeight: '1.75' }}>
                                    We recommend arriving at least 12 minutes before your scheduled appointment. This allows time for a short consultation to understand your treatment goals. Please note that late arrivals may shorten your session to ensure punctuality for the next guest.
                                </p>
                            </div>

                            {/* Section 3 - Maintaining Serenity */}
                            <div className="mb-40">
                                <h3 style={{ 
                                    fontFamily: 'var(--title-font)', 
                                    fontSize: '26px', 
                                    fontWeight: '500', 
                                    color: '#1c1a1d', 
                                    marginBottom: '18px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px'
                                }}>
                                    <i className="fa-solid fa-hands-holding-heart" style={{ color: '#A78627', fontSize: '28px', width: '32px', textAlign: 'center' }}></i>
                                    Maintaining Serenity
                                </h3>
                                <p style={{ fontFamily: 'var(--text-font)', fontSize: '15px', color: '#707070', marginBottom: '15px' }}>
                                    Spa Bali Moon is designed as a sanctuary of calm. To preserve this tranquil environment, we kindly ask that you:
                                </p>
                                <ul style={{ paddingLeft: '25px', marginBottom: '18px' }}>
                                    <li style={{ 
                                        fontFamily: 'var(--text-font)', 
                                        fontSize: '15px', 
                                        color: '#5f5a54', 
                                        marginBottom: '10px', 
                                        lineHeight: '1.6',
                                        display: 'list-item',
                                        listStyleType: 'disc'
                                    }}>
                                        Switch off or silence mobile devices before entering.
                                    </li>
                                    <li style={{ 
                                        fontFamily: 'var(--text-font)', 
                                        fontSize: '15px', 
                                        color: '#5f5a54', 
                                        marginBottom: '10px', 
                                        lineHeight: '1.6',
                                        display: 'list-item',
                                        listStyleType: 'disc'
                                    }}>
                                        Keep voices low and respect the peaceful atmosphere.
                                    </li>
                                    <li style={{ 
                                        fontFamily: 'var(--text-font)', 
                                        fontSize: '15px', 
                                        color: '#5f5a54', 
                                        marginBottom: '10px', 
                                        lineHeight: '1.6',
                                        display: 'list-item',
                                        listStyleType: 'disc'
                                    }}>
                                        Secure personal belongings and jewelry safely, as the spa cannot accept responsibility for lost items.
                                    </li>
                                    <li style={{ 
                                        fontFamily: 'var(--text-font)', 
                                        fontSize: '15px', 
                                        color: '#5f5a54', 
                                        marginBottom: '10px', 
                                        lineHeight: '1.6',
                                        display: 'list-item',
                                        listStyleType: 'disc'
                                    }}>
                                        If you feel unsatisfied with your treatment, please notify reception within 10 minutes so we can resolve the matter promptly.
                                    </li>
                                </ul>
                            </div>

                            {/* Section 4 - Respect & Professional Conduct */}
                            <div className="mb-40">
                                <h3 style={{ 
                                    fontFamily: 'var(--title-font)', 
                                    fontSize: '26px', 
                                    fontWeight: '500', 
                                    color: '#1c1a1d', 
                                    marginBottom: '18px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px'
                                }}>
                                    <i className="fa-solid fa-user-shield" style={{ color: '#A78627', fontSize: '28px', width: '32px', textAlign: 'center' }}></i>
                                    Respect & Professional Conduct
                                </h3>
                                <p style={{ fontFamily: 'var(--text-font)', fontSize: '15px', color: '#5f5a54', lineHeight: '1.75' }}>
                                    We uphold a strict zero‑tolerance policy against inappropriate behavior, including harassment of therapists or staff. Should such conduct occur, the treatment will be stopped immediately and the guest asked to leave. Protecting the safety and dignity of our team is our highest priority.
                                </p>
                            </div>

                            {/* Section 5 - Cancellation & Rescheduling */}
                            <div className="mb-40">
                                <h3 style={{ 
                                    fontFamily: 'var(--title-font)', 
                                    fontSize: '26px', 
                                    fontWeight: '500', 
                                    color: '#1c1a1d', 
                                    marginBottom: '18px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px'
                                }}>
                                    <i className="fa-solid fa-calendar-xmark" style={{ color: '#A78627', fontSize: '28px', width: '32px', textAlign: 'center' }}></i>
                                    Cancellation & Rescheduling
                                </h3>
                                <p style={{ fontFamily: 'var(--text-font)', fontSize: '15px', color: '#5f5a54', lineHeight: '1.75' }}>
                                    Appointments may be canceled or rescheduled up to 12 hours in advance without penalty. Cancellations made within 12 hours will incur a 50% fee, while no‑shows are charged the full treatment cost or deposit amount.
                                </p>
                            </div>

                            {/* Section 6 - Home Service Transport */}
                            <div className="mb-40">
                                <h3 style={{ 
                                    fontFamily: 'var(--title-font)', 
                                    fontSize: '26px', 
                                    fontWeight: '500', 
                                    color: '#1c1a1d', 
                                    marginBottom: '18px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px'
                                }}>
                                    <i className="fa-solid fa-car-side" style={{ color: '#A78627', fontSize: '28px', width: '32px', textAlign: 'center' }}></i>
                                    Home Service Transport
                                </h3>
                                <p style={{ fontFamily: 'var(--text-font)', fontSize: '15px', color: '#5f5a54', lineHeight: '1.75' }}>
                                    For home service treatments, a transport fee of 75k applies to accommodations within Seminyak. Fees for locations outside Seminyak vary depending on distance and travel time, and can be confirmed via WhatsApp prior to booking.
                                </p>
                            </div>

                            {/* Section 7 - Liability */}
                            <div className="mb-40">
                                <h3 style={{ 
                                    fontFamily: 'var(--title-font)', 
                                    fontSize: '26px', 
                                    fontWeight: '500', 
                                    color: '#1c1a1d', 
                                    marginBottom: '18px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px'
                                }}>
                                    <i className="fa-solid fa-file-contract" style={{ color: '#A78627', fontSize: '28px', width: '32px', textAlign: 'center' }}></i>
                                    Liability
                                </h3>
                                <p style={{ fontFamily: 'var(--text-font)', fontSize: '15px', color: '#5f5a54', lineHeight: '1.75' }}>
                                    Spa Bali Moon is not responsible for any accidents, injuries, or health issues that may occur during or after treatments.
                                </p>
                            </div>

                            {/* Section 8 - Hours of Operation */}
                            <div className="mb-40" style={{
                                backgroundColor: '#fcfaf6',
                                borderRadius: '12px',
                                padding: '25px',
                                border: '1px solid rgba(232, 227, 218, 0.8)'
                            }}>
                                <h4 style={{ fontFamily: 'var(--title-font)', fontSize: '20px', fontWeight: '500', color: '#1c1a1d', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <i className="fa-solid fa-clock" style={{ color: '#A78627', marginRight: '10px', fontSize: '22px' }}></i>
                                    Hours of Operation
                                </h4>
                                <p style={{ fontFamily: 'var(--text-font)', fontSize: '15px', color: '#5f5a54', margin: 0 }}>
                                    We are open daily from <strong>9:00 AM to 11:00 PM</strong>, seven days a week.
                                </p>
                            </div>

                            {/* Back to Home / Contact Links */}
                            <div style={{
                                borderTop: '1px solid rgba(95, 90, 84, 0.12)',
                                paddingTop: '40px',
                                textAlign: 'center'
                            }}>
                                <p style={{ fontFamily: 'var(--text-font)', fontSize: '15px', color: '#707070', marginBottom: '20px' }}>
                                    Should you require any further clarification regarding these Terms & Conditions, please reach out to us:
                                </p>
                                <a href="https://wa.me/6287863175144" target="_blank" rel="noopener noreferrer" className="theme-btn btn-style-one" style={{ textDecoration: 'none' }}>
                                    <span className="btn-title">Contact via WhatsApp</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
