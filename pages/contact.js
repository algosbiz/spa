import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ContactInner from "../components/sections/ContactInner";
import Banner from "../components/sections/Home2/Banner";
export default function Home() {

    return (
      <>
        <Layout HeaderStyle="one" FooterStyle="two">
          <Banner
            subTitle="Ready When You Are"
            titleSpan="Book Your Spa"
            title="Experience in Seminyak"
            buttonText="Contact Us"
          />
          <ContactInner
            formSubTitle="Get in Touch"
            formTitle="How Can We Help?"
            infoSubTitle="Questions or Bookings"
            infoTitle="Let’s Arrange Your Visit"
            infoText="Contact Spa Bali Moon to check availability, ask about treatments and packages, or arrange a massage and spa service at our Seminyak location or through selected home service options."
            contactItems={[
              {
                icon: "fa-phone-plus",
                title: "WhatsApp Message",
                href: "https://wa.me/6287863175144",
                text: "+62 878-6317-5144",
              },
              {
                icon: "fa-location-dot",
                title: "Visit anytime",
                text: "Jl. Pangkung Sari No. 30 Petitenget, Seminyak, Kerobokan Kuta Utara, Badung, Bali 80361",
              },
              {
                icon: "fa-clock",
                title: "Opening Times",
                text: "Open Daily: 9:00 - 22:00",
              },
            ]}
          />
        </Layout>
      </>
    );
}
