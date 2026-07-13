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
    price: "IDR 159K",
    name: "30 Minutes",
    treatments: [
      "Guests after long flights or travel",
      "Those seeking gentle ear and head relaxation",
      "Anyone wanting a quick wellness treatment",
    ],
  },
];

const serviceHighlights = [
  { title: "Controlled", text: "Warmth" },
  { title: "Outer", text: "Ear Care" },
  { title: "Head", text: "Comfort" },
  { title: "Home Service", text: "Available" },
];

const faqItems = [
  {
    question: "What is Ear Candle treatment?",
    answer:
      "Ear Candle is a wellness treatment using a hollow candle placed at the outer ear area to create gentle warmth and relaxation. It is commonly offered as a spa experience rather than a medical procedure.",
  },
  {
    question: "Does Ear Candle remove earwax?",
    answer:
      "Ear Candle is often associated with earwax removal, but it should be viewed as a relaxation treatment rather than a replacement for professional ear cleaning or medical care.",
  },
  {
    question: "Is Ear Candle safe?",
    answer:
      "When performed properly by trained therapists, the candle remains outside the ear canal and the session is carefully monitored for comfort and safety.",
  },
  {
    question: "How long does Ear Candle treatment take?",
    answer:
      "A typical session takes around 20 - 30 minutes, depending on the treatment flow and guest comfort.",
  },
  {
    question: "Can I enjoy Ear Candle after travelling or flying?",
    answer:
      "Yes. Many guests choose this treatment after flights or long journeys as a relaxing way to unwind during their Bali holiday.",
  },
  {
    question: "Can Ear Candle be combined with other spa treatments?",
    answer:
      "Yes. Many guests combine Ear Candle with massages or other wellness treatments for a more complete relaxation session.",
  },
];

export default function EarCandle() {
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="ear-candle-banner">
          <Banner
            subTitle="Gentle Ear Care"
            titleSpan="Ear Candle"
            title="Treatment"
          />
        </div>
        <AboutOld
          subTitle="Wellness for the Senses"
          title={<>What Is an Ear Candle Treatment?</>}
          text="Ear Candle, also known as Ear Candling, is a traditional wellness treatment that uses a hollow candle placed at the outer ear area while gentle warmth creates a calming sensation. Often combined with light massage around the ears, temples, and neck, this treatment is chosen by guests looking for a relaxing moment after travelling, long flights, or busy daily routines."
          feature1Title="Gentle Warmth"
          feature1Text="Creates a soothing sensation around the ear and head area during the session."
          feature2Title="Relaxing Approach"
          feature2Text="Combines controlled candle warmth with gentle surrounding massage techniques."
        />
        <div className="ear-candle-pricing">
          <Pricing
            subTitle="Treatment Overview"
            title="One Relaxing Ear Candle Session"
            text="Our Ear Candle treatment is offered in one session that provides a calm and comfortable wellness experience. The treatment is suitable for first-time guests and can also be combined with other spa services during your visit."
            packages={sessionOptions}
          />
        </div>
        <div className="ear-candle-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          subTitle="Common Uses"
          title={<>When Is Ear Candle Commonly Chosen?</>}
          text="Ear Candle is commonly chosen by guests looking for a gentle wellness treatment after long flights, extended travel, or busy schedules. Many also include it alongside massage treatments as part of a more complete spa visit, enjoying the calming warmth and relaxing attention around the ears, temples, and neck."
          featuresLeft={[
            "Popular after flights and long journeys",
            "Often combined with massage treatments",
            "Creates a calming wellness break",
          ]}
          featuresRight={[
            "Gentle care around the ear and head area",
            "Suitable for first-time Ear Candle guests",
            "Short treatment with minimal time commitment",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          subTitle="Treatment Focus"
          title={<>Areas Included During an Ear Candle Session</>}
          text="Although the hollow candle is positioned only at the outer ear, the treatment also includes gentle attention to nearby areas that contribute to overall comfort. Relaxing massage around the temples, jaw, and upper neck complements the session, creating a soothing experience beyond the ear itself."
          featuresLeft={[
            "Outer ear area",
            "Temples",
            "Jaw muscles",
          ]}
          featuresRight={[
            "Upper neck",
            "Surrounding head area",
            "Gentle comfort-focused care",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          subTitle="Step by Step"
          title={<>How Is Ear Candle Performed?</>}
          text="The treatment begins with a brief consultation before the therapist carefully positions the hollow ear candle at the outer ear. Throughout the session, the flame is continuously monitored while gentle massage around the ears, temples, jaw, and neck may be included to enhance relaxation. Every step is performed with comfort and safety in mind."
          featuresLeft={[
            "Brief consultation before treatment",
            "Hollow candle placed at the outer ear",
            "Controlled flame throughout the session",
          ]}
          featuresRight={[
            "Continuous therapist supervision",
            "Optional massage around the ears, temples, and neck",
            "Available at the spa or your accommodation",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="ear-candle-faq">
          <Faq
            imageTitle="Gentle Ear Care"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="pt-100 pb-100">
          <ReserveCta
            title="Restore a Sense of Comfort Around Your Ears"
            text="Sometimes the smallest treatments can make the biggest difference in how you feel. Ear Candle is a gentle wellness ritual that many guests choose to unwind, relax around the head and ear area, and take a quiet break from a busy holiday schedule. Available at our spa or as a home service for selected villas and hotels throughout Seminyak and nearby areas."
            closingText="Reserve your session and enjoy a calm wellness break during your Bali stay."
          />
        </div>
        <div className="ear-candle-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
        </div>
      </Layout>
      <style jsx global>{`
        .ear-candle-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .ear-candle-banner .banner-two__content .title span {
          display: inline;
        }

        .ear-candle-pricing .pricing-section-three > .container,
        .ear-candle-funfact .funfact-section > .container {
          max-width: 1200px;
        }

        .ear-candle-pricing .pricing-section-three .shape2 {
          bottom: 30px;
        }

        @media (min-width: 992px) {
          .ear-candle-pricing
            .pricing-section-three
            .pricing-block
            .inner-box {
            padding: 20px;
          }

          .ear-candle-pricing
            .pricing-section-three
            .image-column {
            display: flex;
          }

          .ear-candle-pricing
            .pricing-section-three
            .image-column
            .image-box {
            flex: 1;
            position: relative;
            min-height: 0;
          }

          .ear-candle-pricing
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
          .ear-candle-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .ear-candle-services
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
