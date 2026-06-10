import React from 'react';
import Head from 'next/head';
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";
import BlogDetails from "../../components/sections/BlogDetails";
import { getPostBySlug, getAllPublishedSlugs, getPublishedPosts } from "@/lib/posts";
import { sanitizeHtml } from "@/lib/sanitize";

export default function BlogDetailPage({ post, recentPosts }) {
    const metaTitle = post.seo_title || post.title;
    const metaDesc = post.seo_description || post.excerpt || '';

    return (
        <>
            <Head>
                <title>{metaTitle}</title>
                {metaDesc && <meta name="description" content={metaDesc} />}
                <meta property="og:title" content={metaTitle} />
                {metaDesc && <meta property="og:description" content={metaDesc} />}
                {post.cover_image && <meta property="og:image" content={post.cover_image} />}
                <meta property="og:type" content="article" />
            </Head>
            <Layout HeaderStyle="one" FooterStyle="four">
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
        fallback: 'blocking', // new posts render on first request without a full rebuild
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

    // Sanitize the admin HTML server-side before it ever reaches the browser.
    post.content_html = sanitizeHtml(post.content_html);

    let recentPosts = [];
    try {
        const all = await getPublishedPosts(4);
        recentPosts = all.filter((p) => p.slug !== post.slug).slice(0, 3);
    } catch (e) {
        console.error('recentPosts failed:', e.message);
    }

    return {
        props: { post, recentPosts },
        revalidate: 60,
    };
}
