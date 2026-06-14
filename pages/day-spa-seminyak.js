import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home2/Banner";
import AboutOld from "../components/sections/Home2/About";
import Faq from "../components/sections/Home6/Faq";
import Funfact from "../components/sections/Home2/Funfact";
import Testimonial from "../components/sections/Home2/Testimonial";
import Services from "../components/sections/Home2/Services";
import AboutReverse from "../components/sections/Home1/AboutReverse";
import About from "../components/sections/Home1/About";
import ReserveCta from "../components/sections/Home1/ReserveCta";

const faqItems = [
    {
        question: "What is included in a day spa experience in Seminyak?",
        answer:
            "A day spa experience can combine several treatments — Balinese massage, a cream bath, a facial and body care — so you can relax, refresh your skin and unwind in a single visit. We help you choose the combination that best suits your needs.",
    },
    {
        question: "How long should I spend at a day spa?",
        answer:
            "Most guests spend anywhere from one to a few hours with us, depending on the treatments chosen. There's no rush — we plan your session around the time you have available.",
    },
    {
        question: "Can I customize my treatments?",
        answer:
            "Yes. Every treatment can be tailored to your body's condition and preferences, from the pressure of your massage to the products used in your facial or cream bath.",
    },
    {
        question: "Is it possible to book a day spa at my villa or hotel?",
        answer:
            "Absolutely. We offer a home service so you can enjoy our day spa treatments in your villa or hotel in Seminyak and nearby areas, for a small additional travel fee of 75k per therapist.",
    },
    {
        question: "Do I need to book in advance?",
        answer:
            "Booking ahead is recommended to secure your preferred time and therapist, but we always do our best to accommodate same-day requests when we have availability.",
    },
];

export default function DaySpaSeminyak() {
    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="two">
                <Banner
                    subTitle="A Day for the Best Spa Treatments in Seminyak"
                    titleSpan="Day Spa"
                    title="Seminyak"
                />
                <AboutOld
                    subTitle="Day Spa Seminyak"
                    title={<>Our Day Spa in <br /> Seminyak</>}
                    text="Our Day Spa Seminyak offers a complete wellness experience that relaxes the body, refreshes the skin, and calms the mind. A selection of our authentic Balinese therapies, cream baths, facials, and full body massages allows each guest to enjoy the treatments that best suit their needs. With skilled therapists, a peaceful Seminyak setting, and home service options, every visit leaves you feeling renewed and deeply relaxed."
                    feature1Title="Cream Baths & Facials"
                    feature1Text="Nourishing cream baths and facials with volcanic clay and collagen to cleanse, hydrate and refresh your skin."
                    feature2Title="Full Body Massage"
                    feature2Text="Authentic Balinese massage that eases muscle tension, improves circulation and helps you fully relax."
                />
                <Funfact />
                <About
                    title={<>Authentic Balinese Spa Treatments</>}
                    text="We bring you closer to the essence of Bali through authentic treatments inspired by local traditions. Using natural oils, gentle pressure, and flowing techniques, each session is designed to relax the body and calm the mind. Our treatments can be tailored to your needs, whether you are looking to release tension, refresh your skin, or simply take a quiet break from your day."
                    featuresLeft={[
                        "Natural oils & gentle pressure",
                        "Inspired by local traditions",
                        "Tailored to your needs",
                    ]}
                    featuresRight={[
                        "Releases tension",
                        "Refreshes the skin",
                        "Calms the mind",
                    ]}
                    buttonText="View Prices"
                />
                <AboutReverse
                    title={<>Cream Baths, Facials &amp; Body Care</>}
                    text="Our day spa experience includes treatments that care for your hair and skin as much as your body. Cream bath sessions use nourishing ingredients like avocado and essential oils to restore shine and softness. Our facials, including volcanic clay and collagen treatments, are designed to cleanse, hydrate, and leave your skin feeling refreshed. Each session is a combination of care and relaxation that supports your overall wellness."
                    featuresLeft={[
                        "Avocado cream baths",
                        "Essential oil hair care",
                        "Restores shine & softness",
                    ]}
                    featuresRight={[
                        "Volcanic clay facials",
                        "Collagen treatments",
                        "Cleanses & hydrates skin",
                    ]}
                />
                <About
                    title={<>Skilled Therapists in a Comfortable Seminyak Space</>}
                    text="Our therapists are trained to deliver treatments with attention and care, adjusting each session to your body's condition. Located in the heart of Seminyak, Spa Bali Moon offers a calm and welcoming environment with private rooms, including spaces for couples — plus home service options so you can enjoy our day spa in your villa or hotel."
                    featuresLeft={[
                        "Trained, attentive therapists",
                        "Traditional & modern techniques",
                        "Personalised sessions",
                    ]}
                    featuresRight={[
                        "Calm, private rooms",
                        "Couple-friendly spaces",
                        "Home service available",
                    ]}
                />
                <Testimonial />
                <Services
                    subTitle="Treatments"
                    title={<>Massage Treatments for <br /> Full Body Relaxation</>}
                />
                <Faq
                    imageTitle="Your Seminyak Day Spa"
                    subTitle="Good to know"
                    title={<>Frequently Asked Questions</>}
                    items={faqItems}
                />
                <ReserveCta
                    title="Make Space to Unwind at a Day Spa in Seminyak"
                    text="A visit to Spa Bali Moon is a simple way to reset after a full day in Seminyak. Our treatments are designed to ease physical strain and bring your body back to a more relaxed state. Available both in-spa and as a home service, each session helps you feel lighter and comfortable in your body."
                />
            </Layout>
        </>
    );
}
