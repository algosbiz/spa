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
    price: "IDR 449K",
    name: "Package A",
    treatments: [
      "1.5 Hr Hot Stone",
      "30 Mins Body Scrub",
      "30 Mins Head Massage",
    ],
  },
  {
    price: "IDR 559K",
    name: "Package B",
    treatments: [
      "1 Hr Hot Stone",
      "1 Hr Cream Bath",
      "30 Mins Reflexology",
    ],
  },
  {
    price: "IDR 489K",
    name: "Package C",
    treatments: [
      "1 Hr Hot Stone",
      "1 Hr Bali Moon Facial",
    ],
  },
  {
    price: "IDR 439K",
    name: "Package D",
    treatments: [
      "1.5 Hr Hot Stone",
      "30 Mins Pedicure",
    ],
  },
];

const serviceHighlights = [
  { title: "Heated", text: "Basalt Stones" },
  { title: "Muscle", text: "Relaxation" },
  { title: "Customized", text: "Packages" },
  { title: "Home Service", text: "Available" },
];

const faqItems = [
  {
    question: "Are the stones very hot?",
    answer:
      "No. The stones are heated to a comfortable therapeutic temperature and are always tested before being placed on the body. Your therapist will also adjust the warmth according to your comfort level.",
  },
  {
    question: "What type of stones are used?",
    answer:
      "Most professional Hot Stone Massage treatments use smooth basalt stones because they naturally retain heat for longer, allowing warmth to be distributed evenly throughout the massage.",
  },
  {
    question: "Is Hot Stone Massage better than a regular massage?",
    answer:
      "They offer different experiences. A traditional massage relies entirely on manual techniques, while Hot Stone Massage combines massage with therapeutic heat to help muscles relax before deeper work begins.",
  },
  {
    question: "Can this treatment help after travelling?",
    answer:
      "Yes. Many guests choose Hot Stone Massage after long flights, sightseeing, or active holidays because the warmth helps ease muscular tension and encourages relaxation.",
  },
  {
    question: "Can I receive Hot Stone Massage at my villa or hotel?",
    answer:
      "Yes. Our therapists provide professional home service throughout Seminyak and nearby areas, bringing all necessary equipment for a comfortable treatment.",
  },
];

export default function HotStoneMassage() {
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <div className="hot-stone-massage-banner">
          <Banner
            subTitle="Warm Stone Therapy"
            titleSpan="Traditional Hot Stone"
            title="Massage"
          />
        </div>
        <AboutOld
          subTitle="The Experience"
          title={<>Why Does Hot Stone Massage Feel Different?</>}
          text="Hot Stone Massage combines traditional massage techniques with smooth heated basalt stones to create a deeply relaxing treatment. The warmth allows muscles to soften before deeper massage techniques are applied, making it easier to release tension without excessive pressure. This treatment is often chosen by guests seeking both physical relaxation and a calming wellness experience."
          feature1Title="Heated Basalt Stones"
          feature1Text="Naturally retains warmth to help relax muscles throughout the treatment."
          feature2Title="Deep Relaxation"
          feature2Text="Combines therapeutic heat with massage to promote lasting comfort."
        />
        <div className="hot-stone-massage-pricing">
          <Pricing
            subTitle="Find Yours"
            title="Our Package Options"
            text="Hot Stone Massage pairs naturally with treatments that extend relaxation from head to toe. Our carefully selected packages combine soothing warmth with facial care, body treatments, or beauty services, making them ideal for guests looking for a more complete spa experience during their stay in Bali."
            packages={packageOptions}
          />
        </div>
        <div className="hot-stone-massage-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial />
        <About
          subTitle="Treatment Benefits"
          title={<>How Can Hot Stone Massage Support Your Wellbeing?</>}
          text="The combination of therapeutic warmth and massage techniques creates benefits that go beyond muscle relaxation alone. Many guests choose Hot Stone Massage after travelling, busy schedules, or physically demanding activities because the treatment helps the body relax naturally while encouraging overall comfort."
          featuresLeft={[
            "Helps soften tight muscles before massage",
            "Supports healthy circulation",
            "Encourages deeper relaxation",
          ]}
          featuresRight={[
            "May reduce feelings of physical tension",
            "Provides soothing warmth throughout the body",
            "Suitable after travel or active days",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          subTitle="Heat Therapy"
          title={<>Where Are the Warm Stones Used?</>}
          text="Different stone sizes are selected depending on the treatment area. Larger stones provide broad warming across major muscle groups, while smaller stones deliver focused attention to areas where tension commonly develops."
          featuresLeft={[
            "Back and shoulders",
            "Neck area",
            "Legs and calves",
          ]}
          featuresRight={[
            "Arms",
            "Hands",
            "Feet",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <About
          subTitle="The Experience"
          title={<>What Happens During a Hot Stone Massage</>}
          text="The session begins with heated basalt stones placed on selected areas to gradually warm the muscles before massage begins. Throughout the treatment, our therapists alternate between flowing hand techniques and warm stone massage while adjusting the temperature for your comfort. Smaller stones may also be used to address areas of deeper muscular tension before the session concludes with a calming finish."
          featuresLeft={[
            "Comfort consultation before treatment",
            "Warm stone placement on key muscle areas",
            "Flowing massage using heated stones",
          ]}
          featuresRight={[
            "Combination of stone and hand techniques",
            "Temperature monitored throughout the session",
            "Relaxing finishing placement of warm stones",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="hot-stone-massage-faq">
          <Faq
            imageTitle="Warm Stone Therapy"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="pt-100 pb-100">
          <ReserveCta
            title="Warmth That Helps the Body Fully Unwind"
            text="Sometimes the body doesn't need stronger pressure, it simply needs warmth that allows muscles to let go naturally. Hot Stone Massage offers a slower, deeply comforting experience that combines therapeutic heat with skilled massage techniques to ease tension and restore a lasting sense of balance. Visit our spa or enjoy the same relaxing treatment from your villa or hotel through our convenient home service."
            closingText="Reserve your Hot Stone Massage package and enjoy warmth-led relaxation."
          />
        </div>
        <div className="hot-stone-massage-services section__decoration-top section__decoration-bottom bg-sub">
          <Services title="Our Services Will Make You Glow" />
        </div>
      </Layout>
      <style jsx global>{`
        .hot-stone-massage-banner .banner-two__content .title {
          max-width: 1200px;
        }

        .hot-stone-massage-banner .banner-two__content .title span {
          display: inline;
        }

        .hot-stone-massage-pricing .pricing-section-three > .container,
        .hot-stone-massage-funfact .funfact-section > .container {
          max-width: 1200px;
        }

        .hot-stone-massage-pricing .pricing-section-three .shape2 {
          bottom: 30px;
        }

        @media (min-width: 992px) {
          .hot-stone-massage-pricing
            .pricing-section-three
            .pricing-block
            .inner-box {
            padding: 20px;
          }

          .hot-stone-massage-pricing
            .pricing-section-three
            .image-column {
            display: flex;
          }

          .hot-stone-massage-pricing
            .pricing-section-three
            .image-column
            .image-box {
            flex: 1;
            position: relative;
            min-height: 0;
          }

          .hot-stone-massage-pricing
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
          .hot-stone-massage-faq .faq-section .content-column .inner-column {
            padding-right: 32px;
            padding-left: 32px;
          }
        }

        .hot-stone-massage-services
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
