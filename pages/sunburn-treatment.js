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

const treatmentOptions = [
  {
    price: "IDR 199K",
    name: "1 Hour",
    treatments: [
      "Mild sunburn and skin redness",
      "Skin feeling hot, dry, or tight",
      "Recovery after beach or pool activities",
    ],
  },
];

const serviceHighlights = [
  { title: "Aloe Vera", text: "Infusion" },
  { title: "Cooling", text: "Hydration" },
  { title: "Sensitive", text: "Skin Friendly" },
  { title: "Home Service", text: "Available" },
];

const faqItems = [
  {
    question: "Can I get a massage if I have sunburn?",
    answer:
      "Yes, provided the skin is not blistered or severely damaged. Our Sunburn Treatment avoids deep pressure and uses gentle techniques specifically intended for sensitive skin.",
  },
  {
    question: "Why is aloe vera commonly used after sun exposure?",
    answer:
      "Aloe vera is widely used in after-sun care because of its cooling properties and its ability to help maintain skin hydration while soothing temporary discomfort.",
  },
  {
    question: "Is this treatment suitable immediately after the beach?",
    answer:
      "Yes. Many guests book this treatment after spending long hours outdoors to help cool and rehydrate their skin.",
  },
  {
    question: "Does the treatment focus on the whole body?",
    answer:
      "It can. Our therapist may treat the entire body or concentrate only on the sun-exposed areas that require the most attention.",
  },
  {
    question: "Can I return to the sun after my appointment?",
    answer:
      "It's recommended to give your skin time to recover before further sun exposure and to apply appropriate sun protection when going outdoors.",
  },
];

export default function SunburnTreatment() {
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="sunburn-treatment-banner">
          <Banner
            subTitle="After Sun Care"
            titleSpan="Sunburn"
            title="Treatment"
          />
        </div>
        <AboutOld
          subTitle="Skin Recovery"
          title={<>Why Does Sunburned Skin Need Gentle Treatment?</>}
          text="After prolonged sun exposure, the skin can become warm, dehydrated, tight, and more sensitive than usual. A Sunburn Treatment uses cooling ingredients such as aloe vera together with gentle application techniques to calm overheated skin without adding unnecessary pressure. The goal is to restore comfort, replenish moisture, and support the skin's natural recovery process after time in Bali's tropical sun."
          feature1Title="Cooling Care"
          feature1Text="Helps calm overheated skin with soothing after-sun ingredients."
          feature2Title="Gentle Application"
          feature2Text="Light movements designed for skin that feels sensitive or tender."
        />
        <div className="sunburn-treatment-pricing">
          <Pricing
            subTitle="Treatment Details"
            title="A Dedicated Session for Sun-Exposed Skin"
            text="Our Sunburn Treatment is provided as a focused one-hour session, giving the skin time to cool, rehydrate, and recover comfortably after beach days, outdoor activities, or extended sun exposure."
            packages={treatmentOptions}
          />
        </div>
        <div className="sunburn-treatment-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          subTitle="The Benefits"
          title={<>How Can a Sunburn Treatment Help?</>}
          text="Sunburn Treatment is designed to improve comfort rather than provide deep massage. Cooling botanical ingredients and gentle techniques work together to calm skin that has become stressed by ultraviolet exposure while supporting healthy moisture levels during recovery."
          featuresLeft={[
            "Helps cool overheated skin",
            "Supports hydration after sun exposure",
            "Reduces the feeling of tightness",
          ]}
          featuresRight={[
            "Comforts sensitive skin",
            "Suitable after beach holidays or outdoor activities",
            "Promotes a calmer skin sensation during recovery",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          subTitle="Areas of Care"
          title={<>Which Parts of the Body Are Commonly Treated?</>}
          text="Every sunburn is different. Our therapists focus on the areas most affected by sun exposure while adapting the treatment according to your skin's condition and comfort throughout the session."
          featuresLeft={[
            "Shoulders",
            "Upper back",
            "Arms",
          ]}
          featuresRight={[
            "Legs",
            "Chest area",
            "Any sun-exposed skin requiring gentle care",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          subTitle="The Experience"
          title={<>What to Expect from a Sunburn Treatment</>}
          text="Our therapist first assesses the condition of your skin before applying cooling aloe vera and soothing botanical products to the affected areas. Gentle, slow movements help spread the products evenly without creating unnecessary friction, while cool compresses may be used to enhance comfort. Every step is performed with sensitive skin in mind, allowing your body to relax while your skin begins its recovery."
          featuresLeft={[
            "Skin condition assessment",
            "Cooling aloe vera application",
            "Light, non-irritating massage movements",
          ]}
          featuresRight={[
            "Optional cool compresses",
            "Hydrating botanical care",
            "Comfort-focused finishing",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="sunburn-treatment-faq">
          <Faq
            imageTitle="After Sun Care"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="pt-100 pb-100">
          <ReserveCta
            title="Give Your Skin the Recovery Time It Deserves"
            text="Hours spent surfing, swimming, sightseeing, or relaxing under Bali's sunshine can leave your skin feeling warmer and more sensitive than expected. Our Sunburn Treatment provides gentle after-sun care using cooling aloe vera and hydrating botanical ingredients to restore comfort without placing additional stress on the skin. Relax at our spa or enjoy the same soothing treatment from your villa or hotel through our available home service."
            closingText="Reserve your Sunburn Treatment and let your skin recover comfortably."
          />
        </div>
        <div className="sunburn-treatment-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
        </div>
      </Layout>
      <style jsx global>{`
        .sunburn-treatment-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .sunburn-treatment-banner .banner-two__content .title span {
          display: inline;
        }

        .sunburn-treatment-pricing .pricing-section-three > .container,
        .sunburn-treatment-funfact .funfact-section > .container {
          max-width: 1200px;
        }

        .sunburn-treatment-pricing .pricing-section-three .shape2 {
          bottom: 30px;
        }

        @media (min-width: 992px) {
          .sunburn-treatment-pricing
            .pricing-section-three
            .pricing-block
            .inner-box {
            padding: 20px;
          }

          .sunburn-treatment-pricing
            .pricing-section-three
            .image-column {
            display: flex;
          }

          .sunburn-treatment-pricing
            .pricing-section-three
            .image-column
            .image-box {
            flex: 1;
            position: relative;
            min-height: 0;
          }

          .sunburn-treatment-pricing
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
          .sunburn-treatment-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .sunburn-treatment-services
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
