import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import TermsConditionsInner from "../components/sections/TermsConditionsInner";
import { seoFor } from "@/lib/seo";

const PAGE_SEO_ROUTE = "/terms-and-conditions";
const PAGE_SEO = seoFor(PAGE_SEO_ROUTE);

export default function TermsConditions() {
    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="two" headTitle={PAGE_SEO.title} metaDescription={PAGE_SEO.description} canonicalPath={PAGE_SEO_ROUTE}>
                <PageTitle pageName="Terms & Conditions" />
                <TermsConditionsInner />
            </Layout>
        </>
    );
}
