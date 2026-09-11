import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import WellnessInBaliInner from "../components/sections/WellnessInBaliInner";
import { seoFor } from "@/lib/seo";

const PAGE_SEO_ROUTE = "/wellness-in-bali";
const PAGE_SEO = seoFor(PAGE_SEO_ROUTE);

export default function WellnessInBali() {
    return (
        <Layout
            HeaderStyle="one"
            FooterStyle="two"
            headTitle={PAGE_SEO.title}
            metaDescription={PAGE_SEO.description}
            canonicalPath={PAGE_SEO_ROUTE}
        >
            <PageTitle pageName="Wellness Guide in Bali" />
            <WellnessInBaliInner />
        </Layout>
    );
}
