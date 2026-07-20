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
        question: "What type of massage is best after a long day in Kuta?",
        answer:
            "Balinese Massage is a popular choice for general relaxation because it combines flowing massage movements, gentle stretching, and acupressure. Guests who prefer firmer pressure may prefer Traditional Massage, while Sport Massage is suitable after more physically demanding activities.",
    },
    {
        question: "Can I get a massage after surfing or spending time at the beach?",
        answer:
            "Yes. Sport Massage is often chosen after surfing, exercise, or other physical activities because it focuses on areas affected by repetitive movement and muscle fatigue. A gentler treatment may be more suitable if the body feels particularly sensitive or exhausted.",
    },
    {
        question: "Do you offer massage at hotels and villas near Kuta?",
        answer:
            "Yes. Selected massage and spa treatments can be arranged as home service at hotels, villas, and private accommodations in nearby areas. Availability and travel fees depend on the location and therapist availability.",
    },
    {
        question: "How long do massage sessions usually last?",
        answer:
            "Treatment durations vary depending on the service. Most massage sessions are available in options ranging from approximately one hour to longer sessions, allowing guests to choose according to their schedule and preferred level of relaxation.",
    },
    {
        question: "Can I combine a massage with another spa treatment?",
        answer:
            "Yes. Guests can combine selected treatments such as massage, facials, body scrubs, Cream Bath, Manicure and Pedicure, and other beauty services. Our team can help recommend combinations based on the experience you are looking for.",
    },
    {
        question: "What should I prepare before my massage?",
        answer:
            "Comfortable clothing and a little time to relax are usually all you need. For certain treatments, your therapist may provide specific guidance before the session to help you enjoy the treatment comfortably.",
    },
];

export default function MassageKuta() {
    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="two">
                <Banner
                    subTitle="After a Day in the Sun"
                    titleSpan="Massage"
                    title="Kuta"
                    buttonText="Book Now"
                />
                <AboutOld
                    subTitle="A Moment to Reset"
                    title={<>What Can a Massage in Kuta Help With?</>}
                    text="Kuta is known for long beach days, surfing, sightseeing, and a lively holiday atmosphere, but all that activity can leave the body feeling stiff, heavy, or overtired. A professional massage offers a chance to slow down, release built-up tension, and feel more comfortable again."
                    feature1Title="Restore a Lighter Feeling"
                    feature1Text="Targeted massage techniques help release tightness after long days of exploring Bali."
                    feature2Title="Gentle Finish"
                    feature2Text="Slow, flowing movements and carefully adjusted pressure help the body relax."
                />
                <Funfact items={serviceHighlights} />
                <Testimonial />
                <About
                    subTitle="Treatment Options"
                    title={<>Which Massage Suits Your Day in Kuta?</>}
                    text="The right massage depends on what your body needs. Choose Balinese Massage for traditional relaxation, Traditional Massage for firmer pressure, Thai Massage for stretching, Sport Massage after physical activity, or Lymphatic Massage for gentle, rhythmic movements."
                    featuresLeft={[
                        "Balinese Massage for full-body relaxation",
                        "Traditional Massage for firmer pressure",
                        "Thai Massage for stretching and mobility",
                        "Sport Massage after exercise or surfing",
                    ]}
                    featuresRight={[
                        "Lymphatic Massage for gentle, light-pressure care",
                        "Bali Moon Facial for cleansing and skin refreshment",
                        "Head Massage for scalp, neck, and shoulder tension",
                        "Foot Reflexology for pressure-point foot care",
                    ]}
                    buttonText="Book Now"
                    buttonLink={bookingUrl}
                />
                <AboutReverse
                    subTitle="Complete Experience"
                    title={<>More Than a Full-Body Treatment</>}
                    text="A relaxing spa experience can include more than massage. Add a Bali Moon Facial, Body Scrub, Cream Bath, Manicure, Pedicure, or other beauty treatments to create a more complete session."
                    featuresLeft={[
                        "Bali Moon Facial with Tea Tree or Gold Mask options",
                        "Body Scrub for smoother, refreshed skin",
                        "Cream Bath for hair, scalp, and relaxation care",
                    ]}
                    featuresRight={[
                        "Manicure and Pedicure for hands and feet",
                        "Couple Massage for shared relaxation",
                        "Selected treatments available at hotels and villas",
                    ]}
                    buttonText="Book Now"
                    buttonLink={bookingUrl}
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
                    subTitle="Frequently Asked Questions"
                    title={<>Everything You Need to Know</>}
                    items={faqItems}
                />
                <ReserveCta
                    title="Take Time to Feel Better in Kuta"
                    text="When your body begins to feel the pace of it all, a professional massage can offer a welcome pause. At Spa Bali Moon, you can choose from traditional Balinese therapies, targeted recovery treatments, and relaxing beauty services to help you feel lighter, more comfortable, and ready to enjoy the rest of your stay."
                    closingText="Visit us for your treatment or ask about selected home service options at your hotel or villa in nearby areas."
                />
                <Services
                    subTitle="Our Treatments"
                    title={<>Massage Services in <br /> Kuta</>}
                />
            </Layout>
        </>
    );
}
