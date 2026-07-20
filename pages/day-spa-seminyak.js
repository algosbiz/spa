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

const bookingUrl = "https://wa.me/6287863175144";

const serviceHighlights = [
    { title: "Balinese", text: "Techniques" },
    { title: "Experienced", text: "Therapists" },
    { title: "Flexible", text: "Treatments" },
    { title: "In-Spa &", text: "Home Service" },
];

const faqItems = [
    {
        question: "What does a day spa in Seminyak usually include?",
        answer:
            "A day spa visit may include one or more services such as massage, facial care, body scrubs, Cream Bath, reflexology, manicure, or pedicure. The exact services depend on the treatments you select and how much time you want to spend at the spa.",
    },
    {
        question: "How many hours should I spend at a day spa?",
        answer:
            "There is no fixed duration. A single treatment may take around 60 to 90 minutes, while several services can be arranged into a longer visit lasting a few hours.",
    },
    {
        question: "Can I choose my own treatments?",
        answer:
            "Yes. You can select individual services or choose from available spa packages. If you are unsure which treatments work well together, our team can help you plan a visit around your schedule and preferences.",
    },
    {
        question: "What is a good spa treatment after a flight?",
        answer:
            "A relaxing full-body massage is often a good place to begin after travelling. Depending on how you feel, you can follow it with a facial, body scrub, Cream Bath, or foot treatment for a more extensive visit.",
    },
    {
        question: "Can I book a day spa at my hotel or villa?",
        answer:
            "Selected treatments can be arranged as home service in Seminyak and nearby areas. Our therapists bring the equipment required for the services included in your booking.",
    },
    {
        question: "Do I need to reserve a day spa appointment in advance?",
        answer:
            "Advance reservations are recommended, especially during weekends, holidays, and busy periods in Seminyak. This helps us arrange your preferred treatments and appointment time.",
    },
    {
        question: "How can I arrange a home service booking?",
        answer:
            "Send us a message on WhatsApp with your preferred treatments, location, date, and time. Our team will confirm availability and provide the details needed for your appointment.",
    },
];

export default function DaySpaSeminyak() {
    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="two">
                <Banner
                    subTitle="Take the Day Slowly"
                    titleSpan="Day Spa in"
                    title="Seminyak"
                    buttonText="Book Now"
                />
                <AboutOld
                    subTitle="A Little More Time"
                    title={<>What Makes a Day Spa Visit Different?</>}
                    text="A day spa visit gives you time to enjoy more than one form of care without having to rush from one appointment to the next. At Spa Bali Moon, a visit can include a traditional Balinese massage, facial, body scrub, Cream Bath, reflexology, or beauty service depending on what you are looking for."
                    feature1Title="Care from Head to Toe"
                    feature1Text="Choose from massage, skin care, body treatments, hair care, and beauty services during one visit."
                    feature2Title="Made Around Your Time"
                    feature2Text="Build a shorter visit around one or two treatments or stay longer with a selection of services that suit your day."
                />
                <Funfact items={serviceHighlights} />
                <About
                    subTitle="Shape the Visit"
                    title={<>How Can You Spend Your Day at the Spa?</>}
                    text="There is no single way to enjoy a day spa in Seminyak. A guest recovering from a long flight may begin with a gentle massage, while someone preparing for a special occasion may prefer to focus on skin and beauty care."
                    featuresLeft={[
                        "Balinese Massage for traditional full-body care",
                        "Aromatherapy Massage for gentle relaxation with essential oils",
                        "Sport and Deep Tissue Massage for tired or tight muscles",
                        "Body Scrub to refresh and smooth the skin",
                    ]}
                    featuresRight={[
                        "Facials to cleanse and care for the complexion",
                        "Cream Bath for the hair, scalp, and a soothing head massage",
                        "Foot Reflexology for focused pressure-point care",
                        "Manicure and Pedicure for polished hands and feet",
                    ]}
                    buttonText="Book Now"
                    buttonLink={bookingUrl}
                />
                <AboutReverse
                    subTitle="Make a Day of It"
                    title={<>Is a Longer Spa Visit Worth the Time?</>}
                    text="Giving yourself more than an hour allows different types of care to work together. A massage can help your body release physical tension, while a facial or body scrub brings attention to the skin."
                    featuresLeft={[
                        "More time to relax during your holiday",
                        "Multiple treatments in one visit",
                        "Massage, body care, facials, and beauty treatments",
                    ]}
                    featuresRight={[
                        "Suitable for solo guests, couples, and groups",
                        "Spa packages available",
                        "Selected home service treatments available",
                    ]}
                    buttonText="Book Now"
                    buttonLink={bookingUrl}
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
                    subTitle="Frequently Asked Questions"
                    title={<>Everything You Need to Know</>}
                    items={faqItems}
                />
                <ReserveCta
                    title="Leave Room in Your Bali Holiday for Yourself"
                    text="Seminyak offers plenty to fill a day, from beaches and boutiques to restaurants and late evenings. A visit to Spa Bali Moon gives you a reason to slow the pace and spend a little longer being looked after. Choose a massage, add the body or beauty care that appeals to you, and enjoy a few hours that leave you feeling rested, refreshed, and ready for whatever comes next."
                    closingText="Visit Spa Bali Moon in Seminyak or arrange selected services at your hotel, villa, or private accommodation through our home service."
                />
            </Layout>
        </>
    );
}
