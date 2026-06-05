import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Home2/Banner";
import BookTreatment from "../components/sections/Reservation/BookTreatment";

export default function Home2() {
    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="two">
                {/* <Banner /> */}
                <BookTreatment />
            </Layout>
        </>
    );
}
