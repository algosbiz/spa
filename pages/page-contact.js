import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ContactInner from "../components/sections/ContactInner";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="four">
                <PageTitle pageName="Contact Us" />
                <ContactInner />
            </Layout>
        </>
    )
}
