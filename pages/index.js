import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home5/Banner";
import About from "../components/sections/Home3/About";
import Services from "../components/sections/Home1/Services";
import Pricing from "../components/sections/Home5/Pricing";
import Step from "../components/sections/Home5/Step";
import PackageSection from "@/components/sections/Home1/Package";
import Faq from "../components/sections/Home6/Faq";
import PackageIntroText from "../components/sections/Home1/PackageIntroText";
import ReserveCta from "../components/sections/Home1/ReserveCta";
import Feature from "../components/sections/Home1/Feature";
import Testimonial from "../components/sections/Home3/Testimonial";

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

const signatureTreatments = [
  {
    id: 1,
    name: "Couple Massage",
    desc: "Relax side by side with a shared massage experience designed for couples, friends, or family members seeking quality time together.",
    image: "/images/package/package-image1.png",
    options: [],
  },
  {
    id: 2,
    name: "Shiatsu Massage",
    desc: "Traditional Japanese pressure point therapy performed without oil to help release tension and restore the body's natural balance.",
    image: "/images/package/package-image2.png",
    options: [],
  },
  {
    id: 3,
    name: "Thai Massage",
    desc: "Assisted stretching and rhythmic pressure work together to improve flexibility, mobility, and overall body movement.",
    image: "/images/package/package-image3.png",
    options: [],
  },
  {
    id: 4,
    name: "Cream Bath",
    desc: "A nourishing hair and scalp treatment that conditions the hair while helping you unwind through a relaxing scalp massage.",
    image: "/images/package/package-image4.png",
    options: [],
  },
  {
    id: 5,
    name: "Body Scrub",
    desc: "Natural exfoliation that removes dead skin cells, leaving the skin smoother, softer, and ready to absorb moisture more effectively.",
    image: "/images/package/package-image5.png",
    options: [],
  },
  {
    id: 6,
    name: "Manicure & Pedicure",
    desc: "Professional hand and foot care that keeps nails neat while helping maintain healthy-looking skin and cuticles.",
    image: "/images/package/package-image6.png",
    options: [],
  },
  {
    id: 7,
    name: "Hot Stone Massage",
    desc: "Warm volcanic stones combined with massage techniques help ease muscle tightness and create a deeply relaxing experience.",
    image: "/images/package/package-image7.png",
    options: [],
  },
  {
    id: 8,
    name: "Facial Care",
    desc: "Personalised facial treatments that cleanse, hydrate, and refresh the skin to support a healthier, more radiant complexion.",
    image: "/images/package/package-image8.png",
    options: [],
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

export default function Home5() {
  return (
    <>
      <Layout HeaderStyle="one" FooterStyle="two">
        <Banner
          title="Traditional Spa &"
          highlightedTitle="Massage in Seminyak"
          text="Since 2009, Spa Bali Moon has welcomed travellers and local guests with professional massage, beauty, and wellness treatments in Seminyak. Our experienced therapists provide a wide range of traditional Balinese therapies, body treatments, and beauty services at our spa or through convenient home service."
        />
        <Step
          subTitle="Start Here"
          title="How Do You Book Your Spa Experience?"
          steps={bookingSteps}
        />
        <About
          subTitle="Beyond Relaxation"
          title={<>Why Spa Is Part of the Bali Experience</>}
          text="A spa treatment is more than a chance to relax. After long flights, sightseeing, surfing, or time in the tropical sun, your body needs time to recover. Spa Bali Moon offers massage, beauty, and body care treatments that ease muscle tension, refresh tired skin, and helping you feel refreshed with treatments chosen to suit your body and your time in Bali."
          features={[
            "Established since 2009",
            "Traditional & modern massage treatments",
            "Beauty and facial services",
            "In-spa and home service available",
            "Experienced Balinese therapists",
            "Personalised treatment recommendations",
          ]}
          ctaHref="/page-services"
        />
        <Feature />
        <Testimonial
          testimonialsData={[
            {
              image: "/images/testimonial/testimonial-two-image1.png",
              name: "Putu Ayu",
              designation: "Loyal Customer",
              text: "Layanan di sini sangat luar biasa! Saya merasa jauh lebih segar setelah melakukan perawatan massage. Terapisnya sangat profesional.",
              stars: 5,
            },
            {
              image: "/images/testimonial/testimonial-two-image2.png",
              name: "Made Suardana",
              designation: "Happy Client",
              text: "Tempat yang sangat tenang dan nyaman. Fasilitasnya sangat lengkap dan stafnya ramah-ramah. Sangat direkomendasikan!",
              stars: 5,
            },
            {
              image: "/images/testimonial/testimonial-two-image3.png",
              name: "Nyoman Sari",
              designation: "Relaxed Guest",
              text: "Saya sering ke sini untuk spa bulanan. Hasilnya selalu memuaskan dan harga yang ditawarkan sangat kompetitif.",
              stars: 5,
            },
            {
              image: "/images/testimonial/testimonial-two-image1.png",
              name: "Ketut Wijaya",
              designation: "New Client",
              text: "Pertama kali ke sini dan langsung suka! Pelayanannya cepat dan hasilnya instan terasa di tubuh.",
              stars: 5,
            },
          ]}
        />
        <PackageSection
          subTitle="Signature Collection"
          title="Find Your Perfect Spa Experience"
          firstServices={signatureTreatments}
          secondServices={signatureTreatments}
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
        <Faq
          showImage={false}
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
          ]}
        />
        <div className="section__decoration-top section__decoration-bottom bg-sub pt-100 pb-100">
          <ReserveCta
            title="A Better Way to Experience Wellness in Bali"
            text="Bali is made for exploring, from beach mornings and surfing sessions to long afternoons discovering the island. After a full day, giving your body time to recover can make every part of your holiday even more enjoyable. At Spa Bali Moon, you'll find professional massage, beauty, and wellness treatments that help ease tired muscles, refresh your skin, and create a welcome pause from a busy itinerary."
            closingText="Visit our spa in Seminyak or enjoy the same trusted care through our home service, delivered by experienced therapists directly to your villa or hotel."
          />
        </div>
      </Layout>
      <style jsx global>{`
        .banner-five-area .banner-five__content .title {
          font-size: clamp(72px, 5.75vw, 100px);
          line-height: 1.08;
        }

        @media (max-width: 991px) {
          .banner-five-area .banner-five__content .title {
            font-size: clamp(54px, 8vw, 80px);
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

        .homepage-pricing-section .pricing-section-five::after,
        .homepage-services-section .service-section::before {
          display: none;
        }
      `}</style>
    </>
  );
}
