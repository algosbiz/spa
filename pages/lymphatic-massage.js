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
  { title: "Home Service", text: "Available" },
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
];

export default function LymphaticMassage() {
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="lymphatic-massage-banner">
          <Banner
            subTitle="Restore Your Flow"
            titleSpan="Lymphatic Massage"
            title="in Bali"
          />
        </div>
        <AboutOld
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
          subTitle="Body Recovery"
          title={<>When Lymphatic Massage Helps</>}
          text="Fluid retention can occur after travel, prolonged sitting, intense activity, or limited movement, often creating a feeling of heaviness in the body. Lymphatic Massage supports natural drainage pathways to encourage fluid movement and promote a lighter, more comfortable feeling."
          featuresLeft={[
            "Helps reduce fluid retention",
            "Supports natural lymph circulation",
            "May ease feelings of puffiness",
          ]}
          featuresRight={[
            "Encourages post-travel recovery",
            "Promotes lighter body movement",
            "Complements overall wellness routines",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          subTitle="Guided Pathways"
          title={<>Where Does Lymphatic Massage Work on the Body?</>}
          text="Instead of concentrating only on muscles, Lymphatic Massage follows the body's natural drainage routes. Gentle movements begin around the main lymph node regions before continuing across areas where fluid commonly collects, allowing the treatment to work with the body's own circulation rather than against it."
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
          subTitle="The Experience"
          title={<>What to Expect from a Lymphatic Massage</>}
          text="Our treatment begins with a brief consultation to identify areas where swelling, fluid retention, or heaviness are most noticeable. Using natural massage oil together with a slimming cream, our therapist performs slow, wave-like movements that follow the direction of lymph flow instead of applying deep pressure into the muscles."
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
            imageTitle="Gentle Drainage"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="pt-100 pb-100">
          <ReserveCta
            title="Renew Balance from the Inside Out with Lymphatic Massage"
            text="Lymphatic Massage uses gentle, rhythmic techniques to support the body's natural drainage pathways and encourage a lighter, more balanced feeling. This restorative treatment is ideal after travel, periods of reduced movement, or times when the body feels heavy from fluid retention. Enjoy personalised care from our experienced therapists at our spa or in the comfort of your home, villa, or hotel across Seminyak and nearby areas."
            closingText="Reserve a session designed around your wellness needs and experience gentle relaxation wherever you stay in Bali."
          />
        </div>
        <div className="lymphatic-massage-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
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
