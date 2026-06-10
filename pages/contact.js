import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ContactInner from "../components/sections/ContactInner";
import Banner from "../components/sections/Home2/Banner";
export default function Home() {

    return (
      <>
        <Layout HeaderStyle="one" FooterStyle="two">
          <Banner />
          <ContactInner />
        </Layout>
      </>
    );
}
