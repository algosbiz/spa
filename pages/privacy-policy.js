import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import PrivacyPolicyInner from "../components/sections/PrivacyPolicyInner";
import { seoFor } from "@/lib/seo";

const PAGE_SEO_ROUTE = "/privacy-policy";
const PAGE_SEO = seoFor(PAGE_SEO_ROUTE);

export default function PrivacyPolicy() {
    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="two" headTitle={PAGE_SEO.title} metaDescription={PAGE_SEO.description} canonicalPath={PAGE_SEO_ROUTE}>
                <PageTitle pageName="Privacy Policy" />
                <PrivacyPolicyInner />
            </Layout>
        </>
    );
}
