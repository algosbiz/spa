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

const packageOptions = [
  {
    price: "IDR 439K",
    name: "Package A",
    treatments: ["30 Mins Body Scrub", "1 Hr Balinese Massage", "1 Hr Bali Moon Facial"],
  },
  {
    price: "IDR 449K",
    name: "Package B",
    treatments: ["30 Mins Body Scrub", "1.5 Hr Hot Stone", "30 Mins Head Massage"],
  },
  {
    price: "IDR 539K",
    name: "Package C",
    treatments: ["30 Mins Body Scrub", "1 Hr Thai Massage", "1 Hr Cream Bath"],
  },
  {
    price: "IDR 549K",
    name: "Package D",
    treatments: ["30 Mins Body Scrub", "1 Hr Warm Candle", "1 Hr Bali Moon Facial"],
  },
];

const serviceHighlights = [
  { title: "Natural", text: "Ingredients" },
  { title: "Multiple", text: "Scrub Choices" },
  { title: "Customized", text: "Packages" },
  { title: "Home Service", text: "Available" },
];

const faqItems = [
  {
    question: "What happens during a body scrub massage?",
    answer:
      "During a body scrub massage, a therapist applies an exfoliating scrub to the body using gentle circular motions to remove dead skin cells and stimulate circulation. After the scrub is rinsed off, the treatment may be followed by a moisturizing lotion, body oil application, or a relaxing massage to leave the skin feeling smooth, refreshed, and hydrated.",
  },
  {
    question: "What are the benefits of a full body scrub?",
    answer:
      "A full body scrub helps remove dead skin cells from the surface of the skin, leaving it smoother, softer, and more refreshed. Regular exfoliation can improve skin texture, promote a brighter appearance, and help moisturizers absorb more effectively after treatment. Additional benefits may include improved circulation, reduced rough or dry skin, and a cleaner, healthier-looking complexion.",
  },
  {
    question: "How often should I get a body scrub treatment?",
    answer:
      "Most guests choose body scrubs every one to two weeks to help maintain smooth skin and support natural skin renewal cycles.",
  },
  {
    question: "Will the scrub feel rough on my skin?",
    answer:
      "No. We use fine natural exfoliants and controlled pressure to keep the treatment comfortable while still providing effective exfoliation.",
  },
  {
    question: "Is body scrub suitable for dry skin?",
    answer:
      "Yes. Removing dead surface buildup often allows moisturizers and body oils to absorb more effectively, helping the skin feel softer and more hydrated afterward.",
  },
  {
    question: "Can I get a body scrub after spending time in the sun?",
    answer:
      "Yes, provided the skin is not sunburned or overly sensitive. Many guests book body scrubs after beach days or outdoor activities to refresh the skin and remove buildup.",
  },
  {
    question: "Can body scrubs help with body acne or clogged pores?",
    answer:
      "Regular exfoliation may help reduce the accumulation of dead skin cells and impurities that can contribute to clogged pores. While it is not a medical treatment for acne, many guests find their skin feels cleaner and smoother after regular treatments.",
  },
];

