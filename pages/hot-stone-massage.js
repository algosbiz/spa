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
import SessionOptions from "../components/sections/Home1/SessionOptions";
import Faq from "../components/sections/Home6/Faq";
import Services from "../components/sections/Home2/Services";
import { createTreatmentImageSet } from "@/lib/treatmentImages";
import { seoFor } from "@/lib/seo";

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

const durationOptions = [
  {
    price: "IDR 299K",
    duration: "1.5 Hours",
    details: [
      "Full-body hot stone massage",
      "Warmth across major muscle areas",
      "Extra focus on built-up tension",
    ],
  },
  {
    price: "IDR 439K",
    duration: "2 Hours",
    details: [
      "Extended hot stone treatment",
      "More time for deeper relaxation",
      "Longer focus on tense areas",
    ],
  },
];

const serviceHighlights = [
  { title: "Heated", text: "Basalt Stones" },
  { title: "Muscle", text: "Relaxation" },
  { title: "Customized", text: "Packages" },
  { title: "Outcall", text: "Available" },
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
  {
    question: "What is a hot stone massage?",
    answer:
      "Hot stone massage uses smooth, heated stones placed on selected areas of the body alongside massage techniques. The warmth helps relax the muscles while the massage creates a deeper sense of relaxation.",
  },
];

const PAGE_SEO_ROUTE = "/seminyak/hot-stone-massage";
const PAGE_SEO = seoFor(PAGE_SEO_ROUTE);

export default function HotStoneMassage() {
  const treatmentImages = createTreatmentImageSet("hotstonemassage", packageOptions.length);
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two" headTitle={PAGE_SEO.title} metaDescription={PAGE_SEO.description} canonicalPath={PAGE_SEO_ROUTE}>
        <div className="hot-stone-massage-banner">
          <Banner
            image={treatmentImages.hero}
            subTitle="Warm Stone Therapy"
            titleSpan="Traditional Hot Stone"
            title="Massage"
          />
        </div>
        <AboutOld
          leftShapeSrc="/images/shape/about-two-left.png"
          rightShapeSrc="/images/shape/about-two-right.png"
          primaryImage={treatmentImages.intro[0]}
          secondaryImage={treatmentImages.intro[1]}
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
            leftShapeSrc="/images/shape/package-four-shape-left.png"
            images={treatmentImages.pricing}
            subTitle="Find Yours"
            title="Our Package Options"
            text="Hot Stone Massage pairs naturally with treatments that extend relaxation from head to toe. Our carefully selected packages combine soothing warmth with facial care, body treatments, or beauty services, making them ideal for guests looking for a more complete spa experience during their stay in Bali."
            packages={packageOptions}
            topContent={
              <SessionOptions
                sessions={durationOptions}
                subTitle="Warmth That Lasts"
                title="Hot Stone Massage Duration Options"
                text="Hot Stone Massage combines heated basalt stones with flowing massage techniques to help the body relax more deeply. Longer sessions allow more time for full-body treatment and focused attention on areas that hold tension."
                icon="/images/spa/HotStone.svg"
              />
            }
          />
        </div>
        <div className="hot-stone-massage-funfact">
          <Funfact items={serviceHighlights} />
        </div>

        <Testimonial rightShapeSrc={null} />
        <About
          leftShapeSrc={null}
          rightShapeSrc="/images/shape/about-right-shape.png"
          image={treatmentImages.details[0]}
          subTitle="Treatment Benefits"
          title={<>How Can Hot Stone Massage Support Your Wellbeing?</>}
          text="Hot Stone Massage combines the soothing warmth of heated stones with flowing massage techniques to help you feel more relaxed and comfortable. The warmth can help prepare your muscles for massage, while the treatment offers a calming experience many guests enjoy after travel, busy days, or physical activity. Some of the key benefits are:"
          featuresLeft={[
            "Helps soften tight muscles before massage",
            "Supports healthy circulation",
            "Encourages a deeper sense of relaxation",
          ]}
          featuresRight={[
            "May ease feelings of physical tension",
            "Provides soothing warmth throughout the treatment",
            "Offers a relaxing option after travel or active days",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <AboutReverse
          leftShapeSrc="/images/shape/step-shape-left.png"
          rightShapeSrc="/images/shape/banner-six-shape2.png"
          rightDecoration={<FloralDecoration clustered />}
          image={treatmentImages.details[1]}
          subTitle="Heat Therapy"
          badgeTopText="Heat in the"
          badgeBottomText="Right Places"
          title={<>Where Are the Warm Stones Used?</>}
          text="Warm stones can be placed on different parts of the body depending on where you want to focus the treatment. Larger stones are generally used on broader areas, while smaller stones allow for more focused warmth. Common areas for warm stone placement are:"
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
          rightShapeSrc="/images/shape/banner-three-shape2.png"
          image={treatmentImages.details[2]}
          subTitle="The Experience"
          badgeTopText="Feel the"
          badgeBottomText="Heat Work"
          title={<>What Happens During a Hot Stone Massage</>}
          text="A Hot Stone Massage follows a gradual process that combines heated stones with traditional massage techniques. The treatment starts by preparing the body for the warmth, followed by a combination of stone and hand massage. Throughout the session, we pay attention to your comfort and adjust the treatment as needed. The session generally follows these steps:"
          featuresLeft={[
            "Comfort consultation before treatment",
            "Warm stone placement on selected areas",
            "Flowing massage with heated stones",
          ]}
          featuresRight={[
            "Combination of stone and hand techniques",
            "Temperature checks throughout the session",
            "Calming finishing placement of warm stones",
          ]}
          buttonText="Book Now"
          buttonLink={bookingUrl}
        />
        <div className="hot-stone-massage-faq">
          <Faq
            removeTopPadding
            paperDecoration
            image={treatmentImages.faq}
            imageTitle="Warm Stone Therapy"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={faqItems}
          />
        </div>
        <div className="hot-stone-massage-services">
          <Services
            leftShapeSrc="/images/shape/service-shape-left.png"
            rightShapeSrc="/images/shape/service-shape-right.png"
            title="Warm Up to More Than Hot Stone Massage" showFullTreatmentSlider embedded
          />
        </div>
        <div className="hot-stone-massage-paper-section section__decoration-top section__decoration-bottom bg-sub">
          <ReserveCta
            standardSpacing
            backgroundImage={treatmentImages.cta}
            title="Warmth That Helps the Body Fully Unwind"
            text="Sometimes the body doesn't need stronger pressure, it simply needs warmth that allows muscles to let go naturally. Hot Stone Massage offers a slower, deeply comforting experience that combines therapeutic heat with skilled massage techniques to ease tension and restore a lasting sense of balance. Visit our spa or enjoy the same relaxing treatment from your villa or hotel through our convenient home service."
            closingText="Reserve your Hot Stone Massage package and enjoy warmth-led relaxation."
          />
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
