import React, { useRef } from "react";
import useDecorationMotion from "../components/elements/useDecorationMotion";
import FloralDecoration from "../components/elements/FloralDecoration";
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
import { seoFor } from "@/lib/seo";

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

const PAGE_SEO_ROUTE = "/seminyak/balinese-massage";
const PAGE_SEO = seoFor(PAGE_SEO_ROUTE);

export default function Home2({
  bannerShapeImage = "/images/shape/banner-two-shape.png",
  introLeftShapeImage = "/images/shape/about-two-left.png",
  introRightShapeImage = "/images/shape/about-two-right.png",
  benefitsRightShapeImage = "/images/shape/about-right-shape.png",
}) {
  const decorationRoot = useRef(null);
  useDecorationMotion(decorationRoot);
  const treatmentImages = createTreatmentImageSet("balinesemassage", packageOptions.length);
    return (
      <>
        <Layout HeaderStyle="one" FooterStyle="two" headTitle={PAGE_SEO.title} metaDescription={PAGE_SEO.description} canonicalPath={PAGE_SEO_ROUTE}>
          <div className="balinese-massage-page" ref={decorationRoot}>
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
              leftShapeSrc="/images/shape/package-four-shape-left.png"
              images={treatmentImages.pricing}
              subTitle="Find Yours"
              title="Our Package Options"
              text="Balinese massage is often combined with treatments such as facials, cream baths, and nail care to create a more complete spa experience. Our treatment packages are created for guests looking to relax, refresh, and make the most of their massage time in Bali."
              packages={packageOptions}
              topContent={<SessionOptions />}
            />
          </div>
          {/* <Marquee /> */}
          {/* <Product /> */}
          <div id="balinese-massage-funfact" className="balinese-massage-funfact">
            <Funfact items={serviceHighlights} />
          </div>
          {/* <News /> */}
          {/* <Instagram /> */}

          <div className="balinese-massage-testimonial">
            <Testimonial rightShapeSrc={null} />
          </div>
          {/* <Team /> */}
          {/* <Contact /> */}
          <div className="balinese-massage-benefits">
          <About
            image={treatmentImages.details[0]}
            leftShapeSrc={null}
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
            rightShapeSrc="/images/shape/banner-six-shape2.png"
            rightDecoration={<FloralDecoration clustered />}
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
            leftShapeSrc="/images/shape/leaf/4a.png"
            rightShapeSrc="/images/shape/banner-three-shape2.png"
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
            <div className="balinese-massage-faq-shape" aria-hidden="true">
              <img loading="lazy" decoding="async" className="animation__arryUpDown" src="/images/shape/step-shape-left.png" alt="" />
            </div>
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
            <Services
              title="Explore Beyond Your Balinese Massage"
              leftShapeSrc="/images/shape/service-shape-left.png"
              rightShapeSrc="/images/shape/service-shape-right.png"
              showFullTreatmentSlider
              embedded
            />
          </div>
          <div id="balinese-massage-paper-section" className="balinese-massage-paper-section section__decoration-top section__decoration-bottom bg-sub">
            <div className="balinese-massage-cta-shape" aria-hidden="true">
              <img loading="lazy" decoding="async" className="animation__arryUpDown" src="/images/shape/step-shape-left.png" alt="" />
            </div>
            <ReserveCta
              standardSpacing
              backgroundImage={treatmentImages.cta}
              title="Enjoy Balinese Massage Wherever You Stay"
              text="Balinese massage is available at our Seminyak spa and as home service at your villa or hotel, with an additional IDR 75,000 per therapist for locations in Seminyak and nearby areas. Our therapists adjust the pressure to suit you, from a gentle relaxing session through to firmer work on tired muscles and stiff shoulders."
              closingText="Reserve a session that fits your plans, in our spa or at your villa."
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





          /* ==========================================================
             TORN-EDGE CORRECTIONS — same pattern confirmed on the
             homepage: a plain section sitting directly under a bottom
             tear reads 150px (desktop) / 75px (mobile) from the visible
             torn edge to its first line of text at these paddings.

               desktop  124px      mobile  35px

             The numbers differ between breakpoints because the torn PNG
             is 1920px wide and centred, so a phone shows the middle of
             the artwork where the tear runs deeper.

             Sections with a tear of their own are excluded -- their
             padding belongs to the tear, not to the gap. The IDs are
             repeated because this page's own rules use ID selectors,
             which outrank any number of classes.
             ========================================================== */
          @media (min-width: 992px) {
            .balinese-massage-page.balinese-massage-page .about-section-two,
            .balinese-massage-page.balinese-massage-page .about-section:not([class*="decoration"]),
            #balinese-massage-funfact#balinese-massage-funfact > .funfact-section,
            #balinese-massage-services-section#balinese-massage-services-section > .service-section-two {
              padding-top: 143px !important;
            }

            /* The closing CTA sits under its wrapper's TOP tear, not under a
               bottom tear, and its first painted thing is the photo card --
               no text leading to absorb. Measured separately on each
               breakpoint: it came out short on desktop and long on phones. */
            #balinese-massage-paper-section#balinese-massage-paper-section > .reserve-cta-section {
              padding-top: 163px !important;
            }

            /* Sections sitting ABOVE a tear. Each ends on a different kind
               of element -- a paragraph, a stats row, a Book Now button --
               so each needed its own measured number. */
            .balinese-massage-page.balinese-massage-page .about-section-two {
              padding-bottom: 118px !important;
            }

            #balinese-massage-funfact#balinese-massage-funfact > .funfact-section {
              padding-bottom: 135px !important;
            }

            .balinese-massage-page.balinese-massage-page .about-section:not([class*="decoration"]) {
              padding-bottom: 137px !important;
            }

            /* This one carries both tears itself, so it kept the theme's own
               numbers and ended up wider than its neighbours above and
               narrower below. */
            .balinese-massage-page.balinese-massage-page .about-section[class*="decoration"] {
              padding-top: 163px !important;
              padding-bottom: 157px !important;
            }

            /* The other three sections that carry their own tears all start
               from the same theme padding, but one opens on a photo, one on
               the quote mark and one on a heading, so each lands somewhere
               else. These trim them onto the same line. */
            .balinese-massage-page.balinese-massage-page .balinese-massage-pricing > .pricing-section-three {
              padding-top: 161px !important;
              padding-bottom: 157px !important;
            }

            .balinese-massage-page.balinese-massage-page .balinese-massage-testimonial > .testimonial-section-two {
              padding-top: 163px !important;
              padding-bottom: 151px !important;
            }

            .balinese-massage-page.balinese-massage-page .balinese-massage-faq > .faq-section {
              padding-top: 163px !important;
              padding-bottom: 157px !important;
            }

            .balinese-massage-faq .faq-section .content-column .inner-column {
              padding-top: 40px !important;
              padding-bottom: 40px !important;
            }
          }

          @media (max-width: 991px) {
            /* Same split as the desktop block: a boundary that ends on text
               needs 35px here, one that ends on a photo, card or button needs
               the extra 17px on top of it. On phones the stacked layout puts a
               photo first in several of these, which is why they differ from
               their desktop counterparts. */
            .balinese-massage-page.balinese-massage-page .about-section:not([class*="decoration"]),
            #balinese-massage-services-section#balinese-massage-services-section > .service-section-two {
              padding-top: 54px !important;
            }

            .balinese-massage-page.balinese-massage-page .about-section-two,
            #balinese-massage-funfact#balinese-massage-funfact > .funfact-section {
              padding-top: 54px !important;
            }

            .balinese-massage-page.balinese-massage-page .about-section:not([class*="decoration"]) {
              padding-bottom: 52px !important;
            }

            #balinese-massage-services-section#balinese-massage-services-section > .service-section-two {
              padding-bottom: 17px !important;
            }

            #balinese-massage-paper-section#balinese-massage-paper-section > .reserve-cta-section {
              padding-top: 28px !important;
              padding-bottom: 10px !important;
            }

            /* Same four tear-carrying sections, measured again on a phone --
               the stacked layout changes what sits first and last in each. */
            .balinese-massage-page.balinese-massage-page .about-section[class*="decoration"] {
              padding-top: 98px !important;
              padding-bottom: 96px !important;
            }

            .balinese-massage-page.balinese-massage-page .balinese-massage-pricing > .pricing-section-three {
              padding-top: 96px !important;
              padding-bottom: 96px !important;
            }

            .balinese-massage-page.balinese-massage-page .balinese-massage-testimonial > .testimonial-section-two {
              padding-top: 98px !important;
              padding-bottom: 96px !important;
            }

            .balinese-massage-page.balinese-massage-page .balinese-massage-faq > .faq-section {
              padding-top: 115px !important;
              padding-bottom: 96px !important;
            }

            .balinese-massage-faq .faq-section .content-column .inner-column {
              padding-top: 24px !important;
              padding-bottom: 24px !important;
            }

            /* The two about-sections already measure right on phones, so only
               these two move. */
            .balinese-massage-page.balinese-massage-page .about-section-two {
              padding-bottom: 47px !important;
            }

            #balinese-massage-funfact#balinese-massage-funfact > .funfact-section {
              padding-bottom: 48px !important;
            }
          }

          /* The services section is the one section the theme ships without an
             ornament, so it read bare next to its neighbours. The pair is the
             same one the homepage services section uses, placed at the same
             edges (bottom-left / top-right) and sized to this page's 180-270px
             range. z-index -1 keeps them behind the heading and the cards, the
             section is already overflow:hidden so they clip at its edges, and
             the 1399px rule above hides them with every other ornament. */
          #balinese-massage-services-section .service-section-two > .shape1 {
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: -1;
          }

          /* 170px keeps the 511px-tall artwork at 266px, which starts below the
             slider's prev arrow (it sits at left 50px, 60% down) instead of
             running behind it. */
          #balinese-massage-services-section .service-section-two > .shape1 img {
            width: 170px;
            height: auto;
          }

          #balinese-massage-services-section .service-section-two > .shape2 {
            position: absolute;
            right: 0;
            top: 40px;
            z-index: -1;
          }

          #balinese-massage-services-section .service-section-two > .shape2 img {
            width: 230px;
            height: auto;
          }

          /* Vary the ornaments within the existing edge positions and spacing. */
          .balinese-massage-pricing .pricing-section-three .shape1 img {
            width: 230px;
            height: auto;
          }

          .balinese-massage-benefits .about-section .shape2 img {
            width: 185px;
            height: auto;
          }

          .balinese-massage-suitable .about-section .shape1 img {
            width: 230px;
            height: auto;
          }

          /* The floral cluster sits two levels deep inside .shape2, so scale the
             wrapper instead of sizing the images individually -- it keeps the
             petals and blossoms in proportion to each other. */
          .balinese-massage-suitable .about-section > .shape2 > div {
            transform: scale(1.2);
            transform-origin: top right;
          }

          .balinese-massage-experience .about-section .shape1 img {
            width: 180px;
            height: auto;
          }

          /* The torn-paper edges already own ::before and ::after on this
             section, so the ornament is a real element rather than a pseudo. */
          .balinese-massage-paper-section {
            position: relative;
            z-index: 1;
          }

          /* Flush into the bottom-right corner. step-shape-left.png is drawn for
             a left edge: its artwork ends 66px (at this size) before the file's
             right edge, so right:0 alone would leave the bowl floating away
             from the corner. Mirroring moves that padding to the left and puts
             the artwork against the edge -- the same trick the FAQ shape below
             uses. The bottom of the artwork is fully opaque, so bottom:0 lands
             it on the corner. The transform lives on the wrapper, leaving the
             image's own arryUpDown translate untouched. */
          .balinese-massage-cta-shape {
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: 1;
            pointer-events: none;
            transform: scaleX(-1);
          }

          .balinese-massage-faq {
            position: relative;
            z-index: 1;
            /* The shape below deliberately hangs past the right edge; without
               this it would widen the document and add a horizontal scrollbar. */
            overflow: hidden;
          }

          /* Only 82px of margin is clear to the right of the FAQ card, so the
             shape is mirrored and hangs off the edge rather than sitting over
             the copy -- the left side belongs to the photo. */
          .balinese-massage-faq-shape {
            position: absolute;
            right: -100px;
            bottom: 40px;
            z-index: 1;
            pointer-events: none;
            transform: scaleX(-1);
          }

          .balinese-massage-faq-shape img {
            width: 180px;
            height: auto;
          }

          .balinese-massage-cta-shape img {
            width: 200px;
            height: auto;
          }

          /* The CTA banner is a fixed 1410px and centred, so the margin beside
             it is only wide enough for the 134px of artwork once the viewport
             passes ~1680px. Below that the corner ornament would land on the
             photo rather than next to it, so it stays hidden -- a higher bar
             than the 1399px the other ornaments use. */
          @media (max-width: 1679px) {
            .balinese-massage-cta-shape {
              display: none;
            }
          }

          @media (max-width: 1399px) {
            .balinese-massage-faq-shape {
              display: none;
            }
          }

          .balinese-massage-suitable .about-section > .shape2 {
            top: 35px;
            z-index: 2;
          }

          .balinese-massage-experience .about-section .shape2 img {
            width: 210px;
            height: auto;
          }

          /* No z-index here: the theme parks every .shape1/.shape2 at -1 so the
             ornament stays behind the copy. Setting 2 lifted each one above the
             content column, and the pale corner of about-left-shape.png then
             washed out the benefits list underneath it. */
          .balinese-massage-page [data-decoration-motion] {
            translate: 0 var(--decoration-scroll, 0px);
            pointer-events: auto;
          }
          /* Deliberately no animation shorthand on this selector. Every ornament
             already ships with the theme's own class -- animation__arryUpDown,
             animation__arryLeftRight, animation__floatBob, sway_Y__animation --
             which is what the homepage ornaments run. A blanket
             balinese-decoration-drift here overrode all of them with a single
             8-11s tween that also stayed paused until the observer fired, so
             these read as frozen next to the homepage. Only the scroll-linked
             nudge belongs on this selector. */
          .balinese-massage-page [data-decoration-motion] img {
            transition: translate 450ms ease;
          }
          .balinese-massage-page [data-decoration-motion]:hover img,
          .balinese-massage-page [data-decoration-motion]:active img {
            translate: 3px -5px;
          }

          /* Home1/About renders its left ornament without an animation class,
             so those three sat still while their partner on the right moved.
             Same keyframes and 3s timing the homepage ornaments use. */
          .balinese-massage-suitable .about-section > .shape1 img,
          .balinese-massage-experience .about-section > .shape1 img {
            animation: sway_Y 3s linear infinite alternate;
          }

          .balinese-massage-banner .banner-two__shape img {
            animation: arryUpDown 2s ease infinite alternate;
          }
          @media (prefers-reduced-motion: reduce) {
            .balinese-massage-page [data-decoration-motion],
            .balinese-massage-page [data-decoration-motion] img {
              animation: none !important;
              transition: none;
              translate: none !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .balinese-massage-page section > .shape1 img,
            .balinese-massage-page section > .shape2 img {
              animation: none !important;
            }
          }

          .balinese-massage-testimonial .testimonial-section-two .shape1 img {
            width: 270px;
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

          /* The funfact row sits between two torn-paper edges, so the shared
             ruler gives it 143px/131px. Tighten it on this page only; the id
             is what outranks those !important rules. Tablet and the 75px
             mobile ruler are deliberately left alone. */
          @media (min-width: 992px) {
            #balinese-massage-funfact > .funfact-section {
              padding-top: 120px !important;
              padding-bottom: 130px !important;
            }
          }

          /* White cards on a white section have no edge of their own. A soft
             gold hairline gives each one a boundary without competing with the
             gold icon ring. */
          #balinese-massage-services-section .service-block-two .inner-box {
            border: 1px solid rgba(var(--theme-color1-rgb), 0.35);
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

          /* Above the closing tear. Measured 218px where 133px was wanted. */
          #balinese-massage-services-section > .service-section-two {
            padding-bottom: 102px !important;
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
            /* Above the wrapper bottom tear. Measured 163px, wanted 133px. */
            padding-bottom: 157px !important;
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
              padding-bottom: 0 !important;
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
