import FloralDecoration from "../components/elements/FloralDecoration";
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
import { seoFor } from "@/lib/seo";

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
  { title: "Outcall", text: "Available" },
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

const PAGE_SEO_ROUTE = "/seminyak/ear-wax-removal";
const PAGE_SEO = seoFor(PAGE_SEO_ROUTE);

export default function EarCandle() {
  const treatmentImages = createTreatmentImageSet("earcandle", sessionOptions.length);
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two" headTitle={PAGE_SEO.title} metaDescription={PAGE_SEO.description} canonicalPath={PAGE_SEO_ROUTE}>
        <div className="ear-candle-banner">
          <Banner
            image={treatmentImages.hero}
            subTitle="Gentle Ear Care"
            titleSpan="Ear Candle"
            title="Seminyak"
          />
        </div>
        <AboutOld
          leftShapeSrc="/images/shape/about-two-left.png"
          rightShapeSrc="/images/shape/about-two-right.png"
          primaryImage={treatmentImages.intro[0]}
          secondaryImage={treatmentImages.intro[1]}
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
            leftShapeSrc="/images/shape/package-four-shape-left.png"
            images={treatmentImages.pricing}
            subTitle="Treatment Overview"
            title="One Relaxing Ear Candle Session"
            text="Our Ear Candle treatment is offered in one session that provides a calm and comfortable wellness experience. The treatment is suitable for first-time guests and can also be combined with other spa services during your visit."
            packages={sessionOptions}
          />
        </div>
        <div className="ear-candle-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial rightShapeSrc={null} />
        <About
          leftShapeSrc={null}
          rightShapeSrc="/images/shape/about-right-shape.png"
          image={treatmentImages.details[0]}
          subTitle="Common Uses"
          title={<>When Is Ear Candle Commonly Chosen?</>}
          text="Ear Candle is often chosen as a gentle wellness treatment during a relaxing spa visit. It may be suitable for guests looking to unwind after travel, take a short break from a busy schedule, or enjoy a calming treatment around the ears and head. Common reasons they choose Ear Candle include:"
          featuresLeft={[
            "Relaxing after flights or long journeys",
            "Combining it with a massage treatment",
            "Taking a short wellness break",
          ]}
          featuresRight={[
            "Enjoying gentle attention around the ears and head",
            "Trying Ear Candle for the first time",
            "Choosing a treatment with a shorter time commitment",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          leftShapeSrc="/images/shape/step-shape-left.png"
          rightShapeSrc="/images/shape/banner-six-shape2.png"
          rightDecoration={<FloralDecoration clustered />}
          image={treatmentImages.details[1]}
          subTitle="Treatment Focus"
          badgeTopText="Beyond the"
          badgeBottomText="Ear"
          title={<>Areas Included During an Ear Candle Session</>}
          text="During an Ear Candle session, gentle attention may be given to the outer ear and nearby areas for a more relaxing experience. Depending on the treatment, this may include:"
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
          rightShapeSrc="/images/shape/banner-three-shape2.png"
          image={treatmentImages.details[2]}
          subTitle="Step by Step"
          badgeTopText="Handled With"
          badgeBottomText="Care"
          title={<>How Does an Ear Wax Candle Work?</>}
          text="An ear wax candle session follows a simple and gentle process designed to create a relaxing experience. Firstly, we make sure you are comfortably positioned before placing the hollow candle near the outer ear. During the session, the candle is carefully monitored, and gentle massage may be included to help you relax. This treatment typically involves:"
          featuresLeft={[
            "Positioning the hollow candle near the outer ear",
            "Gently lighting the candle at the opposite end",
            "Monitoring the flame throughout the session",
          ]}
          featuresRight={[
            "Providing continuous therapist supervision",
            "Including gentle massage around the ears, temples, jaw, and neck",
            "Enjoying the treatment at the spa or your accommodation",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="ear-candle-faq">
          <Faq
            removeTopPadding
            paperDecoration
            image={treatmentImages.faq}
            imageTitle="Gentle Ear Care"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="ear-candle-services">
          <Services
            leftShapeSrc="/images/shape/service-shape-left.png"
            rightShapeSrc="/images/shape/service-shape-right.png"
            title="Explore More Ways to Feel Restored" showFullTreatmentSlider embedded
          />
        </div>
        <div className="ear-candle-paper-section section__decoration-top section__decoration-bottom bg-sub">
          <ReserveCta
            standardSpacing
            backgroundImage={treatmentImages.cta}
            title="Restore a Sense of Comfort Around Your Ears"
            text="Sometimes the smallest treatments can make the biggest difference in how you feel. Ear Candle is a gentle wellness ritual that many guests choose to unwind, relax around the head and ear area, and take a quiet break from a busy holiday schedule. Available at our spa or as a home service for selected villas and hotels throughout Seminyak and nearby areas."
            closingText="Reserve your session and enjoy a calm wellness break during your Bali stay."
          />
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
