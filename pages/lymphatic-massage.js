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
    price: "IDR 300K",
    name: "1 Hour",
    treatments: [
      "First lymphatic massage",
      "Mild swelling",
      "Recovery after travel",
    ],
  },
  {
    price: "IDR 440K",
    name: "1.5 Hours",
    treatments: [
      "Full-body lymphatic drainage",
      "Fluid retention",
      "Deeper relaxation",
    ],
  },
  {
    price: "IDR 580K",
    name: "2 Hours",
    treatments: [
      "Comprehensive body treatment",
      "Multiple focus areas",
      "Extended recovery session",
    ],
  },
];

const serviceHighlights = [
  { title: "Experienced", text: "Therapists" },
  { title: "Flexible", text: "Booking" },
  { title: "Slimming", text: "Cream" },
  { title: "Outcall", text: "Available" },
];

const faqItems = [
  {
    question: "Is Lymphatic Massage the same as Deep Tissue Massage?",
    answer:
      "No. Deep Tissue Massage works on deeper muscle layers using firm pressure, while Lymphatic Massage uses very light, rhythmic movements that follow the body's lymphatic pathways to encourage natural fluid movement.",
  },
  {
    question: "Can Lymphatic Massage help with swollen legs after travelling?",
    answer:
      "Yes. Long flights, road trips, or extended periods of sitting may contribute to temporary fluid retention. Gentle lymphatic drainage is commonly chosen to help the legs feel lighter and more comfortable afterward.",
  },
  {
    question: "Does Lymphatic Massage remove toxins from the body?",
    answer:
      "The lymphatic system naturally helps transport waste products and excess fluid. Lymphatic Massage supports this normal function by encouraging healthy lymph movement, but it should not be considered a medical detox treatment.",
  },
  {
    question: "Will the massage feel gentle?",
    answer:
      "Yes. The pressure is intentionally light because lymph vessels sit close to the surface of the skin. Strong pressure is not necessary to encourage healthy lymph flow.",
  },
  {
    question: "Can I combine Lymphatic Massage with other spa treatments?",
    answer:
      "Absolutely. Many guests combine it with facials, reflexology, or relaxing body treatments to create a more complete wellness experience.",
  },
  {
    question: "Is lymphatic drainage real?",
    answer:
      "Yes. Lymphatic drainage is a gentle massage technique designed to encourage the movement of lymph fluid through the body. It is commonly used to help manage swelling and support relaxation.",
  },
  {
    question: "Does lymphatic drainage work on the face?",
    answer:
      "Yes. Facial lymphatic drainage uses gentle movements around the face and neck to encourage lymph flow. It may help reduce temporary puffiness and leave the face feeling refreshed.",
  },
  {
    question: "Can lymphatic drainage make you sick?",
    answer:
      "Lymphatic drainage is generally gentle, but some people may feel tired, thirsty, or slightly light-headed afterward. Drinking water and resting after the treatment can help. If you feel unwell or have a medical condition, consult a healthcare professional before having lymphatic drainage.",
  },
];

