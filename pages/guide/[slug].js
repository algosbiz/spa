import React from 'react';
import Head from 'next/head';
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";
import BlogDetails from "../../components/sections/BlogDetails";
import { getPostBySlug, getAllPublishedSlugs, getPublishedPosts } from "@/lib/posts";
import { sanitizeHtml } from "@/lib/sanitize";

export default function GuideDetailPage({ post, recentPosts }) {
    const metaTitle = post.seo_title || post.title;
    const metaDesc = post.seo_description || post.excerpt || '';
    const canonicalUrl = `https://spabalimoon.com/guide/${post.slug}`;

    return (
        <>
            <Head>
                <title>{metaTitle}</title>
                {metaDesc && <meta name="description" content={metaDesc} />}
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:title" content={metaTitle} />
                {metaDesc && <meta property="og:description" content={metaDesc} />}
                {post.cover_image && <meta property="og:image" content={post.cover_image} />}
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:type" content="article" />
            </Head>
            <Layout HeaderStyle="one" FooterStyle="two">
                <PageTitle pageName={post.title} />
                <BlogDetails post={post} recentPosts={recentPosts} />
            </Layout>
        </>
    );
}

export async function getStaticPaths() {
    let slugs = [];
    try {
        slugs = await getAllPublishedSlugs();
    } catch (e) {
        console.error('getStaticPaths failed:', e.message);
    }
    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: 'blocking',
    };
}

export async function getStaticProps({ params }) {
    let post = null;
    try {
        post = await getPostBySlug(params.slug);
    } catch (e) {
        console.error('getStaticProps failed:', e.message);
    }

    if (!post) {
        return { notFound: true, revalidate: 30 };
    }

    post.content_html = sanitizeHtml(post.content_html);

    let recentPosts = [];
    try {
        const all = await getPublishedPosts(4);
        recentPosts = all.filter((item) => item.slug !== post.slug).slice(0, 3);
    } catch (e) {
        console.error('recentPosts failed:', e.message);
    }

    return {
        props: { post, recentPosts },
        revalidate: 60,
    };
}
