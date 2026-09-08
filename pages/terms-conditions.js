import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import TermsConditionsInner from "../components/sections/TermsConditionsInner";

export default function TermsConditions() {
    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="two">
                <PageTitle pageName="Terms & Conditions" />
                <TermsConditionsInner />
            </Layout>
        </>
    );
}