export default function LymphaticMassage() {
  const treatmentImages = createTreatmentImageSet("lymphaticmassage", durationOptions.length);
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="lymphatic-massage-banner">
          <Banner
            image={treatmentImages.hero}
            subTitle="Restore Your Flow"
            titleSpan="Lymphatic Massage"
            title="in Bali"
          />
        </div>
        <AboutOld
          primaryImage={treatmentImages.intro[0]}
          secondaryImage={treatmentImages.intro[1]}
          subTitle="Hidden Network"
          title={<>What Does the Lymphatic System Actually Do?</>}
          text="The lymphatic system is a network of vessels and lymph nodes that helps move excess fluid, transport immune cells, and remove everyday waste from body tissues. Unlike the circulatory system, it relies on breathing, movement, and muscle activity to keep lymph flowing. When this flow slows, fluid may build up, causing heaviness, puffiness, or mild swelling. Lymphatic Massage uses slow, rhythmic techniques to encourage natural lymph flow and help the body feel lighter and more balanced."
          feature1Title="Gentle Drainage"
          feature1Text="Encourages healthy lymph movement using light, rhythmic strokes."
          feature2Title="Body Balance"
          feature2Text="Supports circulation, fluid movement, and everyday comfort."
        />
        <div className="lymphatic-massage-pricing">
          <Pricing
            images={treatmentImages.pricing}
            subTitle="Find Yours"
            title="Our Duration Options"
            text="Every session follows gentle lymphatic drainage principles, with longer durations allowing our therapists to work more thoroughly across different drainage pathways. Each treatment offers a calm, unhurried experience, whether you're easing fluid retention after travel or simply enjoying deeper relaxation."
            packages={durationOptions}
          />
        </div>
        <div className="lymphatic-massage-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          image={treatmentImages.details[0]}
          subTitle="Body Recovery"
          title={<>When Lymphatic Massage Helps</>}
          text="Lymphatic Massage may be a suitable choice when the body feels heavy, puffy, or less comfortable after changes in routine or periods of limited movement. It uses gentle massage techniques to support the body's natural lymphatic flow and can be incorporated into a wider wellness routine. We may consider this treatment for situations such as:"
          featuresLeft={[
            "Reducing feelings of fluid retention",
            "Supporting natural lymphatic circulation",
            "Easing feelings of puffiness",
          ]}
          featuresRight={[
            "Supporting comfort after travel",
            "Promoting a lighter, more comfortable feeling",
            "Adding gentle care to a regular wellness routine",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          image={treatmentImages.details[1]}
          subTitle="Guided Pathways"
          badgeTopText="Follow the"
          badgeBottomText="Flow"
          title={<>Where Does Lymphatic Drainage Go?</>}
          text="Lymphatic Massage uses gentle, rhythmic movements across specific areas of the body to support natural lymphatic flow. The therapist works through key areas in a gradual sequence, with attention given to regions where lymphatic pathways are commonly found. Depending on the treatment, attention may be given to:"
          featuresLeft={[
            "Neck and collarbone",
            "Underarms",
            "Abdomen",
            "Lower back",
          ]}
          featuresRight={[
            "Upper legs",
            "Calves",
            "Ankles",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          image={treatmentImages.details[2]}
          subTitle="The Experience"
          badgeTopText="Lightness in"
          badgeBottomText="Motion"
          title={<>What to Expect from a Lymphatic Massage</>}
          text="A Lymphatic Massage follows a gentle and gradual approach designed to keep the body comfortable throughout the session. The therapist first discusses your needs before using light, rhythmic movements across selected areas of the body. The session generally follows these steps:"
          featuresLeft={[
            "Brief body consultation",
            "Gentle oil application",
            "Slimming cream massage",
          ]}
          featuresRight={[
            "Slow rhythmic drainage techniques",
            "Treatment along lymph pathways",
            "Relaxing full-body finish",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="lymphatic-massage-faq">
          <Faq
            removeTopPadding
            paperDecoration
            image={treatmentImages.faq}
            imageTitle="Gentle Drainage"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div>
          <ReserveCta
            standardSpacing
            backgroundImage={treatmentImages.cta}
            title="Renew Balance from the Inside Out with Lymphatic Massage"
            text="Lymphatic Massage uses gentle, rhythmic techniques to support the body's natural drainage pathways and encourage a lighter, more balanced feeling. This restorative treatment is ideal after travel, periods of reduced movement, or times when the body feels heavy from fluid retention. Enjoy personalised care from our experienced therapists at our spa or in the comfort of your home, villa, or hotel across Seminyak and nearby areas."
            closingText="Reserve a session designed around your wellness needs and experience gentle relaxation wherever you stay in Bali."
          />
        </div>
        <div className="lymphatic-massage-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Keep Your Wellness Journey Flowing" showFullTreatmentSlider embedded />
        </div>
      </Layout>
      <style jsx global>{`
        .lymphatic-massage-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .lymphatic-massage-banner .banner-two__content .title span {
          display: inline;
        }

        .lymphatic-massage-pricing .pricing-section-three > .container,
        .lymphatic-massage-funfact .funfact-section > .container {
          max-width: 1200px;
        }

        .lymphatic-massage-pricing .pricing-section-three .shape2 {
          bottom: 30px;
        }

        @media (min-width: 992px) {
          .lymphatic-massage-pricing
            .pricing-section-three
            .pricing-block
            .inner-box {
            padding: 20px;
          }

          .lymphatic-massage-pricing
            .pricing-section-three
            .image-column {
            display: flex;
          }

          .lymphatic-massage-pricing
            .pricing-section-three
            .image-column
            .image-box {
            flex: 1;
            position: relative;
            min-height: 0;
          }

          .lymphatic-massage-pricing
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
          .lymphatic-massage-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .lymphatic-massage-services
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