export default function BodyScrub() {
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="body-scrub-banner">
          <Banner
            subTitle="Skin Renewal"
            titleSpan="Body Scrub"
            title="Treatment"
          />
        </div>
        <AboutOld
          subTitle="Natural Exfoliation"
          title={<>Why Do So Many Guests Add a Body Scrub to Their Bali Stay?</>}
          text="Body scrub is an exfoliating treatment to remove dead skin cells, lift daily buildup, and help restore smoother skin texture. In Bali, sun exposure, saltwater, humidity, and outdoor activities can leave the skin feeling dry or dull over time. Our therapists use natural exfoliants inspired by traditional Balinese lulur rituals to gently refresh the skin while creating a relaxing treatment experience."
          feature1Title="Natural Ingredients"
          feature1Text="Available in chocolate, coconut, strawberry, bengkoang, jasmine, green tea, and Spa Sari variants."
          feature2Title="Gentle Exfoliation"
          feature2Text="Comfortable exfoliation using fine natural scrub ingredients and controlled pressure."
        />
        <div className="body-scrub-pricing">
          <Pricing
            subTitle="Find Yours"
            title="Our Package Options"
            text="Body scrubs are often combined with massage, facials, and beauty treatments to create a complete wellness session. Our packages are designed for guests looking to refresh both body and mind while enjoying their time in Bali."
            packages={packageOptions}
          />
        </div>
        <div className="body-scrub-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          subTitle="The Results"
          title={<>What Can Regular Exfoliation Help With?</>}
          text="Exfoliation is commonly included in skincare routines to help remove dead skin cells that naturally accumulate on the surface of the skin. Many guests choose body scrubs after beach days, outdoor activities, or before special occasions when they want their skin to feel smoother and look more refreshed."
          featuresLeft={[
            "Helps remove dead skin cells and buildup",
            "Supports smoother skin texture",
            "May improve the appearance of dry areas",
          ]}
          featuresRight={[
            "Allows moisturizers and body oils to absorb more effectively",
            "Helps maintain softer and brighter-looking skin",
            "Commonly chosen before holidays and special events",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          subTitle="Choosing Your Scrub"
          title={<>Which Natural Scrub Matches Your Skin Goals?</>}
          text="Each scrub ingredient creates a slightly different treatment experience while delivering the same gentle exfoliating effect. The choice often comes down to fragrance preferences and the type of skin support you are looking for."
          featuresLeft={[
            "Coconut for moisture and softness",
            "Chocolate for a rich nourishing experience",
            "Strawberry for refreshing and brightening",
          ]}
          featuresRight={[
            "Bengkoang for smoother-looking skin",
            "Green Tea for a calming treatment",
            "Jasmine and Spa Sari for a traditional aromatic experience",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          subTitle="Inside the Treatment"
          title={<>What Happens During a Body Scrub Session?</>}
          text="The treatment begins with your choice of scrub ingredients before gentle circular massage movements are used to exfoliate the body evenly. Additional attention is often given to rougher areas such as elbows, knees, and feet before the scrub is removed to reveal smoother and cleaner-feeling skin underneath. The same treatment experience is also available through our villa and hotel home service appointments."
          featuresLeft={[
            "Choose your preferred scrub variant",
            "Full body exfoliation treatment",
            "Gentle circular massage movements",
          ]}
          featuresRight={[
            "Additional attention to rough areas",
            "Subtle natural fragrance after treatment",
            "Available for spa and home service bookings",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="body-scrub-faq">
          <Faq
            imageTitle="Renew Your Skin"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="pt-100 pb-100">
          <ReserveCta
            title="Give Your Skin a Fresh Start After Days in the Bali Sun"
            text="Long days spent at the beach, by the pool, or exploring Bali can leave the skin feeling dry, rough, or tired. Our Body Scrub treatment helps lift away buildup and dead skin cells while leaving the skin smoother, softer, and more comfortable to the touch. Treatments are available at our spa or through home service appointments for guests staying in villas and hotels throughout Seminyak and nearby areas."
            closingText="Reserve your appointment and enjoy refreshed, smoother-feeling skin."
          />
        </div>
        <div className="body-scrub-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
        </div>
      </Layout>
      <style jsx global>{`
        .body-scrub-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .body-scrub-banner .banner-two__content .title span {
          display: inline;
        }

        .body-scrub-pricing .pricing-section-three > .container,
        .body-scrub-funfact .funfact-section > .container {
          max-width: 1200px;
        }

        .body-scrub-pricing .pricing-section-three .shape2 {
          bottom: 70px;
        }

        @media (min-width: 992px) {
          .body-scrub-pricing
            .pricing-section-three
            .pricing-block
            .inner-box {
            padding: 20px;
          }

          .body-scrub-pricing
            .pricing-section-three
            .image-column {
            display: flex;
          }

          .body-scrub-pricing
            .pricing-section-three
            .image-column
            .image-box {
            flex: 1;
            position: relative;
            min-height: 0;
          }

          .body-scrub-pricing
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
          .body-scrub-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .body-scrub-services
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
