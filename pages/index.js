import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home5/Banner";
import About from "../components/sections/Home3/About";
import Services from "../components/sections/Home1/Services";
import Pricing from "../components/sections/Home5/Pricing";
import Step from "../components/sections/Home5/Step";
import TreatmentCatalog from "@/components/sections/Home1/TreatmentCatalog";
import Faq from "../components/sections/Home6/Faq";
import PackageIntroText from "../components/sections/Home1/PackageIntroText";
import ReserveCta from "../components/sections/Home1/ReserveCta";
import Feature from "../components/sections/Home1/Feature";
import Testimonial from "../components/sections/Home3/Testimonial";
import { homepageTreatments } from "@/lib/homepageTreatments";
import { getGoogleReviews, fallbackGoogleReviews } from "@/lib/googleReviews";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://spabalimoon.com";

// Used until the Google Places API is configured, and whenever Google returns no
// review long enough to fill a slide.
const fallbackTestimonials = [
  {
    name: "Putu Ayu",
    designation: "Loyal Customer",
    text: "Layanan di sini sangat luar biasa! Saya merasa jauh lebih segar setelah melakukan perawatan massage. Terapisnya sangat profesional.",
    stars: 5,
  },
  {
    name: "Made Suardana",
    designation: "Happy Client",
    text: "Tempat yang sangat tenang dan nyaman. Fasilitasnya sangat lengkap dan stafnya ramah-ramah. Sangat direkomendasikan!",
    stars: 5,
  },
  {
    name: "Nyoman Sari",
    designation: "Relaxed Guest",
    text: "Saya sering ke sini untuk spa bulanan. Hasilnya selalu memuaskan dan harga yang ditawarkan sangat kompetitif.",
    stars: 5,
  },
  {
    name: "Ketut Wijaya",
    designation: "New Client",
    text: "Pertama kali ke sini dan langsung suka! Pelayanannya cepat dan hasilnya instan terasa di tubuh.",
    stars: 5,
  },
];

const bookingSteps = [
  {
    title: "Choose a Treatment",
    text: "Browse our massage, facial, beauty, and spa treatments to find the experience that suits your schedule and preferences.",
  },
  {
    title: "Book via WhatsApp",
    text: "Tell us your preferred treatment, location, and appointment time. We'll confirm availability and help arrange every detail.",
  },
  {
    title: "Relax Your Way",
    text: "Visit our spa in Seminyak or enjoy the same professional treatment from the comfort of your villa or accommodation.",
  },
];

const differentiators = [
  {
    title: "Experienced Therapists",
    text: "Skilled professionals who adjust every treatment to your comfort level and individual needs.",
    href: "/team",
  },
  {
    title: "Home Service Available",
    text: "Enjoy the same professional treatments at your villa, hotel, or private residence around Seminyak.",
    href: "/home-service",
  },
  {
    title: "Complete Wellness Menu",
    text: "Massage, facials, body care, beauty treatments, and spa packages are all available in one destination.",
    href: "/page-services",
  },
  {
    title: "Easy WhatsApp Booking",
    text: "Book appointments quickly, ask questions, and receive personalised treatment recommendations.",
    href: "/contact",
  },
];

