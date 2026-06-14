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

export default function MassageKuta() {
    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="two">
                <Banner
                    subTitle="Massage in Kuta"
                    titleSpan="Soothe Your Body in"
                    title="Kuta"
                />
                <AboutOld
                    subTitle="Kuta Massage"
                    title={<>Relaxing Balinese Massage <br /> in Kuta</>}
                    text="Spa Bali Moon brings professional massage straight to your hotel or home in Kuta. After a day of surfing, shopping or exploring, let our therapists ease away the tension in the comfort of your own room."
                />
                <Funfact />
                <Testimonial />
                <About
                    title={<>Outcall Massage Across Kuta</>}
                    text="From the beach hotels to Legian and Tuban, our therapists travel throughout the Kuta area so you can enjoy a quality massage without going anywhere."
                    featuresLeft={[
                        "Covers all of Kuta",
                        "Hotel & home visits",
                        "Fast outcall service",
                    ]}
                    featuresRight={[
                        "Open daily 9am – 11pm",
                        "Affordable 75k travel fee",
                        "Experienced therapists",
                    ]}
                />
                <AboutReverse
                    title={<>Treatments to Recover &amp; Relax</>}
                    text="Perfect after surfing or a long flight — our Kuta clients choose from a full menu of restorative Balinese treatments, all delivered by certified therapists."
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
                    title={<>Booking a Massage in Kuta</>}
                    text="Just share your Kuta hotel or address and a preferred time. Our friendly team will confirm quickly and send a therapist ready to help you relax."
                    featuresLeft={[
                        "Same-day appointments",
                        "Flexible timing",
                        "Quick WhatsApp booking",
                    ]}
                    featuresRight={[
                        "Clear, honest pricing",
                        "Cash & card accepted",
                        "English-speaking team",
                    ]}
                />
                <Faq
                    imageTitle="Unwind In Kuta"
                    subTitle="Good to know"
                    title={<>Kuta Massage FAQs</>}
                />
                <Services
                    subTitle="Our Treatments"
                    title={<>Massage Services in <br /> Kuta</>}
                />
            </Layout>
        </>
    );
}
