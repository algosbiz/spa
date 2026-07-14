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
    price: "IDR 169K",
    name: "1 Hour",
    treatments: [
      "Mild muscle stiffness",
      "Focused attention on specific areas",
      "Guests looking for a refreshing massage",
    ],
  },
  {
    price: "IDR 259K",
    name: "1.5 Hours",
    treatments: [
      "Multiple tension areas",
      "Longer relaxation experience",
      "Guests wanting more detailed treatment",
    ],
  },
  {
    price: "IDR 339K",
    name: "2 Hours",
    treatments: [
      "Deeper muscle comfort",
      "Full body massage experience",
      "Guests with more time for relaxation",
    ],
  },
];

const serviceHighlights = [
  { title: "Traditional", text: "Techniques" },
  { title: "Adjustable", text: "Pressure" },
  { title: "Warm Oil", text: "Application" },
  { title: "Home Service", text: "Available" },
];

const faqItems = [
  {
    question: "What is Traditional Massage?",
    answer:
      "Traditional Massage is a hands-on massage technique that uses firm pressure, kneading, and focused movements to help release muscle tension and improve body comfort.",
  },
  {
    question: "What is the difference between Traditional Massage and Balinese Massage?",
    answer:
      "Traditional Massage usually uses firmer and more direct pressure for muscle release, while Balinese Massage combines flowing strokes, stretching, and relaxation-focused techniques.",
  },
  {
    question: "Is Traditional Massage painful?",
    answer:
      "The pressure may feel strong, especially around tense areas, but it should remain comfortable. Our therapists adjust intensity based on your preference.",
  },
  {
    question: "Is Traditional Massage suitable for first-time guests?",
    answer:
      "Yes. First-time guests can enjoy this treatment because the pressure can be modified according to individual comfort levels.",
  },
  {
    question: "Should I choose Traditional Massage or Deep Tissue Massage?",
    answer:
      "Traditional Massage is ideal for guests wanting firm full-body pressure and general muscle relief. Deep Tissue Massage is more targeted toward deeper layers and specific long-term tension areas.",
  },
];

export default function TraditionalMassage() {
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="traditional-massage-banner">
          <Banner
            subTitle="Firm Body Care"
            titleSpan="Traditional Massage"
            title="Treatment"
          />
        </div>
        <AboutOld
          subTitle="Traditional Wellness Support"
          title={<>What Makes Traditional Massage Different?</>}
          text="Traditional Massage is a hands-on body treatment that uses firmer pressure, kneading movements, and focused techniques to release muscle tension throughout the body. Unlike lighter relaxation massages, this treatment works more directly on areas that feel stiff or overworked, helping improve comfort, mobility, and overall body relaxation."
          feature1Title="Firm Pressure"
          feature1Text="Uses stronger massage movements to address areas with built-up tension."
          feature2Title="Full Body Relief"
          feature2Text="Targets common tension areas while supporting overall relaxation."
        />
        <div className="traditional-massage-pricing">
          <Pricing
            subTitle="Select Yours"
            title="Our Session Options"
            text="Our Traditional Massage session provides enough time for therapists to work through areas that hold tension. Choose a shorter treatment for focused relaxation or a longer session for more complete body care."
            packages={sessionOptions}
          />
        </div>
        <div className="traditional-massage-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          subTitle="Gentle Relief"
          title={<>Why Do Guests Choose Traditional Massage?</>}
          text="Traditional Massage is popular among guests who prefer a stronger touch compared to gentle relaxation treatments. It is often selected after busy schedules, long journeys, physical activities, or when the body feels heavy from daily tension."
          featuresLeft={[
            "Helps ease stiff and tired muscles",
            "Supports better body comfort",
            "Relieves tension from daily activities",
          ]}
          featuresRight={[
            "Encourages smoother movement",
            "Improves relaxation through firm techniques",
            "Suitable after travel or physical exertion",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          subTitle="Treatment Focus"
          title={<>Which Areas Receive the Most Attention?</>}
          text="Muscle tension often develops in areas that carry repeated pressure throughout the day. During Traditional Massage, our therapists adjust their approach based on your body condition and focus on areas that need extra care."
          featuresLeft={[
            "Back from prolonged sitting or activity",
            "Shoulders and neck from daily posture",
            "Legs after walking or exercise",
          ]}
          featuresRight={[
            "Arms from repetitive movement",
            "Lower back from physical strain",
            "Whole body for general relaxation",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          subTitle="The Approach"
          title={<>Inside a Traditional Massage Session</>}
          text="Traditional Massage combines firm hand movements with warm oil application to create smoother and more comfortable techniques. Our therapists use kneading, pressing, and acupressure-inspired movements to release areas of tightness while maintaining communication throughout the session. Pressure can be adjusted based on your comfort and body response."
          featuresLeft={[
            "Warm oil preparation",
            "Kneading techniques",
            "Firm pressing movements",
          ]}
          featuresRight={[
            "Acupressure-inspired methods",
            "Targeted work on tense areas",
            "Pressure adjusted during treatment",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="traditional-massage-faq">
          <Faq
            imageTitle="Traditional Massage"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="pt-100 pb-100">
          <ReserveCta
            title="Restore Your Body After Long Days in Bali"
            text="Travel, outdoor activities, and daily movement can leave muscles feeling tight and tired. Traditional Massage offers a stronger yet balanced approach using firm techniques to release tension, improve comfort, and help the body feel refreshed again. Enjoy your treatment at Spa Bali Moon or request our home service option for a relaxing experience at your villa or hotel."
            closingText="Reserve your Traditional Massage session and restore comfort after long days in Bali."
          />
        </div>
        <div className="traditional-massage-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
        </div>
      </Layout>
      <style jsx global>{`
        .traditional-massage-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .traditional-massage-banner .banner-two__content .title span {
          display: inline;
        }

        .traditional-massage-pricing .pricing-section-three > .container,
        .traditional-massage-funfact .funfact-section > .container {
          max-width: 1200px;
        }

        .traditional-massage-pricing .pricing-section-three .shape2 {
          bottom: 30px;
        }

        @media (min-width: 992px) {
          .traditional-massage-pricing
            .pricing-section-three
            .pricing-block
            .inner-box {
            padding: 20px;
          }

          .traditional-massage-pricing
            .pricing-section-three
            .image-column {
            display: flex;
          }

          .traditional-massage-pricing
            .pricing-section-three
            .image-column
            .image-box {
            flex: 1;
            position: relative;
            min-height: 0;
          }

          .traditional-massage-pricing
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
          .traditional-massage-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .traditional-massage-services
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
