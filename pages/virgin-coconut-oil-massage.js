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
    price: "IDR 300K",
    name: "1 Hour",
    treatments: [
      "First-time guests",
      "Quick relaxation sessions",
      "Daily skin nourishment",
    ],
  },
  {
    price: "IDR 440K",
    name: "1.5 Hours",
    treatments: [
      "Deeper relaxation",
      "Extra attention to tired muscles",
      "Extended skin hydration",
    ],
  },
  {
    price: "IDR 580K",
    name: "2 Hours",
    treatments: [
      "A complete wellness experience",
      "Guests seeking maximum relaxation",
      "Longer full-body massage sessions",
    ],
  },
];

const serviceHighlights = [
  { title: "Pure", text: "Coconut Oil" },
  { title: "Flexible", text: "Booking" },
  { title: "Adjustable", text: "Pressure" },
  { title: "Home Service", text: "Available" },
];

const faqItems = [
  {
    question: "What makes virgin cold-pressed coconut oil different from regular massage oil?",
    answer:
      "Virgin cold-pressed coconut oil is extracted without high heat, helping preserve its natural composition. Many people prefer it because it feels lightweight on the skin and provides natural moisture during the massage.",
  },
  {
    question: "Is this massage suitable for sensitive skin?",
    answer:
      "For most people, yes. Virgin coconut oil is generally well tolerated, but if you have allergies to coconut or specific skin concerns, please let us know before your appointment.",
  },
  {
    question: "Will the massage leave my skin feeling oily?",
    answer:
      "A light layer of oil may remain immediately after the session, but much of the oil is absorbed during the massage, leaving the skin feeling soft and comfortable.",
  },
  {
    question: "Can I book this massage as a home service?",
    answer:
      "Yes. This treatment is available at our spa as well as through our villa and hotel home service throughout Seminyak and nearby areas.",
  },
  {
    question: "Is this massage only for relaxation?",
    answer:
      "Relaxation is one of its main benefits, but many guests also choose this treatment because the virgin coconut oil helps keep the skin feeling soft, smooth, and moisturised.",
  },
];

export default function VirginCoconutOilMassage() {
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="coconut-oil-massage-banner">
          <Banner
            subTitle="Natural Nourishment"
            titleSpan="Virgin Cold Press"
            title="Coconut Oil Massage"
          />
        </div>
        <AboutOld
          subTitle="Pure Coconut Care"
          title={<>The Benefits of Virgin Coconut Oil Massage</>}
          text="Virgin cold-pressed coconut oil is made from fresh coconuts without high heat, helping preserve its natural properties. In massage therapy, it is valued for its smooth texture, skin-conditioning benefits, and suitability for most skin types. Combined with relaxing massage techniques, it creates a treatment that supports both muscle relaxation and skin nourishment."
          feature1Title="Cold-Pressed Oil"
          feature1Text="Retains the natural qualities of fresh coconut through minimal processing."
          feature2Title="Skin-Friendly Formula"
          feature2Text="Lightweight, nourishing, and suitable for most skin types."
        />
        <div className="coconut-oil-massage-pricing">
          <Pricing
            subTitle="Choose Your Session"
            title="Session Duration & Pricing"
            text="Our Virgin Cold Press Coconut Oil Massage is available in multiple session durations, making it easy to choose the treatment that best fits your schedule. Each session uses pure cold-pressed coconut oil to support skin hydration while enhancing the comfort of the massage."
            packages={sessionOptions}
          />
        </div>
        <div className="coconut-oil-massage-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          subTitle="Why Coconut Oil?"
          title={<>More Than Just Massage Oil</>}
          text="Virgin coconut oil has long been used in tropical wellness traditions because of its natural moisturising properties and smooth texture. While the massage techniques help relax the body, the oil provides an added layer of skin care that many guests appreciate, especially after spending time in Bali's sun and tropical climate."
          featuresLeft={[
            "Helps soften dry skin",
            "Leaves the skin feeling moisturised",
            "Provides smooth massage movements",
          ]}
          featuresRight={[
            "Comfortable for most skin types",
            "Naturally derived from fresh coconuts",
            "Popular after beach and outdoor activities",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          subTitle="Ideal For"
          title={<>Who Usually Chooses This Massage?</>}
          text="This treatment is often selected by guests who want more than muscle relaxation. The nourishing properties of virgin coconut oil make it especially popular among travellers looking to restore skin comfort while enjoying a calming massage experience."
          featuresLeft={[
            "Guests with dry-feeling skin",
            "Visitors after sun exposure",
            "Travellers seeking gentle relaxation",
          ]}
          featuresRight={[
            "People who enjoy natural wellness products",
            "Anyone who prefers plant-based massage oil",
            "Guests looking for hydration and relaxation together",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          subTitle="Treatment Process"
          title={<>Why Virgin Coconut Oil Works So Well for Massage</>}
          text="Virgin cold-pressed coconut oil stays smooth throughout the treatment, allowing massage techniques to flow naturally without frequent reapplication. Its lightweight consistency helps the therapist perform long, continuous strokes while leaving the skin feeling soft, comfortable, and naturally moisturised after the session."
          featuresLeft={[
            "Smooth application from start to finish",
            "Supports long, flowing massage strokes",
            "Helps reduce friction on the skin",
          ]}
          featuresRight={[
            "Naturally moisturises during treatment",
            "Comfortable for extended sessions",
            "Spa and home service available",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="coconut-oil-massage-faq">
          <Faq
            imageTitle="Pure Coconut Care"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="pt-100 pb-100">
          <ReserveCta
            title="Experience the Natural Comfort of Virgin Coconut Oil"
            text="Sometimes the simplest ingredients create the most relaxing experiences. Our Virgin Cold Press Coconut Oil Massage combines traditional massage techniques with pure coconut oil to leave both your body and skin feeling refreshed. Enjoy your treatment at our spa or through home service in your villa or hotel, with appointments available throughout Seminyak and nearby areas."
            closingText="Let yourself unwind with one of Bali's most naturally nourishing massage experiences."
          />
        </div>
        <div className="coconut-oil-massage-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
        </div>
      </Layout>
      <style jsx global>{`
        .coconut-oil-massage-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .coconut-oil-massage-banner .banner-two__content .title span {
          display: inline;
        }

        .coconut-oil-massage-pricing .pricing-section-three > .container,
        .coconut-oil-massage-funfact .funfact-section > .container {
          max-width: 1200px;
        }

        .coconut-oil-massage-pricing .pricing-section-three .shape2 {
          bottom: 70px;
        }

        @media (min-width: 992px) {
          .coconut-oil-massage-pricing
            .pricing-section-three
            .pricing-block
            .inner-box {
            padding: 20px;
          }

          .coconut-oil-massage-pricing
            .pricing-section-three
            .image-column {
            display: flex;
          }

          .coconut-oil-massage-pricing
            .pricing-section-three
            .image-column
            .image-box {
            flex: 1;
            position: relative;
            min-height: 0;
          }

          .coconut-oil-massage-pricing
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
          .coconut-oil-massage-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .coconut-oil-massage-services
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
