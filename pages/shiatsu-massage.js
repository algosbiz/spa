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

const durationOptions = [
  {
    price: "IDR 119K",
    name: "30 Minutes",
    treatments: [
      "Neck and shoulder tension",
      "Quick wellness break",
      "First-time Shiatsu experience",
    ],
  },
  {
    price: "IDR 219K",
    name: "1 Hour",
    treatments: [
      "Full body treatment",
      "Muscle stiffness",
      "General relaxation and flexibility",
    ],
  },
  {
    price: "IDR 329K",
    name: "1.5 Hours",
    treatments: [
      "Multiple tension areas",
      "Guests preferring slower treatment",
      "More detailed pressure point work",
    ],
  },
];

const serviceHighlights = [
  { title: "Traditional", text: "Japanese Technique" },
  { title: "Pressure", text: "Point Therapy" },
  { title: "Gentle", text: "Stretching" },
  { title: "Home Service", text: "Available" },
];

const faqItems = [
  {
    question: "Is Shiatsu Massage performed with oil?",
    answer:
      "Traditional Shiatsu is generally performed without massage oil. The treatment focuses on pressure point techniques and body movement rather than long gliding strokes.",
  },
  {
    question: "Is Shiatsu suitable for beginners?",
    answer:
      "Yes. Pressure is always adjusted according to your comfort, making Shiatsu suitable for both first-time guests and experienced massage enthusiasts.",
  },
  {
    question: "What is the difference between Shiatsu and Deep Tissue Massage?",
    answer:
      "Shiatsu focuses on pressure points and gentle stretching using fingers and palms, while Deep Tissue Massage works deeper into muscles using slow pressure and muscle-specific techniques.",
  },
  {
    question: "Can Shiatsu help reduce stress?",
    answer:
      "Many guests choose Shiatsu because the slow rhythm and controlled pressure encourage both physical relaxation and a calmer state of mind.",
  },
  {
    question: "Can Shiatsu be combined with other spa treatments?",
    answer:
      "Yes. Shiatsu is often combined with body treatments or other wellness services as part of a longer spa experience.",
  },
];

export default function ShiatsuMassage() {
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="shiatsu-massage-banner">
          <Banner
            subTitle="Japanese Wellness"
            titleSpan="Traditional Shiatsu"
            title="Massage"
          />
        </div>
        <AboutOld
          subTitle="Understanding Shiatsu"
          title={<>What Makes Shiatsu Different from Other Massage Techniques?</>}
          text="Shiatsu is a traditional Japanese bodywork technique that uses finger, thumb, and palm pressure on specific points across the body rather than long oil massage strokes. Often combined with gentle stretching, Shiatsu focuses on relieving muscle tension, encouraging natural body movement, and promoting overall physical balance."
          feature1Title="Pressure Point Therapy"
          feature1Text="Applies focused pressure to specific areas using fingers, thumbs, and palms."
          feature2Title="Gentle Body Stretching"
          feature2Text="Supports flexibility while helping muscles release built-up tension."
        />
        <div className="shiatsu-massage-pricing">
          <Pricing
            subTitle="Choose Yours"
            title="Our Duration Options"
            text="Our Shiatsu Massage is available in different durations, allowing our therapists to tailor each session to your body's condition and areas of tension."
            packages={durationOptions}
          />
        </div>
        <div className="shiatsu-massage-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          subTitle="The Reason"
          title={<>Why Do People Choose Shiatsu Massage?</>}
          text="Shiatsu is often chosen by guests who prefer a structured massage technique that focuses on pressure points instead of continuous oil massage. It is suitable for people experiencing muscular tightness, physical fatigue, or those looking for a traditional Japanese wellness approach."
          featuresLeft={[
            "Helps ease muscle tension",
            "Supports better flexibility",
            "Encourages comfortable body movement",
          ]}
          featuresRight={[
            "Promotes physical relaxation",
            "Suitable after work, travel, or exercise",
            "Performed with controlled pressure throughout the session",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          subTitle="Treatment Focus"
          title={<>Which Areas Does Shiatsu Commonly Target?</>}
          text="Rather than concentrating on only one muscle group, Shiatsu follows pressure points throughout the body while paying extra attention to areas where tension commonly develops from daily activities and posture."
          featuresLeft={[
            "Neck and shoulders",
            "Upper and lower back",
            "Arms and hands",
          ]}
          featuresRight={[
            "Hips and legs",
            "Feet and lower limbs",
            "Whole body pressure point pathways",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          subTitle="The Method"
          title={<>How Is a Shiatsu Massage Performed?</>}
          text="Shiatsu is performed using steady finger, thumb, and palm pressure combined with gentle stretching techniques. Instead of long gliding movements, our therapists work gradually across specific pressure points while adjusting intensity according to your body's response. The treatment follows a calm rhythm to encourage comfort throughout the entire session."
          featuresLeft={[
            "Finger pressure techniques",
            "Thumb pressure on key points",
            "Palm compression methods",
          ]}
          featuresRight={[
            "Gentle assisted stretching",
            "Controlled treatment pace",
            "Pressure adjusted to your comfort",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="shiatsu-massage-faq">
          <Faq
            imageTitle="Shiatsu Massage"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="pt-100 pb-100">
          <ReserveCta
            title="Experience the Traditional Japanese Approach to Body Wellness"
            text="Shiatsu offers a different massage experience from conventional oil massage by combining pressure point therapy with mindful body movement. Whether you're recovering after travel, easing everyday muscle tension, or simply curious about traditional Japanese wellness, our therapists tailor every session to your comfort and needs."
            closingText="Restore balance through one of Japan's most recognised therapeutic massage techniques."
          />
        </div>
        <div className="shiatsu-massage-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
        </div>
      </Layout>
      <style jsx global>{`
        .shiatsu-massage-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .shiatsu-massage-banner .banner-two__content .title span {
          display: inline;
        }

        .shiatsu-massage-pricing .pricing-section-three > .container,
        .shiatsu-massage-funfact .funfact-section > .container {
          max-width: 1200px;
        }

        .shiatsu-massage-pricing .pricing-section-three .shape2 {
          bottom: 30px;
        }

        @media (min-width: 992px) {
          .shiatsu-massage-pricing
            .pricing-section-three
            .pricing-block
            .inner-box {
            padding: 20px;
          }

          .shiatsu-massage-pricing
            .pricing-section-three
            .image-column {
            display: flex;
          }

          .shiatsu-massage-pricing
            .pricing-section-three
            .image-column
            .image-box {
            flex: 1;
            position: relative;
            min-height: 0;
          }

          .shiatsu-massage-pricing
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
          .shiatsu-massage-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .shiatsu-massage-services
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
