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

const packageOptions = [
  {
    price: "IDR 439K",
    name: "Package A",
    treatments: ["1 Hr Bali Moon Facial", "30 Mins Body Scrub", "1 Hr Balinese Massage"],
  },
  {
    price: "IDR 649K",
    name: "Package B",
    treatments: ["1 Hr Bali Moon Facial", "1 Hr Cream Bath", "1 Hr Thai Massage"],
  },
  {
    price: "IDR 449K",
    name: "Package C",
    treatments: ["1 Hr Bali Moon Facial", "1 Hr Thai Massage"],
  },
  {
    price: "IDR 549K",
    name: "Package D",
    treatments: ["1 Hr Bali Moon Facial", "1 Hr Warm Candle", "30 Mins Body Scrub"],
  },
];

const serviceHighlights = [
  { title: "For All", text: "Skin Types" },
  { title: "Personalized", text: "Mask Selection" },
  { title: "Customized", text: "Packages" },
  { title: "Outcall", text: "Available" },
];

const faqItems = [
  {
    question: "What Is a Bali Moon Facial?",
    answer:
      "A Bali Moon Facial is a relaxing facial treatment designed to cleanse, refresh, and nourish the skin while providing a soothing spa experience in Seminyak, Bali.",
  },
  {
    question: "Can a facial help after spending time in the Bali sun?",
    answer:
      "Yes. After days of sightseeing, swimming, or sun exposure, a facial can help cleanse the skin, restore moisture, and leave your complexion feeling refreshed. Many visitors choose a facial as part of their post-holiday self-care routine.",
  },
  {
    question: "What Are the Benefits of a Bali Moon Facial?",
    answer:
      "A Bali Moon Facial can help cleanse the skin, remove surface impurities, improve hydration, and leave the skin feeling refreshed and rejuvenated.",
  },
  {
    question: "Where Can I Get a Bali Moon Facial in Seminyak?",
    answer:
      "You can enjoy a Bali Moon Facial at Spa Bali Moon in Seminyak, Bali, as a relaxing spa experience designed to combine professional facial care with the calming atmosphere of a Balinese spa.",
  },
];

export default function BaliMoonFacial() {
  const treatmentImages = createTreatmentImageSet("balimoonfacial", packageOptions.length);
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="bali-moon-facial-banner">
          <Banner
            image={treatmentImages.hero}
            subTitle="Skin Rejuvenation"
            titleSpan="Bali Moon Facial"
            title="Seminyak"
          />
        </div>
        <AboutOld
          primaryImage={treatmentImages.intro[0]}
          secondaryImage={treatmentImages.intro[1]}
          subTitle="A Personalized Experience"
          title={<>What Makes Bali Moon Facial Different?</>}
          text="Bali Moon Facial is our signature facial treatment designed to refresh, hydrate, and support healthy-looking skin while providing a relaxing spa experience. The treatment combines gentle cleansing, steaming, exfoliation, lymphatic facial massage using Argan Oil, and a targeted mask selected according to your skin's needs."
          feature1Title="Tea Tree Mask"
          feature1Text="Helps balance excess oil, calm blemishes, and support clearer-looking skin."
          feature2Title="Gold Mask"
          feature2Text="Focuses on hydration, elasticity, and restoring a healthy-looking glow."
        />
        <div className="bali-moon-facial-pricing">
          <Pricing
            images={treatmentImages.pricing}
            subTitle="Find Yours"
            title="Our Package Options"
            text="Bali Moon Facial is often combined with massage, hair treatments, and nail care to create a complete self-care experience. Our treatment packages are designed for guests looking to relax while giving their skin additional attention during their time in Bali."
            packages={packageOptions}
          />
        </div>
        <div className="bali-moon-facial-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          image={treatmentImages.details[0]}
          subTitle="Skin Goals"
          title={<>What Does a Facial Help With?</>}
          text="While every skin type behaves differently, regular facial treatments are commonly used to help manage surface impurities, maintain hydration, and support overall skin condition. Guests choose facial treatments for a variety of skincare goals, such as:"
          featuresLeft={[
            "Supports hydration and moisture balance",
            "Helps remove excess oil and impurities",
            "Encourages smoother skin texture",
          ]}
          featuresRight={[
            "May improve the appearance of dull skin",
            "Supports a fresher and brighter complexion",
            "Suitable for ongoing skin maintenance",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          image={treatmentImages.details[1]}
          subTitle="Your Skin Type"
          title={<>Which Mask is Right for Your Skin?</>}
          text="Different skin concerns require different approaches. During your appointment, we help determine which mask best suits your skin's current condition and treatment goals."
          featuresLeft={[
            "Tea Tree for oily skin and visible congestion",
            "Tea Tree for blemish-prone skin concerns",
            "Gold for dry or dehydrated skin",
          ]}
          featuresRight={[
            "Gold for improving softness and comfort",
            "Suitable for combination skin types",
            "Recommended for guests exposed to sun",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          image={treatmentImages.details[2]}
          subTitle="Inside the Treatment"
          title={<>What to Expect During Your Facial</>}
          text="Your facial follows a series of carefully selected steps designed to cleanse, exfoliate, nourish, and refresh your skin:"
          featuresLeft={[
            "Milk cleanser to remove surface buildup",
            "Warm steam to soften and prepare the pores",
            "Red clay scrub for gentle exfoliation",
          ]}
          featuresRight={[
            "Argan Oil lymphatic facial massage",
            "Tea Tree or Gold Mask application",
            "Rose water toning to finish the treatment",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="bali-moon-facial-faq">
          <Faq
            image={treatmentImages.faq}
            imageTitle="Refresh Your Skin"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="pt-100 pb-100">
          <ReserveCta
            backgroundImage={treatmentImages.cta}
            title="Professional Facial Care at Your Spa, Villa, or Hotel"
            text="Enjoy the convenience of professional facial treatments without changing your plans for the day. Bali Moon Facial is available both in our spa and through home service appointments, allowing you to enjoy personalised skincare in the environment where you feel most comfortable. Home service is available for an additional IDR 75,000 per therapist within Seminyak and nearby areas."
            closingText="Reserve your appointment and give your skin the attention it deserves."
          />
        </div>
        <div className="bali-moon-facial-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
        </div>
      </Layout>
      <style jsx global>{`
        .bali-moon-facial-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .bali-moon-facial-banner .banner-two__content .title span {
          display: inline;
        }

        .bali-moon-facial-pricing .pricing-section-three > .container,
        .bali-moon-facial-funfact .funfact-section > .container {
          max-width: 1200px;
        }

        .bali-moon-facial-pricing .pricing-section-three .shape2 {
          bottom: 70px;
        }

        @media (min-width: 992px) {
          .bali-moon-facial-pricing
            .pricing-section-three
            .pricing-block
            .inner-box {
            padding: 20px;
          }

          .bali-moon-facial-pricing
            .pricing-section-three
            .image-column {
            display: flex;
          }

          .bali-moon-facial-pricing
            .pricing-section-three
            .image-column
            .image-box {
            flex: 1;
            position: relative;
            min-height: 0;
          }

          .bali-moon-facial-pricing
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
          .bali-moon-facial-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .bali-moon-facial-services
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
