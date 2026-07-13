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
    price: "IDR 219K",
    name: "1 Hour",
    treatments: [
      "Neck, shoulder, or back tension",
      "First-time Deep Tissue Massage guests",
      "Focused treatment on specific areas",
    ],
  },
  {
    price: "IDR 319K",
    name: "1.5 Hours",
    treatments: [
      "Multiple areas with muscle tightness",
      "Guests needing extended treatment time",
      "More detailed deep pressure techniques",
    ],
  },
];

const serviceHighlights = [
  { title: "Skilled", text: "Therapists" },
  { title: "Muscle", text: "Recovery" },
  { title: "Adjustable", text: "Pressure" },
  { title: "Home Service", text: "Available" },
];

const faqItems = [
  {
    question: "Is deep tissue massage painful?",
    answer:
      "Deep Tissue Massage may feel intense, especially when working on tight muscles, but it should remain within your comfort level. Our therapists adjust pressure throughout the session based on your feedback.",
  },
  {
    question: "What is the difference between Deep Tissue Massage and a regular massage?",
    answer:
      "Deep Tissue Massage focuses on deeper muscle layers using slower and firmer techniques, while regular massage generally uses lighter movements for relaxation and overall comfort.",
  },
  {
    question: "Is Deep Tissue Massage suitable after exercise?",
    answer:
      "Yes. Many active guests choose Deep Tissue Massage after physical activities because the treatment focuses on areas that may feel tight or overworked.",
  },
  {
    question: "How often should I get Deep Tissue Massage?",
    answer:
      "The ideal frequency depends on your lifestyle and muscle condition. Some guests book sessions occasionally after activities, while others include it as part of their regular body care routine.",
  },
  {
    question: "Can Deep Tissue Massage be done at a villa or hotel?",
    answer:
      "Yes. Home service is available for guests staying in selected villas, hotels, and accommodations around Seminyak.",
  },
];

export default function DeepTissueMassage() {
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="deep-tissue-massage-banner">
          <Banner
            subTitle="Muscle Recovery"
            titleSpan="Deep Tissue Massage"
            title="Treatment"
          />
        </div>
        <AboutOld
          subTitle="Therapeutic Care"
          title={<>Deep Tissue Massage: for Deeper Muscle Tension</>}
          text="Deep Tissue Massage is a therapeutic technique that uses slow, firm pressure to target deeper layers of muscles and connective tissues. Unlike a relaxing massage that focuses on gentle movements, this treatment is designed for areas affected by stiffness, repetitive activities, exercise, poor posture, or prolonged sitting. The controlled pressure works on areas of tension while supporting easier movement and improved flexibility."
          feature1Title="Deep Muscle Focus"
          feature1Text="Targets areas where long-term tension and stiffness commonly develop."
          feature2Title="Controlled Pressure"
          feature2Text="Uses steady techniques adjusted to your body's response and comfort level."
        />
        <div className="deep-tissue-massage-pricing">
          <Pricing
            subTitle="Session Options"
            title="Choose Your Duration"
            text="The right session length depends on your treatment goals and the number of areas requiring attention. Shorter sessions work well for focused areas, while longer sessions allow more time for detailed muscle work."
            packages={sessionOptions}
          />
        </div>
        <div className="deep-tissue-massage-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          subTitle="Common Reasons"
          title={<>Why Do People Get Deep Tissue Massage?</>}
          text="Deep Tissue Massage is often selected by guests who feel that regular massage does not provide enough focus on areas of strong tension. The technique is especially popular among active travellers, office workers, and individuals who experience recurring muscle tightness."
          featuresLeft={[
            "Helps relieve the feeling of tight muscles",
            "Supports easier movement and flexibility",
            "Focuses on common tension areas",
          ]}
          featuresRight={[
            "Suitable after physical activities or long journeys",
            "Helps loosen stiff areas caused by daily habits",
            "Preferred by guests who enjoy firmer massage pressure",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          subTitle="Target Areas"
          title={<>Which Parts of the Body Are Commonly Treated?</>}
          text="Muscle tension does not always appear in the same place for everyone. During a Deep Tissue Massage session, our therapists usually focus on areas affected by posture, movement patterns, and physical activities."
          featuresLeft={[
            "Shoulders and upper back from desk work or travel",
            "Neck area affected by daily posture",
            "Lower back from prolonged sitting",
          ]}
          featuresRight={[
            "Legs after walking, surfing, or exercise",
            "Arms affected by repetitive activities",
            "Pressure adjusted to your treatment goals",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          subTitle="Massage Techniques"
          title={<>How Does Deep Tissue Massage Work?</>}
          text="Deep Tissue Massage uses specific manual techniques to work on areas where muscle tension commonly builds. Our therapists apply sustained pressure, slow muscle stripping movements, cross-fiber techniques, and targeted trigger point work while adjusting intensity based on your body's response."
          featuresLeft={[
            "Sustained pressure for deeper muscle work",
            "Slow stripping techniques along muscle fibers",
            "Cross-fiber movements for focused areas",
          ]}
          featuresRight={[
            "Targeted trigger point techniques",
            "Forearm and elbow methods when suitable",
            "Pressure adjusted based on your comfort",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="deep-tissue-massage-faq">
          <Faq
            imageTitle="Muscle Recovery"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="pt-100 pb-100">
          <ReserveCta
            title="Release Built-Up Muscle Tension During Your Bali Stay"
            text="Long flights, active adventures, desk work, and daily movement around Bali can leave certain muscles feeling tight and restricted. Our Deep Tissue Massage provides focused care through controlled pressure and specialised techniques designed for areas that need deeper attention. Enjoy your treatment at our spa or request a home service at your villa or hotel within selected areas."
            closingText="Reserve your session and let our therapists focus on the areas that need deeper care."
          />
        </div>
        <div className="deep-tissue-massage-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
        </div>
      </Layout>
      <style jsx global>{`
        .deep-tissue-massage-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .deep-tissue-massage-banner .banner-two__content .title span {
          display: inline;
        }

        .deep-tissue-massage-pricing .pricing-section-three > .container,
        .deep-tissue-massage-funfact .funfact-section > .container {
          max-width: 1200px;
        }

        .deep-tissue-massage-pricing .pricing-section-three .shape2 {
          bottom: 30px;
        }

        @media (min-width: 992px) {
          .deep-tissue-massage-pricing
            .pricing-section-three
            .pricing-block
            .inner-box {
            padding: 20px;
          }

          .deep-tissue-massage-pricing
            .pricing-section-three
            .image-column {
            display: flex;
          }

          .deep-tissue-massage-pricing
            .pricing-section-three
            .image-column
            .image-box {
            flex: 1;
            position: relative;
            min-height: 0;
          }

          .deep-tissue-massage-pricing
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
          .deep-tissue-massage-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .deep-tissue-massage-services
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
