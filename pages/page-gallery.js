import React from 'react';
import Layout from "../components/layout/Layout";
import ProjectGrid from "../components/sections/Gallery";
import PageTitle from "../components/sections/PageTitle";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="four">
                <PageTitle pageName="Gallery" />
                <ProjectGrid />
            </Layout>
        </>
    )
}
