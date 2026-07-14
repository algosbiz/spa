import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home2/Banner";
import AboutOld from "../components/sections/Home2/About";
import Pricing from "../components/sections/Home3/Pricing";
import Funfact from "../components/sections/Home2/Funfact";
import Testimonial from "../components/sections/Home2/Testimonial";
import AboutReverse from "../components/sections/Home1/AboutReverse";
import About from "../components/sections/Home1/About";
import ReserveCta from "../components/sections/Home1/ReserveCta";
import Faq from "../components/sections/Home6/Faq";
import Services from "../components/sections/Home2/Services";

const bookingUrl = "https://wa.me/6287863175144";

const sessionOptions = [
  {
    price: "IDR 99K",
    name: "30 Minutes",
    treatments: [
      "Quick relaxation",
      "Guests with limited time",
      "Tired feet after sightseeing",
    ],
  },
  {
    price: "IDR 169K",
    name: "1 Hour",
    treatments: [
      "Complete foot reflexology session",
      "Daily foot fatigue",
      "Better overall relaxation",
    ],
  },
  {
    price: "IDR 239K",
    name: "1.5 Hours",
    treatments: [
      "Longer reflexology experience",
      "Guests wanting extra relaxation",
      "Extended pressure-point treatment",
    ],
  },
];

const serviceHighlights = [
  { title: "Reflex", text: "Point Therapy" },
  { title: "Flexible", text: "Booking" },
  { title: "Gentle", text: "Pressure" },
  { title: "Home Service", text: "Available" },
];

const faqItems = [
  {
    question: "Is Foot Reflexology the same as a Foot Massage?",
    answer:
      "Not exactly. Foot Massage focuses on relaxing muscles and relieving soreness, while Foot Reflexology applies pressure to specific reflex points using a structured technique.",
  },
  {
    question: "Does Foot Reflexology hurt?",
    answer:
      "Most guests find the treatment comfortable. Some reflex points may feel more sensitive than others, but pressure is always adjusted according to your comfort.",
  },
  {
    question: "Is Foot Reflexology suitable after walking around Bali?",
    answer:
      "Yes. Many guests book Foot Reflexology after sightseeing, shopping, hiking, or spending long hours on their feet.",
  },
  {
    question: "Can I combine Foot Reflexology with another treatment?",
    answer:
      "Absolutely. It is commonly paired with full-body massage, back massage, or facial treatments for a more complete wellness experience.",
  },
  {
    question: "Is home service available?",
    answer:
      "Yes. The treatment is available at our spa as well as selected villas and hotels throughout Seminyak and nearby areas.",
  },
];

export default function FootReflexology() {
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="foot-reflexology-banner">
          <Banner
            subTitle="Natural Balance"
            titleSpan="Foot Reflexology"
            title="Treatment"
          />
        </div>
        <AboutOld
          subTitle="Understanding Reflexology"
          title={<>What Is Foot Reflexology and How Does It Work?</>}
          text="Foot Reflexology is a traditional wellness therapy that applies controlled pressure to specific reflex points on the feet, which are traditionally believed to correspond with different areas of the body. Using a structured reflex-point technique, the treatment helps encourage relaxation, supports circulation in the feet, and relieves the sensation of tiredness after travel, long walks, or daily activities."
          feature1Title="Reflex Point Therapy"
          feature1Text="Uses targeted pressure on specific areas of the feet rather than general massage strokes."
          feature2Title="Whole-Body Relaxation"
          feature2Text="Encourages a calming effect that many guests experience beyond the feet themselves."
        />
        <div className="foot-reflexology-pricing">
          <Pricing
            subTitle="Session Options"
            title="Choose the Session That Fits You"
            text="Every Foot Reflexology session follows the same structured pressure-point technique, while longer durations allow additional time to work across more reflex areas at a relaxed pace. Select the option that best matches your comfort and schedule."
            packages={sessionOptions}
          />
        </div>
        <div className="foot-reflexology-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          subTitle="Why Guests Choose It"
          title={<>A Simple Way to Refresh Tired Feet</>}
          text="Hours of walking, standing, travelling, or exploring Bali often leave the feet feeling sore and heavy. Foot Reflexology is commonly chosen as a comfortable wellness treatment that focuses on specific pressure points while creating a deeply relaxing experience from the feet upward."
          featuresLeft={[
            "Helps tired feet feel lighter",
            "Encourages local blood circulation",
            "Promotes relaxation after long walks",
          ]}
          featuresRight={[
            "Supports everyday foot comfort",
            "Suitable for regular wellness routines",
            "Popular among travellers in Bali",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          subTitle="Reflex Points"
          title={<>Where Does Foot Reflexology Focus?</>}
          text="Rather than massaging every part of the foot equally, Foot Reflexology follows a structured map of reflex points. Different areas receive controlled pressure according to traditional reflexology principles while maintaining a relaxing and comfortable treatment."
          featuresLeft={[
            "Toes and forefoot reflex points",
            "Ball of the foot",
            "Foot arch",
          ]}
          featuresRight={[
            "Heel area",
            "Inner and outer foot zones",
            "Lower leg finishing techniques",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          subTitle="The Technique"
          title={<>What Is a Foot Reflexology Session Like?</>}
          text="Each session begins with gentle warm-up movements before our therapist applies steady thumb and finger pressure to carefully selected reflex points across the feet. The treatment follows a structured sequence rather than random massage strokes, allowing consistent pressure while keeping the experience comfortable and relaxing throughout the session."
          featuresLeft={[
            "Gentle warm-up techniques",
            "Structured reflex point sequence",
            "Thumb and finger pressure methods",
          ]}
          featuresRight={[
            "Controlled pressure adjustments",
            "Relaxing finishing movements",
            "Available at the spa or your accommodation",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="foot-reflexology-faq">
          <Faq
            imageTitle="Reflex Points"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="pt-100 pb-100">
          <ReserveCta
            title="Restore Comfort to Every Step"
            text="Long days exploring Bali often begin with excitement and end with tired, overworked feet. Foot Reflexology offers a relaxing way to pause, helping your feet recover through carefully applied pressure-point techniques in a calm and comfortable setting. Visit our spa or enjoy the same professional treatment from your villa or hotel with our convenient home service."
            closingText="Reserve your Foot Reflexology session and bring comfort back to every step."
          />
        </div>
        <div className="foot-reflexology-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
        </div>
      </Layout>
      <style jsx global>{`
        .foot-reflexology-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .foot-reflexology-banner .banner-two__content .title span {
          display: inline;
        }

        .foot-reflexology-pricing .pricing-section-three > .container,
        .foot-reflexology-funfact .funfact-section > .container {
          max-width: 1200px;
        }

        .foot-reflexology-pricing .pricing-section-three .shape2 {
          bottom: 30px;
        }

        @media (min-width: 992px) {
          .foot-reflexology-pricing
            .pricing-section-three
            .pricing-block
            .inner-box {
            padding: 20px;
          }

          .foot-reflexology-pricing
            .pricing-section-three
            .image-column {
            display: flex;
          }

          .foot-reflexology-pricing
            .pricing-section-three
            .image-column
            .image-box {
            flex: 1;
            position: relative;
            min-height: 0;
          }

          .foot-reflexology-pricing
            .pricing-section-three
            .image-column
            .image-box
            img {
            position: absolute;
            inset: 0;
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        @media (min-width: 1400px) {
          .foot-reflexology-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .foot-reflexology-services
          .service-section-two
          .section-header
          .title {
          max-width: 720px;
          margin-right: auto;
          margin-left: auto;
        }
      `}</style>
    </>
  );
}
