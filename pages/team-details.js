import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import TeamDetails from "../components/sections/TeamDetails";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="four" robots="noindex, nofollow">
                <PageTitle pageName="Team Details" />
                <TeamDetails />
            </Layout>
        </>
    )
}
