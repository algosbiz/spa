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
    price: "IDR 159K",
    name: "1 Hour",
    treatments: [
      "First-time guests",
      "Head and neck relaxation",
      "Quick stress relief",
    ],
  },
  {
    price: "IDR 239K",
    name: "1.5 Hours",
    treatments: [
      "Extended scalp massage",
      "Head, neck, and shoulders",
      "Guests seeking deeper relaxation",
    ],
  },
  {
    price: "IDR 330K",
    name: "2 Hours",
    treatments: [
      "Complete relaxation",
      "Longer wellness sessions",
      "Full upper-body comfort",
    ],
  },
];

const serviceHighlights = [
  { title: "Scalp", text: "Care" },
  { title: "Neck", text: "Relaxation" },
  { title: "Adjustable", text: "Pressure" },
  { title: "Home Service", text: "Available" },
];

const faqItems = [
  {
    question: "Can a Head Massage help with stress?",
    answer:
      "Many guests choose Head Massage because the slow, repetitive techniques promote relaxation and help reduce feelings of physical and mental tension.",
  },
  {
    question: "Is oil always used during the treatment?",
    answer:
      "Not necessarily. Depending on your preference and the treatment style, the massage can be performed with or without massage oil.",
  },
  {
    question: "Can Head Massage help after long hours at a computer?",
    answer:
      "Yes. Prolonged screen time often creates tension around the neck, shoulders, and scalp. Head Massage focuses on these areas to improve overall comfort.",
  },
  {
    question: "Is Head Massage suitable before sleeping?",
    answer:
      "Many guests enjoy receiving a Head Massage in the evening because the relaxing techniques help the body unwind before rest.",
  },
  {
    question: "Can I receive Head Massage at my hotel or villa?",
    answer:
      "Yes. Professional home service is available throughout Seminyak and nearby areas for guests who prefer treatment in their accommodation.",
  },
];

export default function HeadMassage() {
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="head-massage-banner">
          <Banner
            subTitle="Stress-Free Therapy"
            titleSpan="Head Massage"
            title="Treatment"
          />
        </div>
        <AboutOld
          subTitle="Scalp & Head Care"
          title={<>What Is a Head Massage?</>}
          text="Head Massage is a wellness treatment that focuses on the scalp, temples, neck, and upper shoulders using slow, rhythmic massage techniques. While commonly chosen for relaxation, it also helps ease muscle tightness around the head and neck caused by prolonged sitting, screen time, travelling, or everyday stress."
          feature1Title="Scalp Relaxation"
          feature1Text="Gentle movements help reduce tightness around the scalp and temples."
          feature2Title="Neck Comfort"
          feature2Text="Supports relaxation in the upper neck and shoulder muscles."
        />
        <div className="head-massage-pricing">
          <Pricing
            subTitle="Find Yours"
            title="Our Duration Options"
            text="Whether you need a short break between activities or a longer session to fully unwind, our Head Massage is available in several durations. Each treatment can be adjusted according to your preferred pressure and the areas that need extra attention."
            packages={durationOptions}
          />
        </div>
        <div className="head-massage-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          subTitle="Daily Relief"
          title={<>How Can a Head Massage Help?</>}
          text="Although Head Massage is often associated with relaxation, many guests also choose it to reduce physical tension around the scalp and neck after work, travel, or mentally demanding days. Gentle massage techniques encourage the body to slow down while creating a lighter, more comfortable feeling throughout the upper body."
          featuresLeft={[
            "Helps ease head and neck tension",
            "Supports scalp comfort",
            "Encourages relaxation",
          ]}
          featuresRight={[
            "May reduce feelings of mental fatigue",
            "Suitable after travel or long workdays",
            "Complements other spa treatments",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          subTitle="Treatment Focus"
          title={<>Which Areas Receive the Most Attention?</>}
          text="Rather than concentrating on the scalp alone, a Head Massage also includes nearby muscles that commonly contribute to feelings of tightness. Treating these connected areas creates a more balanced and comfortable experience."
          featuresLeft={[
            "Scalp",
            "Temples",
            "Forehead",
          ]}
          featuresRight={[
            "Neck",
            "Upper shoulders",
            "Jaw area when needed",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          subTitle="Massage Techniques"
          title={<>What to Expect During a Head Massage Session</>}
          text="Our therapist begins with gentle movements across the scalp before gradually working through the temples, neck, and upper shoulders. Different massage techniques are combined throughout the session, including circular movements, rhythmic pressure, kneading, and slow strokes that help release built-up tension while maintaining a calm, comfortable pace."
          featuresLeft={[
            "Brief consultation before treatment",
            "Scalp massage using rhythmic movements",
            "Circular pressure around the temples",
          ]}
          featuresRight={[
            "Neck and shoulder massage",
            "Pressure adjusted throughout the session",
            "Relaxing finish for overall comfort",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="head-massage-faq">
          <Faq
            imageTitle="Scalp Care"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="pt-100 pb-100">
          <ReserveCta
            title="Refresh Your Mind While Caring for Your Body"
            text="Busy travel schedules, long hours in front of a screen, or simply keeping up with daily activities can leave tension concentrated around the head and neck. A professional Head Massage offers a simple way to slow down, release built-up tightness, and enjoy a greater sense of comfort without committing to a full-body treatment. Visit our spa or enjoy the same relaxing experience through our home service at selected villas and hotels around Seminyak."
            closingText="Reserve your Head Massage session and give your upper body time to unwind."
          />
        </div>
        <div className="head-massage-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
        </div>
      </Layout>
      <style jsx global>{`
        .head-massage-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .head-massage-banner .banner-two__content .title span {
          display: inline;
        }

        .head-massage-pricing .pricing-section-three > .container,
        .head-massage-funfact .funfact-section > .container {
          max-width: 1200px;
        }

        .head-massage-pricing .pricing-section-three .shape2 {
          bottom: 30px;
        }

        @media (min-width: 992px) {
          .head-massage-pricing
            .pricing-section-three
            .pricing-block
            .inner-box {
            padding: 20px;
          }

          .head-massage-pricing
            .pricing-section-three
            .image-column {
            display: flex;
          }

          .head-massage-pricing
            .pricing-section-three
            .image-column
            .image-box {
            flex: 1;
            position: relative;
            min-height: 0;
          }

          .head-massage-pricing
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
          .head-massage-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .head-massage-services
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
