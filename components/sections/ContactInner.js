import { useState } from 'react';

export default function ContactForm() {

    const [formData, setFormData] = useState({
        form_name: "",
        form_email: "",
        form_subject: "",
        form_phone: "",
        form_message: "",
        form_botcheck: ""
    });

    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        // Example placeholder: Replace with your actual API call or integration
        console.log("Form submitted:", formData);

        setTimeout(() => {
        alert("Message sent successfully!");
        setSubmitting(false);
        }, 1000);
    };

    const handleReset = () => {
        setFormData({
        form_name: "",
        form_email: "",
        form_subject: "",
        form_phone: "",
        form_message: "",
        form_botcheck: ""
        });
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
                                    <div className="text">Lorem ipsum is simply free text available dolor sit amet consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.</div>
                                </div>
                                <ul className="list-unstyled contact-details__info">
                                    <li className="d-block d-sm-flex align-items-sm-center ">
                                    <div className="icon">
                                        <span className="fa-classic fa-light fa-phone-plus fa-fw"></span>
                                    </div>
                                    <div className="text ml-xs--0 mt-xs-10">
                                        <h6>Have any question?</h6>
                                        <a href="tel:980089850"><span>Free</span> +92 (020)-9850</a>
                                    </div>
                                    </li>
                                    <li className="d-block d-sm-flex align-items-sm-center ">
                                    <div className="icon">
                                        <span className="fa-classic fa-light fa-envelope fa-fw"></span>
                                    </div>
                                    <div className="text ml-xs--0 mt-xs-10">
                                        <h6>Write email</h6>
                                        <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                                    </div>
                                    </li>
                                    <li className="d-block d-sm-flex align-items-sm-center ">
                                    <div className="icon">
                                        <span className="fa-classic fa-light fa-location-dot fa-fw"></span>
                                    </div>
                                    <div className="text ml-xs--0 mt-xs-10">
                                        <h6>Visit anytime</h6>
                                        <span>66 broklyn golden street. New York</span>
                                    </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="map-section">
                <iframe className="map w-100" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </section>

        </>
    )
}