export default function Home5({ googleReviews = fallbackGoogleReviews }) {
  const testimonials =
    googleReviews.reviews.length > 0
      ? googleReviews.reviews.map((review) => ({
          name: review.name,
          designation: review.relativeTime ? `Google review · ${review.relativeTime}` : "Google review",
          text: review.text,
          stars: Math.round(review.rating),
          avatar: review.photo,
          sourceUrl: review.url || googleReviews.reviewsUrl,
        }))
      : fallbackTestimonials;

  const ratingSchema = googleReviews.isLive &&
    googleReviews.userRatingCount > 0 && {
      "@context": "https://schema.org",
      "@type": "DaySpa",
      name: "Spa Bali Moon",
      url: SITE_URL,
      image: `${SITE_URL}/images/home/homepage-1.webp`,
      email: "info@spabalimoon.com",
      areaServed: "Seminyak, Bali",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: googleReviews.rating,
        reviewCount: googleReviews.userRatingCount,
        bestRating: 5,
        worstRating: 1,
      },
    };

  return (
    <>
      {/* Rendered in the body rather than through next/head, which drops script
          children. Google accepts JSON-LD in either place. */}
      {ratingSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
        />
      )}
      <Layout HeaderStyle="one" FooterStyle="two">
        <Banner
          title="Traditional Spa &"
          highlightedTitle="Massage in Seminyak"
          text="Since 2009, Spa Bali Moon has welcomed travellers and local guests with professional massage, beauty, and wellness treatments in Seminyak. Our experienced therapists provide a wide range of traditional Balinese therapies, body treatments, and beauty services at our spa or through convenient home service."
          primaryImage="/images/home/homepage-1.webp"
          secondaryImage="/images/home/homepage-2.webp"
        />
        <Step
          subTitle="Start Here"
          title="How Do You Book Your Spa Experience?"
          steps={bookingSteps}
        />
        <div className="homepage-about-paper-section section__decoration-top section__decoration-bottom bg-sub">
          <About
            subTitle="Beyond Relaxation"
            title={<>Why Spa Is Part of the Bali Experience</>}
            text="After long flights, sightseeing, surfing, or time in the tropical sun, your body needs time to recover. We offer massage, beauty, and body care treatments that ease muscle tension, refresh tired skin, and help you feel refreshed with treatments chosen to suit your body and your time in Bali. Here’s what makes us a trusted choice:"
            features={[
              "Established since 2009",
              "Traditional & modern massage treatments",
              "Beauty and facial services",
              "In-spa and home service available",
              "Experienced Balinese therapists",
              "Personalised treatment recommendations",
            ]}
            ctaHref="/seminyak/pricing"
            primaryImage="/images/home/homepage-3.webp"
            secondaryImage="/images/home/homepage-4.webp"
            googleReviews={googleReviews}
          />
        </div>
        <div className="homepage-service-slider">
          <Feature />
        </div>
        <Testimonial testimonialsData={testimonials} />
        <TreatmentCatalog
          subTitle="Signature Collection"
          title="Find Your Perfect Spa Experience"
          treatments={homepageTreatments}
        />
        <PackageIntroText
          subTitle="More to Enjoy"
          title="Looking for More Than One Treatment?"
          text="A great spa experience often includes more than one treatment. Our spa packages combine massage, facials, body scrubs, cream baths, and beauty treatments into carefully selected experiences that let you enjoy more while offering better overall value."
          note="Every package is available at our spa, and selected combinations can also be arranged as home service, making it easy to enjoy professional spa care wherever you're staying."
        />
        <div className="homepage-pricing-services-join homepage-pricing-section">
          <Pricing
            showMore
            subTitle="Spa Packages"
            title="Complete Relaxation in One Visit"
            text="Our signature spa packages combine massage, facials, cream baths, body care, and beauty treatments into a complete wellness experience while offering better value than individual bookings. Explore the collections below to find the package that suits you best."
            ctaText="Explore Packages"
          />
        </div>
        <div className="homepage-pricing-services-join homepage-services-section">
          <Services
            subTitle="Why It Matters"
            title={<>What Makes Spa Bali Moon Different</>}
            services={differentiators}
          />
        </div>
        <div className="homepage-faq-section">
          <Faq
            image="/images/homepage/homepage-2.webp"
            imageTitle="Time to Unwind"
            subTitle="Frequently Asked Questions"
            title={<>Everything You Need to Know</>}
            items={[
            {
              question: "1. Do I need to make an appointment?",
              answer:
                "Advance bookings are recommended so we can prepare your preferred therapist, treatment, and appointment time, especially during busy travel seasons.",
            },
            {
              question: "2. Can I enjoy the treatments without visiting the spa?",
              answer:
                "Yes. Many of our massage and spa treatments are available as home service for villas, hotels, and private residences around Seminyak.",
            },
            {
              question: "3. Which massage is best if I've never had one before?",
              answer:
                "Balinese Massage is often recommended for first time guests because it combines relaxation, gentle stretching, and traditional massage techniques suitable for most people.",
            },
            {
              question: "4. Can I combine different treatments in one visit?",
              answer:
                "Absolutely. Many guests pair massage with facials, body scrubs, cream baths, manicure, pedicure, or waxing to create a more complete spa experience.",
            },
            {
              question: "5. How do I choose the right treatment?",
              answer:
                "Tell us how you're feeling or what you'd like to achieve, whether that's relaxation, muscle recovery, skin care, or simply time to unwind. We'll happily recommend the most suitable treatment for you.",
            },
            {
              question: "6. Is Spa Bali Moon a licensed spa?",
              answer:
                "Yes. We are an established spa operating from a physical location at Jl. Pangkung Sari No. 30, Seminyak, and have served guests in Bali since 2009. Our home service is delivered by the same therapists who work in our spa, and you are welcome to visit us in person before booking.",
            },
            ]}
          />
        </div>
        <div className="homepage-closing-section section__decoration-top section__decoration-bottom bg-sub">
          <ReserveCta
            standardSpacing
            title="A Better Way to Experience Wellness in Bali"
            text="Bali is made for exploring, from beach mornings and surfing sessions to long afternoons discovering the island. After a full day, giving your body time to recover can make every part of your holiday even more enjoyable. At Spa Bali Moon, you'll find professional massage, beauty, and wellness treatments that help ease tired muscles, refresh your skin, and create a welcome pause from a busy itinerary."
            closingText="Visit our spa in Seminyak or enjoy the same trusted care through our home service, delivered by experienced therapists directly to your villa or hotel."
            backgroundImage="/images/home/homepage-5.webp"
          />
        </div>
      </Layout>
      <style jsx global>{`
        /* The gold second line competed with the logo and the header CTA for
           attention, so the whole headline is now set in the heading colour. */
        .banner-five-area .banner-five__content .title,
        .banner-five-area .banner-five__content .title span {
          color: var(--headings-color);
        }

        .banner-five-area .banner-five__content .title {
          font-size: clamp(72px, 5.75vw, 80px);
          line-height: 1.08;
        }

        /* Capped at the 72px the rule above bottoms out at, so the headline does
           not jump back up a size when the viewport crosses 992px. */
        @media (max-width: 991px) {
          .banner-five-area .banner-five__content .title {
            font-size: clamp(54px, 8vw, 72px);
          }
        }

        @media (max-width: 575px) {
          .banner-five-area .banner-five__content .title {
            font-size: clamp(38px, 11vw, 52px);
            line-height: 1.1;
          }
        }

        .homepage-pricing-section .pricing-section-five {
          padding-bottom: 0 !important;
        }

        .homepage-faq-section .faq-section {
          padding-bottom: 100px;
        }

        .homepage-faq-section .faq-section .content-column .inner-column {
          background-color: var(--theme-color-white);
        }

        .homepage-faq-section .faq-section .accordion .accordion-item {
          border-bottom-color: rgba(var(--theme-color-black-rgb), 0.14);
        }

        .homepage-faq-section
          .faq-section
          .accordion
          .accordion-item
          .accordion-header
          button {
          color: var(--headings-color);
        }

        /* #707070 clears AA on white by a hair (4.95:1). Darken it so the
           answers stay comfortable to read on the lighter panel. */
        .homepage-faq-section .faq-section .accordion .accordion-body,
        .homepage-faq-section .faq-section .accordion .accordion-body p {
          color: #5f5a54;
        }

        @media (min-width: 1400px) {
          .homepage-faq-section .faq-section .content-column .inner-column {
            padding: 70px;
          }

          /* The image keeps its natural aspect and so drives the row height.
             Take it out of the flow so the accordion column sets the height
             and the photo just fills whatever is left. */
          .homepage-faq-section .faq-section .image-column {
            display: flex;
          }

          .homepage-faq-section .faq-section .image-column .inner-column {
            flex: 1;
            min-height: 0;
          }

          .homepage-faq-section .faq-section .image-column .inner-column img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        /* Below the xxl breakpoint the two columns stack, and a portrait image
           at full container width becomes taller than the viewport. Cap it. */
        @media (max-width: 1399px) {
          .homepage-faq-section .faq-section .image-column .inner-column {
            aspect-ratio: 16 / 9;
          }

          .homepage-faq-section .faq-section .image-column .inner-column img {
            height: 100%;
            object-position: center 35%;
          }
        }

        @media (max-width: 767px) {
          .homepage-faq-section .faq-section .image-column .inner-column {
            aspect-ratio: 4 / 3;
          }
        }

        .homepage-about-paper-section + .homepage-service-slider .feature-section {
          padding-top: 130px;
        }

        .homepage-service-slider .feature-block .inner-box .image-box {
          width: 44%;
          max-width: 320px;
          flex: 0 0 44%;
          aspect-ratio: 63 / 58;
        }

        .homepage-service-slider .feature-block .inner-box .image-box img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }

        .homepage-about-paper-section .about-section-three .image-column .inner-column {
          align-items: flex-end;
        }

        @media (max-width: 767px) {
          /* Overlaps the intro paragraph on phones, and the floating WhatsApp
             button already covers the same action. !important because the
             component sets display:flex as an inline style. */
          .banner-five-area .banner-five__content .info .video-btn {
            display: none !important;
          }

          /* The 190px top padding makes room for the banner images, which are
             display:none at this width, so it is dead space above the heading. */
          .banner-five-area {
            padding-top: 50px;
          }
        }

        @media (max-width: 576px) {
          /* Below this width the theme shrinks both images to 200px/120px but
             leaves the column full width, so the absolutely positioned review
             card either sits far off to the right of them or lands on top of
             the left image. Put it in the flow above the pair instead. */
          .homepage-about-paper-section
            .about-section-three
            .image-column
            .inner-column {
            flex-wrap: wrap;
            align-items: stretch;
          }

          /* Drop the 200px/120px caps so the pair splits the row evenly, and
             let the shorter one crop rather than stop short of the taller. */
          .homepage-about-paper-section
            .about-section-three
            .image-column
            .inner-column
            .image,
          .homepage-about-paper-section
            .about-section-three
            .image-column
            .inner-column
            .image2 {
            flex: 1 1 0;
            min-width: 0;
            max-width: none;
          }

          .homepage-about-paper-section
            .about-section-three
            .image-column
            .inner-column
            .image1,
          .homepage-about-paper-section
            .about-section-three
            .image-column
            .inner-column
            .image2 {
            width: 100%;
            height: 100%;
            max-width: none;
            object-fit: cover;
          }

          /* Card follows the images in the DOM, so dropping it out of absolute
             positioning and giving it the full row puts it underneath them. */
          .homepage-about-paper-section
            .about-section-three
            .image-column
            .inner-column
            .info {
            position: static;
            width: 100%;
          }

          .homepage-faq-section
            .faq-section
            .section-header
            .sub-title {
            font-size: 15px;
            line-height: 24px;
            white-space: nowrap;
          }
        }

        .homepage-pricing-section .pricing-section-five::after,
        .homepage-services-section .service-section::before {
          display: none;
        }

        @media (max-width: 767px) {
          .homepage-faq-section .faq-section {
            padding-bottom: 18px;
          }

          .homepage-service-slider .feature-block .inner-box {
            flex-direction: column;
            align-items: stretch;
            /* The theme drops this to 10px below 470px, which leaves the image
               and text almost touching the card edge. Keep the full 20px, with
               a little extra on top: the image carries the same 30px corner
               radius as the card, so equal padding makes the two curves sit
               almost on top of each other and the top reads as cramped. */
            padding: 32px 20px 20px;
          }

          .homepage-service-slider .feature-block .inner-box .image-box {
            width: 100%;
            max-width: none;
            flex: none;
          }

          .homepage-service-slider .feature-block .inner-box .content-box {
            gap: 24px;
          }

        }

      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const googleReviews = await getGoogleReviews();

  return {
    props: { googleReviews },
    // Google's terms cap caching of Places data at 30 days; a daily refresh keeps the
    // rating current while costing ~30 Places requests per month.
    revalidate: 86400,
  };
}
