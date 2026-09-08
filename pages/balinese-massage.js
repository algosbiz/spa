import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home2/Banner";
import AboutOld from "../components/sections/Home2/About";
import Product from "../components/sections/Home2/Product";
import Services from "../components/sections/Home2/Services";
import Marquee from "../components/sections/Home2/Marquee";
import Faq from "../components/sections/Home6/Faq";
// import Pricing from "../components/sections/Home2/Pricing";
import Pricing from "../components/sections/Home3/Pricing";
import Contact from "../components/sections/Home2/Contact";
import Funfact from "../components/sections/Home2/Funfact";
import Testimonial from "../components/sections/Home2/Testimonial";
import Team from "../components/sections/Home2/Team";
import News from "../components/sections/Home2/News";
import Instagram from "../components/sections/Home2/Instagram";
import AboutReverse from "../components/sections/Home1/AboutReverse";
import About from "../components/sections/Home1/About";
import SessionOptions from "../components/sections/Home1/SessionOptions";
import ReserveCta from "../components/sections/Home1/ReserveCta";
import { createTreatmentImageSet } from "@/lib/treatmentImages";

const bookingUrl = "https://wa.me/6287863175144";

const packageOptions = [
  {
    price: "IDR 449K",
    name: "Package A",
    treatments: ["1 Hr Balinese Massage", "1 Hr Medi Pedi", "30 Mins Cream Bath"],
  },
  {
    price: "IDR 549K",
    name: "Package B",
    treatments: ["1 Hr Balinese Massage", "1 Hr Medi Pedi", "1 Hr Bali Moon Facial"],
  },
  {
    price: "IDR 449K",
    name: "Package C",
    treatments: ["1 Hr Balinese Massage", "30 Mins Cream Bath", "1 Hr Bali Moon Facial"],
  },
  {
    price: "IDR 399K",
    name: "Package D",
    treatments: ["1 Hr Balinese Massage", "30 Mins Manicure", "30 Mins Pedicure"],
  },
];

const serviceHighlights = [
  { title: "Experienced", text: "Therapists" },
  { title: "Flexible", text: "Booking" },
  { title: "Customized", text: "Packages" },
  { title: "Outcall", text: "Available" },
];

const faqItems = [
  {
    question: "What should I wear during a Balinese massage?",
    answer:
      "You will typically be provided with a clean towel or spa attire before your treatment. During the massage, only the area being worked on is uncovered, ensuring both privacy and comfort throughout the session.",
  },
  {
    question: "Is Balinese massage good after surfing or outdoor activities?",
    answer:
      "Yes. Balinese massage is a popular choice after surfing, sightseeing, or other outdoor activities in Bali. The combination of massage techniques helps relax tired muscles, improve circulation, and support post-activity recovery.",
  },
  {
    question: "How often should you get a Balinese massage?",
    answer:
      "The ideal frequency depends on your lifestyle and wellness goals. Many visitors enjoy a massage once or twice during their holiday, while regular guests may schedule weekly or monthly treatments to help maintain relaxation and reduce muscle tension.",
  },
  {
    question: "What are the benefits of a Balinese massage?",
    answer:
      "Balinese massage may help reduce muscle tension, improve blood circulation, encourage relaxation, ease everyday stress, and leave the body feeling refreshed. Many guests also find it beneficial after long flights or busy travel itineraries.",
  },
];

