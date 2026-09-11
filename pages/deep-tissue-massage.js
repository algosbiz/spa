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
  { title: "Outcall", text: "Available" },
];

const faqItems = [
  {
    question: "Does deep tissue massage hurt?",
    answer:
      "Deep Tissue Massage may feel intense, especially when working on tight muscles, but it should remain within your comfort level. Our therapists adjust pressure throughout the session based on your feedback.",
  },
  {
    question: "What's the difference between Swedish and deep tissue massage?",
    answer:
      "Swedish massage uses lighter to moderate pressure and gentle, flowing movements to promote relaxation. Deep tissue massage uses firmer, slower pressure to target deeper muscle tension and tight areas.",
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
  {
    question: "What should I do after a deep tissue massage?",
    answer:
      "Drink plenty of water, rest, and avoid strenuous exercise for the rest of the day. Gentle stretching can also help your muscles recover.",
  },
  {
    question: "Is deep tissue massage good for sciatica?",
    answer:
      "Deep tissue massage may help relieve muscle tension and discomfort associated with sciatica. However, it is not a treatment for the underlying cause, so it is best to consult a healthcare professional if your symptoms are severe or persistent.",
  },
  {
    question: "What are the benefits of a deep tissue massage?",
    answer:
      "Deep tissue massage can help reduce muscle tension, relieve stiffness, improve circulation, and support recovery after physical activity. It may also help improve flexibility and overall relaxation.",
  },
];

const PAGE_SEO_ROUTE = "/seminyak/deep-tissue-massage";
const PAGE_SEO = seoFor(PAGE_SEO_ROUTE);

export default function DeepTissueMassage() {
  const treatmentImages = createTreatmentImageSet("deeptissuemassage", sessionOptions.length);
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two" headTitle={PAGE_SEO.title} metaDescription={PAGE_SEO.description} canonicalPath={PAGE_SEO_ROUTE}>
        <div className="deep-tissue-massage-banner">
          <Banner
            image={treatmentImages.hero}
            subTitle="Muscle Recovery"
            titleSpan="Deep Tissue Massage"
            title="Seminyak"
          />
        </div>
        <AboutOld
          leftShapeSrc="/images/shape/about-two-left.png"
          rightShapeSrc="/images/shape/about-two-right.png"
          primaryImage={treatmentImages.intro[0]}
          secondaryImage={treatmentImages.intro[1]}
          subTitle="Therapeutic Care"
          title={<>What Is Deep Tissue Massage?</>}
          text="Deep Tissue Massage is a therapeutic technique that uses slow, firm pressure to target deeper layers of muscles and connective tissues. Unlike a relaxing massage that focuses on gentle movements, this treatment is designed for areas affected by stiffness, repetitive activities, exercise, poor posture, or prolonged sitting. The controlled pressure works on areas of tension while supporting easier movement and improved flexibility."
          feature1Title="Deep Muscle Focus"
          feature1Text="Targets areas where long-term tension and stiffness commonly develop."
          feature2Title="Controlled Pressure"
          feature2Text="Uses steady techniques adjusted to your body's response and comfort level."
        />
        <div className="deep-tissue-massage-pricing">
          <Pricing
            leftShapeSrc="/images/shape/package-four-shape-left.png"
            images={treatmentImages.pricing}
            subTitle="Session Options"
            title="Choose Your Duration"
            text="The right session length depends on your treatment goals and the number of areas requiring attention. Shorter sessions work well for focused areas, while longer sessions allow more time for detailed muscle work."
            packages={sessionOptions}
          />
        </div>
        <div className="deep-tissue-massage-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial rightShapeSrc={null} />
        <About
          leftShapeSrc={null}
          rightShapeSrc="/images/shape/about-right-shape.png"
          image={treatmentImages.details[0]}
          subTitle="Common Reasons"
          title={<>Why Do People Get Deep Tissue Massage?</>}
          text="People often choose Deep Tissue Massage when they feel a regular massage doesn't focus enough on areas of persistent tension. It is particularly popular among active travellers, office workers, and people who regularly experience muscle tightness. Some of the main reasons to choose Deep Tissue Massage include:"
          featuresLeft={[
            "Relieving the feeling of tight muscles",
            "Supporting easier movement and flexibility",
            "Targeting common areas of muscle tension",
          ]}
          featuresRight={[
            "Relaxing the body after physical activities or long journeys",
            "Loosening stiff areas caused by daily habits",
            "Enjoying a firmer massage pressure",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          leftShapeSrc="/images/shape/step-shape-left.png"
          rightShapeSrc="/images/shape/banner-six-shape2.png"
          rightDecoration={<FloralDecoration clustered />}
          image={treatmentImages.details[1]}
          subTitle="Target Areas"
          badgeTopText="Where Tension"
          badgeBottomText="Lives"
          title={<>Which Parts of the Body Are Commonly Treated?</>}
          text="During a Deep Tissue Massage session, we typically focus on areas affected by posture, movement patterns, or physical activities. But depending on your needs, common areas that may receive focused attention include:"
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
          rightShapeSrc="/images/shape/banner-three-shape2.png"
          image={treatmentImages.details[2]}
          subTitle="Massage Techniques"
          badgeTopText="Power in"
          badgeBottomText="Technique"
          title={<>How Does Deep Tissue Massage Work?</>}
          text="We combine several manual techniques to address areas of muscle tension and stiffness. We also adjust the technique and pressure according to the treatment area, your needs, and your comfort level. Common techniques may include:"
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
            removeTopPadding
            paperDecoration
            image={treatmentImages.faq}
            imageTitle="Muscle Recovery"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="deep-tissue-massage-services">
          <Services
            leftShapeSrc="/images/shape/service-shape-left.png"
            rightShapeSrc="/images/shape/service-shape-right.png"
            title="Go Beyond Deep Tissue Relief" showFullTreatmentSlider embedded
          />
        </div>
        <div className="deep-tissue-massage-paper-section section__decoration-top section__decoration-bottom bg-sub">
          <ReserveCta
            standardSpacing
            backgroundImage={treatmentImages.cta}
            title="Release Built-Up Muscle Tension During Your Bali Stay"
            text="Long flights, active adventures, desk work, and daily movement around Bali can leave certain muscles feeling tight and restricted. Our Deep Tissue Massage provides focused care through controlled pressure and specialised techniques designed for areas that need deeper attention. Enjoy your treatment at our spa or request a home service at your villa or hotel within selected areas."
            closingText="Reserve your session and let our therapists focus on the areas that need deeper care."
          />
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
