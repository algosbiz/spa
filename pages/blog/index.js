import React from 'react';
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";
import NewsGrid from "../../components/sections/NewsGrid";
import { getPublishedPosts } from "@/lib/posts";

export default function BlogPage({ posts }) {
    return (
        <>
            <Layout HeaderStyle="one" FooterStyle="two">
                <PageTitle pageName="Blog" />
                <NewsGrid posts={posts} />
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    let posts = [];
    try {
        posts = await getPublishedPosts();
    } catch (e) {
        console.error('Failed to load posts for /blog:', e.message);
    }
    return {
        props: { posts },
        revalidate: 60, // rebuild this page at most once per minute when traffic comes in
    };
}