export default function Home2({
  bannerShapeImage = "/images/shape/banner-two-shape.png",
  introLeftShapeImage = "/images/shape/about-two-left.png",
  introRightShapeImage = "/images/shape/about-two-right.png",
  benefitsLeftShapeImage = "/images/shape/about-left-shape.png",
  benefitsRightShapeImage = "/images/shape/about-right-shape.png",
}) {
  const treatmentImages = createTreatmentImageSet("balinesemassage", packageOptions.length);
    return (
      <>
        <Layout HeaderStyle="one" FooterStyle="two">
          <div className="balinese-massage-page">
          <div className="balinese-massage-banner">
            <Banner
              image={treatmentImages.hero}
              shapeImage={bannerShapeImage}
              subTitle="Ancient Healing"
              titleSpan="Balinese Massage"
              title="Seminyak"
            />
          </div>
          <AboutOld
            primaryImage={treatmentImages.intro[0]}
            secondaryImage={treatmentImages.intro[1]}
            leftShapeSrc={introLeftShapeImage}
            rightShapeSrc={introRightShapeImage}
            subTitle="A Traditional Wellness"
            title={<>What Makes Balinese Massage Unique?</>}
            text="Balinese massage is a traditional treatment influenced by healing practices from Bali, Java, India, and China. The treatment combines acupressure, gentle stretching, skin rolling, and flowing strokes to help reduce tension, improve circulation, and encourage relaxation. Our therapists adapt the pressure and focus areas according to your comfort and preferences."
            feature1Title="Traditional Techniques"
            feature1Text="Combines acupressure, stretching, skin rolling, and rhythmic massage movements."
            feature2Title="Adjustable Pressure"
            feature2Text="Suitable for both gentle relaxation and firmer muscle relief sessions."
          />
          <div className="balinese-massage-pricing">
            <Pricing
              images={treatmentImages.pricing}
              subTitle="Find Yours"
              title="Our Package Options"
              text="Balinese massage is often combined with treatments such as facials, cream baths, and nail care to create a more complete spa experience. Our treatment packages are created for guests looking to relax, refresh, and make the most of their massage time in Bali."
              packages={packageOptions}
              leftShapeSrc="/images/shape/pricing-three-shape-left.png"
              topContent={<SessionOptions />}
            />
          </div>
          {/* <Marquee /> */}
          {/* <Product /> */}
          <div className="balinese-massage-funfact">
            <Funfact items={serviceHighlights} />
          </div>
          {/* <News /> */}
          {/* <Instagram /> */}

          <div className="balinese-massage-testimonial">
            <Testimonial rightShapeSrc="/images/shape/hotstone.png" />
          </div>
          {/* <Team /> */}
          {/* <Contact /> */}
          <div className="balinese-massage-benefits">
          <About
            image={treatmentImages.details[0]}
            leftShapeSrc={benefitsLeftShapeImage}
            rightShapeSrc={benefitsRightShapeImage}
            subTitle="The Benefits"
            title={<>Why Guests Choose Balinese Massage</>}
            text="Our Balinese massage is commonly chosen by travellers, office workers, and active individuals because it combines relaxation techniques with muscle-focused work in a single treatment. Find the benefits that make Balinese massage a favourite among our guests:"
            featuresLeft={[
              "Helps reduce muscle tension",
              "Encourages relaxation and stress relief",
              "Supports healthy blood circulation",
            ]}
            featuresRight={[
              "Often chosen after long flights and travel days",
              "Popular after surfing and outdoor activities",
              "Suitable for regular wellness routines",
            ]}
            buttonText="Book Now"
            buttonLink={bookingUrl}
          />
          </div>
          <div className="balinese-massage-suitable">
          <AboutReverse
            image={treatmentImages.details[1]}
            leftShapeSrc="/images/shape/step-shape-left.png"
            rightShapeSrc="/images/shape/leaf2.png"
            subTitle="Suitable For"
            badgeTopText="Your Ideal"
            badgeBottomText="Match"
            title={<>Who Is Balinese Massage Best For?</>}
            text="This treatment is suitable for many different lifestyles and travel situations. Our therapists frequently recommend Balinese massage for guests looking for:"
            featuresLeft={[
              "Travellers recovering from long flights",
              "Visitors returning from outdoor activities",
              "Guests experiencing neck and shoulder tension",
            ]}
            featuresRight={[
              "People spending long hours sitting or working",
              "Couples looking for a relaxing spa experience",
              "Anyone seeking traditional Balinese wellness",
            ]}
            buttonText="Book Now"
            buttonLink={bookingUrl}
          />
          </div>
          <div className="balinese-massage-experience">
          <About
            image={treatmentImages.details[2]}
            leftShapeSrc="/images/shape/leaf4.png"
            rightShapeSrc="/images/shape/service-four-shape-right.png"
            subTitle="The Experience"
            badgeTopText="Feel The"
            badgeBottomText="Difference"
            title={<>What to Expect from a Balinese Massage</>}
            text="A Balinese massage session begins with a short consultation regarding pressure preferences and areas that require extra attention. Massage oil is used to support smooth movements and muscle relaxation. The same treatment experience is also available through our home service for guests staying in villas, hotels, or private accommodations. Here’s what you can expect during your Balinese massage experience:"
            featuresLeft={[
              "Brief consultation before treatment",
              "Full body massage using massage oil",
              "Adjustable pressure during the session",
            ]}
            featuresRight={[
              "Additional attention to specific areas",
              "Available for individuals and couples",
              "Home service appointments available",
            ]}
            buttonText="Book Now"
            buttonLink={bookingUrl}
          />
          </div>
          <div className="balinese-massage-faq">
            <Faq
              removeTopPadding
              paperDecoration
              image={treatmentImages.faq}
              subTitle="Frequently Asked Questions"
              title={<>Everything You Need to Know</>}
              items={faqItems}
            />
          </div>
          <div id="balinese-massage-services-section" className="balinese-massage-services">
            <Services title="Explore Beyond Your Balinese Massage" showFullTreatmentSlider embedded />
          </div>
          <div id="balinese-massage-paper-section" className="balinese-massage-paper-section section__decoration-top section__decoration-bottom bg-sub">
            <ReserveCta
              standardSpacing
              backgroundImage={treatmentImages.cta}
              title="Enjoy Balinese Massage Wherever You Stay"
              text="Enjoy Balinese massage at your home, villa, or hotel, with home service available in Seminyak and nearby areas for IDR 75,000 per therapist and in-spa sessions available daily."
              closingText="Reserve a session that fits your plans and enjoy Balinese relaxation wherever you stay."
            />
          </div>
          </div>
        </Layout>
        <style jsx global>{`
          @media (max-width: 1399px) {
            .balinese-massage-page section > .shape1,
            .balinese-massage-page section > .shape2 {
              display: none;
            }
          }

          /* Vary the ornaments within the existing edge positions and spacing. */
          .balinese-massage-suitable .about-section .shape1 img {
            width: 230px;
            height: auto;
          }

          .balinese-massage-suitable .about-section .shape2 img {
            width: 160px;
            height: auto;
          }

          .balinese-massage-experience .about-section .shape1 img {
            width: 150px;
            height: auto;
          }

          .balinese-massage-experience .about-section .shape2 img {
            width: 230px;
            height: auto;
          }

          .balinese-massage-testimonial .testimonial-section-two .shape2 img {
            width: 180px;
            height: auto;
          }

          .balinese-massage-banner .banner-two__content .title {
            max-width: 1200px;
          }

          .balinese-massage-banner .banner-two__content .title span {
            display: inline;
          }

          .balinese-massage-pricing .pricing-section-three > .container,
          .balinese-massage-funfact .funfact-section > .container {
            max-width: 1200px;
          }

          .balinese-massage-pricing .pricing-section-three {
            padding-bottom: 80px;
          }

          .balinese-massage-pricing .balinese-session-options {
            margin-top: 0;
            margin-bottom: 80px;
          }

          @media (min-width: 992px) {
            .balinese-massage-pricing
              .pricing-section-three
              .pricing-block
              .inner-box {
              padding: 20px;
            }

            .balinese-massage-pricing
              .pricing-section-three
              .image-column {
              display: flex;
            }

            .balinese-massage-pricing
              .pricing-section-three
              .image-column
              .image-box {
              flex: 1;
              position: relative;
              min-height: 0;
            }

            .balinese-massage-pricing
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

          @media (max-width: 767px) {
            .balinese-massage-pricing .pricing-section-three {
              padding-bottom: 55px;
            }

            .balinese-massage-pricing .balinese-session-options {
              margin-bottom: 55px;
            }

            /* The blob is 137px wide at its native size, which eats nearly half
               the row on a phone and squeezes the feature text into 3-4 words
               per line. Both SVGs carry a viewBox, so height:auto keeps them
               in proportion. */
            .about-section-two .content-column .inner-box .icon-box .icon-bg {
              width: 96px;
              height: auto;
            }

            .about-section-two .content-column .inner-box .icon-box .icon {
              width: 38px;
              height: auto;
            }

            .balinese-massage-pricing .balinese-session-options .session-option-price {
              font-size: 25px;
              line-height: 34px;
            }

            .balinese-massage-faq .faq-section .section-header .sub-title {
              font-size: 19px;
              line-height: 28px;
            }

            .balinese-massage-faq .faq-section .section-header .title {
              font-size: 28px;
              line-height: 38px;
            }

            .balinese-massage-pricing
              .balinese-session-options
              .session-option-card
              .image-box
              .icon {
              width: 70px;
              height: 70px;
              line-height: 62px;
            }

            .balinese-massage-pricing
              .balinese-session-options
              .session-option-card
              .image-box
              .icon
              .service-treatment-icon {
              width: 36px;
              height: 38px;
            }
          }

          @media (max-width: 480px) {
            .balinese-massage-pricing .balinese-session-options .session-option-price {
              font-size: 22px;
              line-height: 30px;
            }
          }

          @media (min-width: 1400px) {
            .balinese-massage-faq .faq-section .content-column .inner-column {
              padding-right: 32px;
              padding-left: 32px;
            }
          }

          /* The toggle is a 30px ::before pinned to right:0, but the button has
             no right padding, so long questions run underneath it. */
          .balinese-massage-faq
            .faq-accordion
            .accordion
            .accordion-item
            .accordion-header
            button {
            padding-right: 40px;
          }

          .balinese-massage-services
            .service-section-two
            .section-header
            .title {
            max-width: 720px;
            margin-right: auto;
            margin-left: auto;
          }

          #balinese-massage-services-section > .service-section-two {
            padding-bottom: 170px !important;
          }

          #balinese-massage-services-section .service-block-two .inner-box {
            display: flex;
            flex-direction: column;
            height: 100%;
          }

          #balinese-massage-services-section .service-block-two .content {
            display: flex;
            flex: 1;
            flex-direction: column;
          }

          #balinese-massage-services-section .service-block-two .content .title {
            min-height: 70px;
          }

          #balinese-massage-services-section .service-block-two .content .text {
            min-height: 87px;
          }

          #balinese-massage-paper-section {
            padding-top: 0 !important;
          }

          #balinese-massage-paper-section > .reserve-cta-section {
            padding-top: 170px !important;
            padding-bottom: 170px !important;
          }

          @media (max-width: 767px) {
            /* The theme keeps mobile tears on a 75px ruler: 35px under the
               section above a tear (the artwork fills the other 40px), and
               41px over the content below it (34px of the PNG is opaque). The
               90px values here sat on top of that and doubled both gaps. */
            /* 10px here plus the 35px the card row already carries lands the
               gap above the CTA card on 86px — the same as the gap below it,
               which the paper wrapper's own padding sets. */
            #balinese-massage-services-section > .service-section-two {
              padding-bottom: 10px !important;
            }

            #balinese-massage-services-section .service-block-two .content .title {
              min-height: 60px;
            }

            #balinese-massage-services-section .service-block-two .content .text {
              min-height: 84px;
            }

            #balinese-massage-paper-section {
              padding-top: 70px !important;
            }

            /* The wrapper already carries the 86px that ends the bottom tear,
               so the inner section only needs the 41px lead-in at the top. */
            #balinese-massage-paper-section > .reserve-cta-section {
              padding-top: 41px !important;
              padding-bottom: 0 !important;
            }

            /* Once the section rhythm is on the ruler, the card's own padding is
               what still reads as empty space. It is set inline as
               "95px 70px", so it needs !important — and on a 375px screen the
               70px sides leave the heading only ~175px to wrap into. */
            #balinese-massage-paper-section .reserve-cta-banner {
              padding: 55px 24px !important;
            }
          }
        `}</style>
      </>
    );
}
