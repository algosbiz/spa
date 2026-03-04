import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ShopCart from "../components/sections/ShopCart";

export default function PageShopCart() {
    return (
        <>
          <Layout HeaderStyle="one" FooterStyle="four">
            <PageTitle pageName="Shop Cart" />
            <ShopCart />
          </Layout>
        </>
    );
}
