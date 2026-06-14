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

export default function MassageSeminyak() {
    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="two">
                <Banner
                    subTitle="Massage in Seminyak"
                    titleSpan="Relax & Unwind in"
                    title="Seminyak"
                />
                <AboutOld
                    subTitle="Seminyak Massage"
                    title={<>Your Trusted Spa in <br /> the Heart of Seminyak</>}
                    text="Based right in Seminyak, Spa Bali Moon brings authentic Balinese massage to your hotel, villa or home across the area. Skip the traffic — let our therapists come to you for a relaxing treatment whenever you need it."
                />
                <Funfact />
                <Testimonial />
                <About
                    title={<>Massage Anywhere in Seminyak</>}
                    text="Staying near Jalan Kayu Aya, Petitenget or Oberoi? We cover the whole Seminyak area with fast outcall service, usually arriving within the hour so you can relax without leaving your accommodation."
                    featuresLeft={[
                        "Outcall across Seminyak",
                        "Arrives within ~60 minutes",
                        "Hotels, villas & homes",
                    ]}
                    featuresRight={[
                        "Open daily 9am – 11pm",
                        "Low 75k travel fee",
                        "Trusted local therapists",
                    ]}
                />
                <AboutReverse
                    title={<>Popular Treatments in Seminyak</>}
                    text="Our Seminyak clients love unwinding with traditional Balinese techniques after a day at the beach clubs and boutiques. Every treatment is performed by certified, experienced therapists."
                    featuresLeft={[
                        "Balinese Body Massage",
                        "Deep Tissue Massage",
                        "Aromatherapy Massage",
                    ]}
                    featuresRight={[
                        "Hot Stone Massage",
                        "Foot Reflexology",
                        "Couple Massage",
                    ]}
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
                    subTitle="Good to know"
                    title={<>Seminyak Massage FAQs</>}
                />
                <Services
                    subTitle="Our Treatments"
                    title={<>Massage Services in <br /> Seminyak</>}
                />
            </Layout>
        </>
    );
}
