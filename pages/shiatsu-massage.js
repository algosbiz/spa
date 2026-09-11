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
  { title: "Outcall", text: "Available" },
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
  {
    question: "Is shiatsu massage painful?",
    answer:
      "Shiatsu massage can feel firm or intense when pressure is applied to tense areas, but it should remain comfortable. Our therapist can adjust the pressure based on your preference.",
  },
  {
    question: "What is shiatsu massage good for?",
    answer:
      "Shiatsu massage may help relieve muscle tension, reduce stress, and promote relaxation. It can also help improve flexibility and overall body comfort.",
  },
  {
    question: "When should you not do shiatsu massage?",
    answer:
      "Shiatsu massage may not be suitable if you have certain medical conditions, injuries, or are recovering from surgery. If you are unsure whether it is right for you, consult a healthcare professional before your session.",
  },
];

export default function ShiatsuMassage() {
  const treatmentImages = createTreatmentImageSet("shiatsumassage", durationOptions.length);
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="shiatsu-massage-banner">
          <Banner
            image={treatmentImages.hero}
            subTitle="Japanese Wellness"
            titleSpan="Traditional Shiatsu"
            title="Massage"
          />
        </div>
        <AboutOld
          primaryImage={treatmentImages.intro[0]}
          secondaryImage={treatmentImages.intro[1]}
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
            images={treatmentImages.pricing}
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
          image={treatmentImages.details[0]}
          subTitle="The Reason"
          title={<>Why Do People Choose Shiatsu Massage?</>}
          text="Shiatsu offers a different approach to massage by using focused pressure rather than continuous oil-based strokes. Its structured technique makes it a popular choice for guests who want focused bodywork while also enjoying a traditional Japanese wellness experience. People may choose Shiatsu for reasons such as:"
          featuresLeft={[
            "Easing feelings of muscle tension",
            "Supporting flexibility and mobility",
            "Encouraging more comfortable body movement",
          ]}
          featuresRight={[
            "Promoting physical relaxation",
            "Suitable after work, travel, or exercise",
            "Enjoying a traditional Japanese massage approach",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          image={treatmentImages.details[1]}
          subTitle="Treatment Focus"
          badgeTopText="Guided by"
          badgeBottomText="Pressure"
          title={<>Which Areas Does Shiatsu Commonly Target?</>}
          text="Shiatsu works across different parts of the body using focused pressure and rhythmic techniques. We can adjust the focus based on where you tend to experience tension or physical fatigue, giving particular attention to areas such as:"
          featuresLeft={[
            "Neck and shoulders",
            "Upper and lower back",
            "Arms and hands",
          ]}
          featuresRight={[
            "Hips and legs",
            "Feet and lower limbs",
            "Pressure points across the body",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          image={treatmentImages.details[2]}
          subTitle="The Method"
          badgeTopText="The Shiatsu"
          badgeBottomText="Rhythm"
          title={<>How Does Our Shiatsu Massage Work?</>}
          text="A Shiatsu Massage uses focused pressure and gentle movement rather than long, flowing massage strokes. The therapist works through selected areas at a steady pace, adapting the intensity to keep the treatment comfortable throughout. The session may involve techniques such as:"
          featuresLeft={[
            "Finger pressure techniques",
            "Thumb pressure on selected points",
            "Palm compression",
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
            removeTopPadding
            paperDecoration
            image={treatmentImages.faq}
            imageTitle="Shiatsu Massage"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div>
          <ReserveCta
            standardSpacing
            backgroundImage={treatmentImages.cta}
            title="Experience the Traditional Japanese Approach to Body Wellness"
            text="Shiatsu offers a different massage experience from conventional oil massage by combining pressure point therapy with mindful body movement. Whether you're recovering after travel, easing everyday muscle tension, or simply curious about traditional Japanese wellness, our therapists tailor every session to your comfort and needs."
            closingText="Restore balance through one of Japan's most recognised therapeutic massage techniques."
          />
        </div>
        <div className="shiatsu-massage-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Discover More Than Shiatsu Massage" showFullTreatmentSlider embedded />
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
