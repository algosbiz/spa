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
    name: "1 Hour",
    treatments: [
      "Tired feet after sightseeing",
      "First-time guests",
      "Focused foot relief",
    ],
  },
  {
    price: "IDR 239K",
    name: "1.5 Hours",
    treatments: [
      "Feet and lower leg tension",
      "Guests wanting additional massage time",
      "Recovery after active days",
    ],
  },
  {
    price: "IDR 330K",
    name: "2 Hours",
    treatments: [
      "Complete lower body relaxation",
      "Frequent walkers or active travellers",
      "Guests preferring an extended treatment",
    ],
  },
];

const serviceHighlights = [
  { title: "Experienced", text: "Therapists" },
  { title: "Gentle", text: "Pressure" },
  { title: "Natural Oil", text: "Massage" },
  { title: "Home Service", text: "Available" },
];

const faqItems = [
  {
    question: "Is Foot Massage the same as reflexology?",
    answer:
      "Not exactly. Foot Massage focuses on relaxing muscles, relieving soreness, and improving comfort throughout the feet and lower legs. Reflexology traditionally follows pressure points believed to correspond with different parts of the body. Our treatment incorporates selected reflexology-inspired techniques while remaining a relaxing massage experience.",
  },
  {
    question: "Can Foot Massage help after walking all day?",
    answer:
      "Yes. Many guests choose Foot Massage after sightseeing, shopping, or long walks because it helps reduce tiredness and discomfort in the feet, arches, heels, and calves.",
  },
  {
    question: "Does the massage include the lower legs?",
    answer:
      "Yes. Depending on your chosen session, your therapist also massages the ankles and lower legs to help ease muscle tightness connected to tired feet.",
  },
  {
    question: "Is strong pressure used?",
    answer:
      "Not necessarily. Pressure is adjusted according to your comfort. The treatment is intended to be soothing while still providing effective relief for tired feet.",
  },
  {
    question: "Can I book Foot Massage at my hotel or villa?",
    answer:
      "Yes. Home service is available for selected hotels, villas, and accommodations around Seminyak.",
  },
];

export default function FootMassage() {
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="foot-massage-banner">
          <Banner
            subTitle="Light Steps Ahead"
            titleSpan="Foot Massage"
            title="Treatment"
          />
        </div>
        <AboutOld
          subTitle="Every Step Counts"
          title={<>Foot Massage for Daily Comfort and Recovery</>}
          text="Your feet absorb constant pressure throughout the day, whether from walking, standing, travelling, or exercising. Foot Massage focuses on the muscles, joints, and soft tissues of the feet and lower legs using relaxing massage techniques inspired by traditional reflexology. The treatment helps ease built-up tension, improve local circulation, and restore comfort, making it a popular choice after long days exploring Bali or spending hours on your feet."
          feature1Title="Foot Recovery"
          feature1Text="Helps reduce fatigue caused by walking, standing, and everyday activities."
          feature2Title="Reflexology-Inspired"
          feature2Text="Combines relaxing massage with pressure point techniques for added comfort."
        />
        <div className="foot-massage-pricing">
          <Pricing
            subTitle="Session Options"
            title="Choose the Right Duration"
            text="Different session lengths allow our therapist to focus on specific areas or provide more detailed care for both the feet and lower legs. Whether you need a quick refresh or a longer recovery session, each treatment is adjusted to your comfort."
            packages={sessionOptions}
          />
        </div>
        <div className="foot-massage-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          subTitle="Common Situations"
          title={<>When Is a Foot Massage Most Helpful?</>}
          text="Foot Massage is often chosen when the feet feel tired from daily movement or extended periods of activity. Many guests book this treatment after travelling, walking around Bali, or spending long hours standing, giving their feet dedicated care that full-body massages may not always provide."
          featuresLeft={[
            "Relieves tired feet after sightseeing",
            "Comforts sore arches and heels",
            "Supports recovery after long flights",
          ]}
          featuresRight={[
            "Refreshes feet after standing for hours",
            "Suitable after light physical activities",
            "Provides dedicated care for overworked feet",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          subTitle="Areas of Focus"
          title={<>Where Does Foot Massage Work?</>}
          text="Rather than treating the feet as one single area, the massage focuses on different structures that commonly hold tension. By addressing each part individually, the treatment creates a more balanced feeling throughout the feet and lower legs."
          featuresLeft={[
            "Soles that absorb daily impact",
            "Arches supporting body weight",
            "Heels affected by prolonged standing",
          ]}
          featuresRight={[
            "Ankles that assist movement",
            "Calf muscles connected to foot tension",
            "Toes and surrounding soft tissues",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          subTitle="Massage Approach"
          title={<>How Our Foot Massage Is Performed</>}
          text="Each session combines smooth massage strokes, circular movements, warm natural oils, and reflexology-inspired pressure techniques to relieve tension throughout the feet and lower legs. Special attention is given to the arches, heels, and areas that commonly become sore after walking or standing. The pressure remains comfortable throughout the treatment and can be adjusted to suit your preferences."
          featuresLeft={[
            "Warm oil for smooth massage movements",
            "Gentle circular techniques",
            "Pressure applied to key foot zones",
          ]}
          featuresRight={[
            "Care for arches and heels",
            "Lower leg massage for added relief",
            "Comfort adjusted throughout the session",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="foot-massage-faq">
          <Faq
            imageTitle="Foot Recovery"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="pt-100 pb-100">
          <ReserveCta
            title="Give Your Feet the Attention They Rarely Receive"
            text="Your feet support every walk, every adventure, and every journey, yet they're often the last part of the body we think to care for. A dedicated Foot Massage helps ease accumulated tension, restore everyday comfort, and leave you feeling lighter with every step. Choose an appointment at our spa or enjoy the same professional treatment through our home service in selected villas and hotels around Seminyak."
            closingText="Reserve your session and step back into your day feeling lighter."
          />
        </div>
        <div className="foot-massage-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
        </div>
      </Layout>
      <style jsx global>{`
        .foot-massage-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .foot-massage-banner .banner-two__content .title span {
          display: inline;
        }

        .foot-massage-pricing .pricing-section-three > .container,
        .foot-massage-funfact .funfact-section > .container {
          max-width: 1200px;
        }

        .foot-massage-pricing .pricing-section-three .shape2 {
          bottom: 30px;
        }

        @media (min-width: 992px) {
          .foot-massage-pricing
            .pricing-section-three
            .pricing-block
            .inner-box {
            padding: 20px;
          }

          .foot-massage-pricing
            .pricing-section-three
            .image-column {
            display: flex;
          }

          .foot-massage-pricing
            .pricing-section-three
            .image-column
            .image-box {
            flex: 1;
            position: relative;
            min-height: 0;
          }

          .foot-massage-pricing
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
          .foot-massage-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .foot-massage-services
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
