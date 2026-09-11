import React from 'react';
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";
import BlogDetails from "../../components/sections/BlogDetails";
import { getPostBySlug, getAllPublishedSlugs, getPublishedPosts } from "@/lib/posts";
import { sanitizeHtml } from "@/lib/sanitize";

export default function GuideDetailPage({ post, recentPosts, prevPost, nextPost, morePosts }) {
    const metaTitle = post.seo_title || post.title;
    const metaDesc = post.seo_description || post.excerpt || '';
    const canonicalPath = `/guide/${post.slug}`;

    return (
        <Layout
            HeaderStyle="one"
            FooterStyle="two"
            headTitle={metaTitle}
            metaDescription={metaDesc}
            canonicalPath={canonicalPath}
            ogImage={post.cover_image}
            ogType="article"
        >
            <PageTitle pageName={post.title} backgroundImage={post.cover_image} />
            <BlogDetails
                post={post}
                recentPosts={recentPosts}
                prevPost={prevPost}
                nextPost={nextPost}
                morePosts={morePosts}
            />
        </Layout>
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

    // getPublishedPosts() comes back newest-first, so the neighbour one slot
    // later in the list is the older post ("Previous") and one slot earlier is
    // the newer one ("Next").
    let recentPosts = [];
    let prevPost = null;
    let nextPost = null;
    let morePosts = [];
    try {
        const all = await getPublishedPosts();
        const i = all.findIndex((item) => item.slug === post.slug);
        prevPost = i >= 0 ? all[i + 1] || null : null;
        nextPost = i > 0 ? all[i - 1] || null : null;

        const others = all.filter((item) => item.slug !== post.slug);
        recentPosts = others.slice(0, 3);

        // Prefer articles the reader can't already reach from Previous/Next, so
        // the bottom grid widens the choice instead of repeating it.
        const neighbours = new Set([prevPost?.slug, nextPost?.slug].filter(Boolean));
        const unseen = others.filter((item) => !neighbours.has(item.slug));
        morePosts = [...unseen, ...others.filter((item) => neighbours.has(item.slug))].slice(0, 3);
    } catch (e) {
        console.error('related posts failed:', e.message);
    }

    return {
        props: { post, recentPosts, prevPost, nextPost, morePosts },
        revalidate: 60,
    };
}
