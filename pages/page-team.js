import React from 'react';
import Layout from "../components/layout/Layout";
import TeamGrid from "../components/sections/TeamGrid";
import PageTitle from "../components/sections/PageTitle";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="four">
                <PageTitle pageName="Team Grid" />
                <TeamGrid />
            </Layout>
        </>
    )
}
