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
import { createTreatmentImageSet } from "@/lib/treatmentImages";

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
  { title: "Outcall", text: "Available" },
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
  const treatmentImages = createTreatmentImageSet("footreflexology", sessionOptions.length);
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="foot-reflexology-banner">
          <Banner
            image={treatmentImages.hero}
            subTitle="Natural Balance"
            titleSpan="Foot Reflexology"
            title="Seminyak"
          />
        </div>
        <AboutOld
          primaryImage={treatmentImages.intro[0]}
          secondaryImage={treatmentImages.intro[1]}
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
            images={treatmentImages.pricing}
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
          image={treatmentImages.details[0]}
          subTitle="Benefits of Foot Reflexology"
          title={<>A Simple Way to Refresh Tired Feet</>}
          text="After a day of walking, standing, travelling, or exploring Bali, your feet can start to feel tired and heavy. Foot Reflexology offers a simple way to give them focused care while creating a relaxing wellness experience. You may choose this treatment for reasons such as:"
          featuresLeft={[
            "Helping tired feet feel lighter",
            "Encouraging healthy local circulation",
            "Promoting relaxation after long walks",
          ]}
          featuresRight={[
            "Supporting everyday foot comfort",
            "Fitting easily into regular wellness routines",
            "Providing soothing care for travellers in Bali",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          image={treatmentImages.details[1]}
          subTitle="Reflex Points"
          badgeTopText="The Reflex"
          badgeBottomText="Map"
          title={<>Where Does Foot Reflexology Focus?</>}
          text="Foot Reflexology uses focused pressure on specific areas of the feet based on traditional reflexology principles. Rather than applying the same pressure everywhere, we work through different zones to create a balanced and comfortable treatment. Our session may focus on:"
          featuresLeft={[
            "Toes and forefoot reflex points",
            "The ball of the foot",
            "The foot arch",
          ]}
          featuresRight={[
            "The heel area",
            "Inner and outer foot zones",
            "Lower leg finishing techniques",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          image={treatmentImages.details[2]}
          subTitle="The Technique"
          badgeTopText="A Guided"
          badgeBottomText="Sequence"
          title={<>What Is a Foot Reflexology Session Like?</>}
          text="A Foot Reflexology session follows a gentle, structured approach that combines warm-up movements with focused pressure on selected reflex points. The therapist adjusts the technique throughout the treatment to keep the pressure comfortable while maintaining a steady rhythm. The session typically involves:"
          featuresLeft={[
            "Gentle warm-up techniques",
            "A structured reflex point sequence",
            "Thumb and finger pressure techniques",
          ]}
          featuresRight={[
            "Controlled adjustments to pressure",
            "Relaxing finishing movements",
            "A comfortable treatment experience from start to finish",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="foot-reflexology-faq">
          <Faq
            removeTopPadding
            paperDecoration
            image={treatmentImages.faq}
            imageTitle="Reflex Points"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div>
          <ReserveCta
            standardSpacing
            backgroundImage={treatmentImages.cta}
            title="Restore Comfort to Every Step"
            text="Long days exploring Bali often begin with excitement and end with tired, overworked feet. Foot Reflexology offers a relaxing way to pause, helping your feet recover through carefully applied pressure-point techniques in a calm and comfortable setting. Visit our spa or enjoy the same professional treatment from your villa or hotel with our convenient home service."
            closingText="Reserve your Foot Reflexology session and bring comfort back to every step."
          />
        </div>
        <div className="foot-reflexology-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Step Into More Feel-Good Treatments" showFullTreatmentSlider embedded />
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
