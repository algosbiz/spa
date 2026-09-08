import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import Testimonial from "../components/sections/Home2/Testimonial";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="four">
                <PageTitle pageName="Testimonials" />
                <Testimonial />
            </Layout>
        </>
    )
}
