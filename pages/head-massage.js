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
  { title: "Outcall", text: "Available" },
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
  {
    question: "Does head massage help hair growth?",
    answer:
      "Head massage may support scalp circulation and relaxation, but there is limited evidence that it directly promotes hair growth. It can still be a soothing addition to your hair and scalp care routine.",
  },
  {
    question: "Why does a head massage feel so good?",
    answer:
      "A head massage can feel good because it helps relax the scalp, neck, and surrounding muscles. The gentle pressure and rhythmic movements can also help reduce tension and create a calming, relaxing feeling.",
  },
];

const PAGE_SEO_ROUTE = "/seminyak/head-massage";
const PAGE_SEO = seoFor(PAGE_SEO_ROUTE);

export default function HeadMassage() {
  const treatmentImages = createTreatmentImageSet("headmassage", durationOptions.length);
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two" headTitle={PAGE_SEO.title} metaDescription={PAGE_SEO.description} canonicalPath={PAGE_SEO_ROUTE}>
        <div className="head-massage-banner">
          <Banner
            image={treatmentImages.hero}
            subTitle="Stress-Free Therapy"
            titleSpan="Head Massage"
            title="Seminyak"
          />
        </div>
        <AboutOld
          leftShapeSrc="/images/shape/about-two-left.png"
          rightShapeSrc="/images/shape/about-two-right.png"
          primaryImage={treatmentImages.intro[0]}
          secondaryImage={treatmentImages.intro[1]}
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
            leftShapeSrc="/images/shape/package-four-shape-left.png"
            images={treatmentImages.pricing}
            subTitle="Find Yours"
            title="Our Duration Options"
            text="Whether you need a short break between activities or a longer session to fully unwind, our Head Massage is available in several durations. Each treatment can be adjusted according to your preferred pressure and the areas that need extra attention."
            packages={durationOptions}
          />
        </div>
        <div className="head-massage-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial rightShapeSrc={null} />
        <About
          leftShapeSrc={null}
          rightShapeSrc="/images/shape/about-right-shape.png"
          image={treatmentImages.details[0]}
          subTitle="Daily Relief"
          title={<>How Can a Head Massage Help?</>}
          text="A Head Massage is a simple way to give focused attention to the head, scalp, neck, and surrounding areas. It can be a comfortable choice when you want to relax after a demanding day or ease the physical strain that can build up through work and travel. You may choose a Head Massage for reasons such as:"
          featuresLeft={[
            "Easing tension around the head and neck",
            "Supporting scalp comfort",
            "Encouraging relaxation",
          ]}
          featuresRight={[
            "Helping with feelings of mental fatigue",
            "Providing relief after travel or long workdays",
            "Adding a relaxing element to other spa treatments",
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
          badgeTopText="Relief Around"
          badgeBottomText="the Head"
          title={<>Which Areas Receive the Most Attention?</>}
          text="A Head Massage focuses on more than just the scalp. The therapist also works on nearby areas that can become tense during long workdays, travel, or daily activities. Depending on your needs, particular attention may be given to:"
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
          rightShapeSrc="/images/shape/banner-three-shape2.png"
          image={treatmentImages.details[2]}
          subTitle="Massage Techniques"
          badgeTopText="Rhythm of"
          badgeBottomText="Release"
          title={<>What to Expect During a Head Massage Session</>}
          text="A Head Massage follows a gentle progression from the scalp to the surrounding areas, with the pressure adjusted throughout the treatment to keep you comfortable. We use different movements and techniques to work through areas that may feel tense, creating a calm and unhurried experience. Our typical session involves:"
          featuresLeft={[
            "Brief consultation before treatment",
            "Rhythmic movements across the scalp",
            "Circular pressure around the temples",
          ]}
          featuresRight={[
            "Massage of the neck and upper shoulders",
            "Pressure adjusted to your comfort level",
            "Gentle finishing movements to end the session",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="head-massage-faq">
          <Faq
            removeTopPadding
            paperDecoration
            image={treatmentImages.faq}
            imageTitle="Scalp Care"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="head-massage-services">
          <Services
            leftShapeSrc="/images/shape/service-shape-left.png"
            rightShapeSrc="/images/shape/service-shape-right.png"
            title="Relax From Head to Toe" showFullTreatmentSlider embedded
          />
        </div>
        <div className="head-massage-paper-section section__decoration-top section__decoration-bottom bg-sub">
          <ReserveCta
            standardSpacing
            backgroundImage={treatmentImages.cta}
            title="Refresh Your Mind While Caring for Your Body"
            text="Busy travel schedules, long hours in front of a screen, or simply keeping up with daily activities can leave tension concentrated around the head and neck. A professional Head Massage offers a simple way to slow down, release built-up tightness, and enjoy a greater sense of comfort without committing to a full-body treatment. Visit our spa or enjoy the same relaxing experience through our home service at selected villas and hotels around Seminyak."
            closingText="Reserve your Head Massage session and give your upper body time to unwind."
          />
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
