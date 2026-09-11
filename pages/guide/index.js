import React from 'react';
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";
import NewsGrid from "../../components/sections/NewsGrid";
import { getPublishedPosts } from "@/lib/posts";
import { seoFor } from "@/lib/seo";

// The live site serves the blog index at /guide/ (and 301s /blog to it), so
// this page owns that route. Title and description come from lib/seo.js.
const PAGE_SEO_ROUTE = '/guide';
const PAGE_SEO = seoFor(PAGE_SEO_ROUTE);

export default function BlogPage({ posts }) {
    return (
        <Layout
            HeaderStyle="one"
            FooterStyle="two"
            headTitle={PAGE_SEO.title}
            metaDescription={PAGE_SEO.description}
            canonicalPath={PAGE_SEO_ROUTE}
        >
            <PageTitle
                pageName="Blog"
                backgroundImage="/images/blog/blog-1.webp"
            />
            <NewsGrid posts={posts} />
        </Layout>
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
