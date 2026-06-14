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

export default function MassageHotelVilla() {
    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="two">
                <Banner
                    subTitle="In-Room Spa Service"
                    titleSpan="Massage at Your"
                    title="Hotel & Villa"
                />
                <AboutOld
                    subTitle="Hotel & Villa Massage"
                    title={<>Spa Comfort Brought to <br /> Your Hotel &amp; Villa</>}
                    text="Enjoy a professional Balinese massage without leaving your room. Our skilled therapists come to your hotel or villa in Bali fully equipped with massage table, fresh towels and aromatic oils — so you can relax in complete privacy and comfort."
                />
                <Funfact />
                <Testimonial />
                <About
                    title={<>Why Guests Choose Our In-Villa Massage</>}
                    text="From beachfront villas to luxury hotel suites, we bring a calming spa atmosphere straight to your door. Every session is tailored to help you unwind after travel, sightseeing or a long day in the Bali sun."
                    featuresLeft={[
                        "Therapist comes to your room",
                        "Massage table & linens provided",
                        "Premium aromatherapy oils",
                    ]}
                    featuresRight={[
                        "Open daily 9am – 11pm",
                        "Couple & group bookings",
                        "Private & hygienic setup",
                    ]}
                />
                <AboutReverse
                    title={<>Treatments You Can Enjoy in Your Villa</>}
                    text="Choose from a full menu of traditional and therapeutic massages, all performed by certified therapists who specialise in authentic Balinese techniques."
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
                    title={<>Booking Your Hotel &amp; Villa Massage</>}
                    text="Reserving is simple — send us your hotel or villa address and preferred time, and our therapist will arrive ready to help you relax. A small travel fee of 75k per therapist applies for home and hotel visits."
                    featuresLeft={[
                        "Quick WhatsApp booking",
                        "Flexible appointment times",
                        "Same-day reservations",
                    ]}
                    featuresRight={[
                        "Transparent pricing",
                        "Cash & card accepted",
                        "English-speaking team",
                    ]}
                />
                <Faq
                    imageTitle="Relax In Your Room"
                    subTitle="Good to know"
                    title={<>Hotel &amp; Villa Massage FAQs</>}
                />
                <Services
                    subTitle="Our Treatments"
                    title={<>Massage Services for <br /> Your Stay</>}
                />
            </Layout>
        </>
    );
}
