import { useState, useEffect, useRef } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

export default function ContactForm() {

    const [formData, setFormData] = useState({
        form_name: "",
        form_email: "",
        form_subject: "",
        form_phone: "",
        form_message: "",
        form_botcheck: "",
        turnstile_token: ""
    });

    const turnstileRef = useRef(null);
    const [submitting, setSubmitting] = useState(false);
    const [toast, setToast] = useState({ show: false, message: '', type: '' });

    useEffect(() => {
        if (toast.show) {
            const timer = setTimeout(() => {
                setToast(prev => ({ ...prev, show: false }));
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [toast.show]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setToast({ show: false, message: '', type: '' });

        try {
            if (!formData.turnstile_token) {
                setToast({ show: true, message: 'Please complete the captcha verification.', type: 'error' });
                setSubmitting(false);
                return;
            }

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setToast({ show: true, message: data.message || 'Message sent successfully!', type: 'success' });
                // Reset form on success
                setFormData({
                    form_name: "",
                    form_email: "",
                    form_subject: "",
                    form_phone: "",
                    form_message: "",
                    form_botcheck: "",
                    turnstile_token: ""
                });
                if (turnstileRef.current) {
                    turnstileRef.current.reset();
                }
            } else {
                setToast({ show: true, message: data.message || 'Something went wrong. Please try again.', type: 'error' });
                if (turnstileRef.current) {
                    turnstileRef.current.reset();
                }
                setFormData(prev => ({ ...prev, turnstile_token: "" }));
            }
        } catch (error) {
            setToast({ show: true, message: 'Network error. Please check your connection and try again.', type: 'error' });
        } finally {
            setSubmitting(false);
        }
    };

    const handleReset = () => {
        setFormData({
        form_name: "",
        form_email: "",
        form_subject: "",
        form_phone: "",
        form_botcheck: "",
        turnstile_token: ""
        });
        if (turnstileRef.current) {
            turnstileRef.current.reset();
        }
        setToast({ show: false, message: '', type: '' });
    };


    return (
        <>
            <section className="contact-details pt-100 pb-100">
                <div className="container ">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6">
                            <div className="sec-title mb-50">
                                <span className="sub-title">Send us email</span>
                                <h2>Feel free to write</h2>
                            </div>
                            <form id="contact_form" name="contact_form" onSubmit={handleSubmit} onReset={handleReset}>
                                <div className="row">
                                    <div className="col-sm-6">
                                    <div className="mb-3">
                                        <input
                                        name="form_name"
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter Name"
                                        value={formData.form_name}
                                        onChange={handleChange}
                                        required
                                        />
                                    </div>
                                    </div>
                                    <div className="col-sm-6">
                                    <div className="mb-3">
                                        <input
                                        name="form_email"
                                        className="form-control"
                                        type="email"
                                        placeholder="Enter Email"
                                        value={formData.form_email}
                                        onChange={handleChange}
                                        required
                                        />
                                    </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                    <div className="mb-3">
                                        <input
                                        name="form_subject"
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter Subject"
                                        value={formData.form_subject}
                                        onChange={handleChange}
                                        required
                                        />
                                    </div>
                                    </div>
                                    <div className="col-sm-6">
                                    <div className="mb-3">
                                        <input
                                        name="form_phone"
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter Phone"
                                        value={formData.form_phone}
                                        onChange={handleChange}
                                        />
                                    </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <textarea
                                    name="form_message"
                                    className="form-control"
                                    rows="7"
                                    placeholder="Enter Message"
                                    value={formData.form_message}
                                    onChange={handleChange}
                                    required
                                    />
                                </div>

                                <div className="mb-3">
                                    <Turnstile
                                        ref={turnstileRef}
                                        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'}
                                        onSuccess={(token) => setFormData(prev => ({ ...prev, turnstile_token: token }))}
                                        onError={() => setFormData(prev => ({ ...prev, turnstile_token: "" }))}
                                        onExpire={() => setFormData(prev => ({ ...prev, turnstile_token: "" }))}
                                        options={{
                                            theme: 'light',
                                        }}
                                    />
                                </div>

                                <div className="mb-5">
                                    <input
                                    name="form_botcheck"
                                    className="form-control"
                                    type="hidden"
                                    value={formData.form_botcheck}
                                    onChange={handleChange}
                                    />
                                    <button
                                    type="submit"
                                    className="btn-one me-2 mb-3 mb-sm-0"
                                    disabled={submitting}
                                    >
                                    <span className="btn-title">{submitting ? "Please wait..." : "Send message"}</span>
                                    </button>
                                    <button type="reset" className="btn-two bg-theme-color5">
                                    <span className="btn-title">Reset</span>
                                    </button>
                                </div>

                                </form>
                        </div>

                        <div className="col-xl-5 col-lg-6">
                            <div className="contact-details__right">
                                <div className="sec-title">
                                    <span className="sub-title">Need any help?</span>
                                    <h2>Get in touch</h2>
                                    <div className="text">Spa Bali Moon offers high-quality traditional massages and spa therapies. Reach out to us to book your relaxing session.</div>
                                </div>
                                <ul className="list-unstyled contact-details__info">
                                    <li className="d-block d-sm-flex align-items-sm-center ">
                                    <div className="icon">
                                        <span className="fa-classic fa-light fa-phone-plus fa-fw"></span>
                                    </div>
                                    <div className="text ml-xs--0 mt-xs-10">
                                        <h6>Have any question?</h6>
                                        <a href="tel:+6287863175144"><span>Call/WA</span> +62 878-6317-5144</a>
                                    </div>
                                    </li>
                                    <li className="d-block d-sm-flex align-items-sm-center ">
                                    <div className="icon">
                                        <span className="fa-classic fa-light fa-envelope fa-fw"></span>
                                    </div>
                                    <div className="text ml-xs--0 mt-xs-10">
                                        <h6>Write email</h6>
                                        <a href="mailto:info@spabalimoon.com">info@spabalimoon.com</a>
                                    </div>
                                    </li>
                                    <li className="d-block d-sm-flex align-items-sm-center ">
                                    <div className="icon">
                                        <span className="fa-classic fa-light fa-location-dot fa-fw"></span>
                                    </div>
                                    <div className="text ml-xs--0 mt-xs-10">
                                        <h6>Visit anytime</h6>
                                        <span>Jl. Panggung Sari No. 30, Seminyak, Bali</span>
                                    </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="map-section">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.3276299088775!2d115.15814147462666!3d-8.678060388355467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2471415de2293%3A0xe1802d70253e801f!2sSpa%20Bali%20Moon!5e1!3m2!1sen!2sid!4v1778467217568!5m2!1sen!2sid"
                    className="map w-100"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

            {/* Toast Notification */}
            {toast.show && (
                <div
                    style={{
                        position: 'fixed',
                        top: '30px',
                        right: '30px',
                        zIndex: 9999,
                        minWidth: '340px',
                        maxWidth: '420px',
                        backgroundColor: '#ffffff',
                        borderRadius: '12px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)',
                        overflow: 'hidden',
                        animation: 'toastSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        borderLeft: `4px solid ${toast.type === 'success' ? '#b8952e' : '#dc3545'}`,
                    }}
                >
                    <div style={{ padding: '18px 20px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                        <div
                            style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                backgroundColor: toast.type === 'success' ? '#f8f4ee' : '#fdf0f0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                            }}
                        >
                            <i
                                className={`fa-solid ${toast.type === 'success' ? 'fa-check' : 'fa-exclamation'}`}
                                style={{
                                    color: toast.type === 'success' ? '#b8952e' : '#dc3545',
                                    fontSize: '14px',
                                }}
                            ></i>
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <p
                                style={{
                                    margin: '0 0 2px',
                                    fontWeight: 600,
                                    fontSize: '14px',
                                    color: '#3d3428',
                                }}
                            >
                                {toast.type === 'success' ? 'Message Sent' : 'Sending Failed'}
                            </p>
                            <p
                                style={{
                                    margin: 0,
                                    fontSize: '13px',
                                    color: '#8b7d6b',
                                    lineHeight: 1.5,
                                }}
                            >
                                {toast.message}
                            </p>
                        </div>
                        <button
                            onClick={() => setToast(prev => ({ ...prev, show: false }))}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '4px',
                                color: '#a89a88',
                                fontSize: '16px',
                                lineHeight: 1,
                                flexShrink: 0,
                            }}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    {/* Progress bar */}
                    <div
                        style={{
                            height: '3px',
                            backgroundColor: toast.type === 'success' ? '#b8952e' : '#dc3545',
                            animation: 'toastProgress 5s linear forwards',
                        }}
                    ></div>
                </div>
            )}

            <style jsx>{`
                @keyframes toastSlideIn {
                    from {
                        transform: translateX(100%) translateY(-10px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0) translateY(0);
                        opacity: 1;
                    }
                }
                @keyframes toastProgress {
                    from {
                        width: 100%;
                    }
                    to {
                        width: 0%;
                    }
                }
            `}</style>
        </>
    )
}
