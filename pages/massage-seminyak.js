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
    { title: "Traditional", text: "Techniques" },
    { title: "Experienced", text: "Therapists" },
    { title: "Flexible", text: "Treatments" },
    { title: "Hotel & Villa", text: "Service" },
];

const faqItems = [
    {
        question: "Which massage is a good choice for a first visit to a Seminyak spa?",
        answer:
            "Balinese Massage is a popular starting point because it combines flowing massage movements, gentle stretching, and traditional techniques. Guests who prefer stronger pressure or have specific recovery needs may prefer Traditional Massage or Sport Massage.",
    },
    {
        question: "Can I book a massage after a long flight or a full day of exploring?",
        answer:
            "Yes. Massage is often chosen after travel, sightseeing, shopping, or other activities that leave the body feeling tired or tense. The treatment and pressure can be adjusted according to how your body feels on the day.",
    },
    {
        question: "What is the difference between Balinese Massage and Traditional Massage?",
        answer:
            "Balinese Massage combines flowing strokes, stretching, and acupressure for a balanced full-body experience. Traditional Massage generally uses firmer, more deliberate pressure and may be preferred by guests who enjoy a more intensive treatment.",
    },
    {
        question: "Do you offer massage at hotels and villas in Seminyak?",
        answer:
            "Yes. Selected massage and spa treatments are available through home service at hotels, villas, and private accommodations in Seminyak and nearby areas. An additional outcall fee applies per therapist.",
    },
    {
        question: "Is there an additional fee for home service?",
        answer:
            "Yes. An additional outcall fee of IDR 75,000 per therapist applies for home service appointments in Seminyak and nearby areas.",
    },
    {
        question: "How can I pay for my in-room treatment?",
        answer:
            "Payment options include cash, bank transfer, Visa, and Mastercard, subject to availability.",
    },
];

export default function MassageSeminyak() {
    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="two">
                <Banner
                    subTitle="A Better Way to Refresh"
                    titleSpan="Massage in"
                    title="Seminyak"
                    buttonText="Book Now"
                />
                <AboutOld
                    subTitle="Find Your Balance"
                    title={<>What Makes a Massage in Seminyak Part of a Bali Stay?</>}
                    text="After a day of beach time, exploring, shopping, or enjoying Seminyak, your body may need time to slow down and recover. A professional massage offers the chance to relax and reconnect with your body"
                    feature1Title="Release Everyday Tension"
                    feature1Text="Carefully applied massage techniques help ease tightness that can build up through travel."
                    feature2Title="Make Time to Recover"
                    feature2Text="A calm treatment environment allows the body to rest, while the massage is adjusted to your preferred pressure."
                />
                <Funfact items={serviceHighlights} />
                <Testimonial />
                <About
                    subTitle="Match Your Mood"
                    title={<>Which Massage Is Right for Your Time in Seminyak?</>}
                    text="Different massage styles suit different moments during a Bali holiday. Choose from traditional, targeted, stretching-based, active recovery, and gentle lymphatic treatments depending on what your body needs."
                    featuresLeft={[
                        "Balinese Massage for traditional full-body relaxation",
                        "Traditional Massage for firmer pressure",
                        "Thai Massage for stretching and mobility",
                        "Sport Massage after exercise or surfing",
                    ]}
                    featuresRight={[
                        "Lymphatic Massage for gentle body care",
                        "Aromatherapy Massage for calming relaxation",
                        "Head Massage for head and shoulder tension",
                        "Foot Reflexology for pressure-point care",
                    ]}
                    buttonText="Book Now"
                    buttonLink={bookingUrl}
                />
                <AboutReverse
                    subTitle="Complete Experience"
                    title={<>A Spa Visit Can Be More Than a Massage</>}
                    text="Massage is only one part of the care available at Spa Bali Moon. Guests can add other beauty treatments to create a longer session around their needs. For couples and groups, selected treatments can also be arranged together, making it easier to enjoy a shared spa experience during your time in Seminyak."
                    featuresLeft={[
                        "Bali Moon Facial with Tea Tree and Gold Mask options",
                        "Body Scrub for smoother, refreshed skin",
                        "Cream Bath for hair and scalp care",
                        "Manicure and Pedicure for hands and feet",
                    ]}
                    featuresRight={[
                        "Couple Massage for shared relaxation",
                        "Selected spa packages for combined treatments",
                        "Home service available for selected treatments",
                    ]}
                    buttonText="Book Now"
                    buttonLink={bookingUrl}
                />
                <About
                    title={<>Why Seminyak Visitors Book With Us</>}
                    text="We're a local Seminyak team specialising in Balinese Body Massage, with a reputation for punctual, professional and genuinely relaxing service in your own space."
                    featuresLeft={[
                        "Based in Seminyak",
                        "Certified therapists",
                        "Hygienic equipment",
                    ]}
                    featuresRight={[
                        "English-speaking staff",
                        "Cash & card accepted",
                        "Easy WhatsApp booking",
                    ]}
                />
                <Faq
                    imageTitle="Seminyak Day Spa"
                    subTitle="Frequently Asked Questions"
                    title={<>Everything You Need to Know</>}
                    items={faqItems}
                />
                <ReserveCta
                    title="Make Space for Yourself in Seminyak"
                    text="Between beach mornings, busy afternoons, and evenings spent discovering the best of Bali, a massage can create a quiet pause in the middle of your stay. Spa Bali Moon offers traditional Balinese therapies, targeted massage treatments, beauty care, and relaxing spa experiences for guests who want to rest, recover, or simply enjoy some uninterrupted time for themselves."
                    closingText="Visit our spa in Seminyak or arrange selected treatments at your hotel, villa, or private accommodation through our home service."
                />
                <Services
                    subTitle="Our Treatments"
                    title={<>Massage Services in <br /> Seminyak</>}
                />
            </Layout>
        </>
    );
}
