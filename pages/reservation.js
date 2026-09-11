import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home2/Banner";
import BookTreatment from "../components/sections/Reservation/BookTreatment";
import { seoFor } from "@/lib/seo";

const PAGE_SEO_ROUTE = "/reservation";
const PAGE_SEO = seoFor(PAGE_SEO_ROUTE);

export default function Home2() {
    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="two" headTitle={PAGE_SEO.title} metaDescription={PAGE_SEO.description} canonicalPath={PAGE_SEO_ROUTE}>
                {/* <Banner /> */}
                <BookTreatment />
            </Layout>
        </>
    );
}
