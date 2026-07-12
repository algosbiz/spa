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
    price: "IDR 649K",
    name: "Package A",
    treatments: ["1 Hr Cream Bath", "1 Hr Thai Massage", "1 Hr Bali Moon Facial"],
  },
  {
    price: "IDR 589K",
    name: "Package B",
    treatments: ["1 Hr Cream Bath", "1 Hr Hot Stone", "30 Mins Reflexology"],
  },
  {
    price: "IDR 449K",
    name: "Package C",
    treatments: ["30 Mins Cream Bath", "1 Hr Balinese Massage", "1 Hr Bali Moon Facial"],
  },
  {
    price: "IDR 539K",
    name: "Package D",
    treatments: ["1 Hr Cream Bath", "1 Hr Thai Massage", "30 Mins Body Scrub"],
  },
];

const serviceHighlights = [
  { title: "Multiple", text: "Cream Choices" },
  { title: "Flexible", text: "Booking" },
  { title: "Customized", text: "Packages" },
  { title: "Home Service", text: "Available" },
];

const faqItems = [
  {
    question: "What is the difference between a creambath and a hair mask?",
    answer:
      "Both treatments help nourish the hair, but a creambath also includes a relaxing scalp massage that focuses on scalp comfort while helping distribute the treatment evenly through the hair.",
  },
  {
    question: "Is creambath suitable for coloured or chemically treated hair?",
    answer:
      "Yes. Our creambath treatments are suitable for coloured, highlighted, and chemically treated hair. Our therapists can recommend the most appropriate formula for your hair condition.",
  },
  {
    question: "Which creambath is best for dry hair?",
    answer:
      "Many guests with dry hair choose Avocado or L'Oreal formulas because they are commonly selected for their moisturising and smoothing properties.",
  },
  {
    question: "How often should I get a creambath?",
    answer:
      "Many people include a creambath in their hair care routine every two to four weeks, depending on hair condition, styling habits, and environmental exposure.",
  },
  {
    question: "Can I get a creambath after swimming or spending time at the beach?",
    answer:
      "Absolutely. Creambath is one of the most popular treatments after swimming or sun exposure because it helps restore moisture and improve hair softness.",
  },
];

export default function HairCreambath() {
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="hair-creambath-banner">
          <Banner
            subTitle="Hair & Scalp Wellness"
            titleSpan="Hair Creambath"
            title="Treatment"
          />
        </div>
        <AboutOld
          subTitle="Traditional Hair Care"
          title={<>The Ritual Behind a Cream Bath Treatment</>}
          text="A creambath is a popular Indonesian hair and scalp treatment that combines nourishing hair cream with a gentle scalp massage. Unlike a regular hair mask, this treatment focuses on both the hair strands and scalp, helping improve softness, moisture, and overall hair condition. Commonly enjoyed after sun exposure, swimming, or frequent styling, a creambath offers a relaxing way to refresh and care for your hair."
          feature1Title="Hair Conditioning"
          feature1Text="Nourishing ingredients help improve hair softness, hydration, and manageability."
          feature2Title="Scalp Relaxation"
          feature2Text="Gentle massage movements support scalp comfort while enhancing relaxation."
        />
        <div className="hair-creambath-pricing">
          <Pricing
            subTitle="Find Yours"
            title="Our Package Options"
            text="Our Cream Bath packages combine nourishing hair care with relaxing spa treatments for a more complete wellness experience. From facial care and massage to body treatments, each combination is designed to help you refresh your hair, relax your body, and enjoy more during your spa visit in Bali."
            packages={packageOptions}
          />
        </div>
        <div className="hair-creambath-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          subTitle="Ingredient Guide"
          title={<>Which Creambath Formula is Right for You?</>}
          text="Each creambath formula is designed with different ingredients to support specific hair concerns. Choosing the right option helps ensure your treatment matches your hair type, condition, and desired results."
          featuresLeft={[
            "Ginseng to support healthier-looking hair",
            "Avocado for moisture and softness",
            "Aloe Vera to soothe the scalp",
          ]}
          featuresRight={[
            "L'Oreal for smoother, more manageable hair",
            "Suitable for dry and damaged hair",
            "Ideal after swimming or sun exposure",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          subTitle="Hair Benefits"
          title={<>How Does a Cream Bath Care for Your Hair?</>}
          text="Our creambath provides focused care for both the hair and scalp by combining nourishing cream with a relaxing scalp massage. It is commonly chosen to help refresh hair that feels dry, dull, or affected by sun exposure, humidity, swimming, and daily styling."
          featuresLeft={[
            "Helps improve hair moisture and softness",
            "Supports a smoother, healthier-looking appearance",
            "Helps reduce the look of dryness and frizz",
          ]}
          featuresRight={[
            "Leaves hair feeling refreshed and easier to manage",
            "Provides gentle care for the scalp",
            "Enhances shine and overall hair comfort",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          subTitle="The Ritual"
          title={<>Inside a Traditional Creambath Session</>}
          text="Our Creambath session combines hair conditioning with a relaxing scalp treatment. The process begins with selecting a suitable cream formula based on your hair needs, followed by a gentle application from the roots to the ends. A soothing scalp massage helps the cream absorb while releasing tension, then the treatment is completed with a rinse and finishing step to leave the hair feeling soft, refreshed, and manageable."
          featuresLeft={[
            "Hair and scalp assessment",
            "Cream application from roots to ends",
            "Gentle scalp and head massage",
          ]}
          featuresRight={[
            "Relaxing treatment with nourishing cream",
            "Hair rinse and finishing care",
            "Available at the spa or through home service",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="hair-creambath-faq">
          <Faq
            imageTitle="Refresh Your Hair"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="pt-100 pb-100">
          <ReserveCta
            title="Restore Your Hair After Bali's Tropical Days"
            text="Sun exposure, ocean water, and humidity can affect the way your hair feels and looks. A Creambath treatment helps replenish moisture, soften dry strands, and provide relaxing scalp care through nourishing creams and gentle massage techniques. Enjoy your session at our spa or request a home service at your villa or hotel for a convenient hair care experience during your stay in Bali."
            closingText="Refresh your hair and enjoy a calming self-care moment designed around your needs."
          />
        </div>
        <div className="hair-creambath-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
        </div>
      </Layout>
      <style jsx global>{`
        .hair-creambath-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .hair-creambath-banner .banner-two__content .title span {
          display: inline;
        }

        .hair-creambath-pricing .pricing-section-three > .container,
        .hair-creambath-funfact .funfact-section > .container {
          max-width: 1200px;
        }

        .hair-creambath-pricing .pricing-section-three .shape2 {
          bottom: 70px;
        }

        @media (min-width: 992px) {
          .hair-creambath-pricing
            .pricing-section-three
            .pricing-block
            .inner-box {
            padding: 20px;
          }

          .hair-creambath-pricing
            .pricing-section-three
            .image-column {
            display: flex;
          }

          .hair-creambath-pricing
            .pricing-section-three
            .image-column
            .image-box {
            flex: 1;
            position: relative;
            min-height: 0;
          }

          .hair-creambath-pricing
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
          .hair-creambath-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .hair-creambath-services
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
