import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import PrivacyPolicyInner from "../components/sections/PrivacyPolicyInner";

export default function PrivacyPolicy() {
    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="two">
                <PageTitle pageName="Privacy Policy" />
                <PrivacyPolicyInner />
            </Layout>
        </>
    );
}
