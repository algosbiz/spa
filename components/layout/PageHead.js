import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>{headTitle ? headTitle : "Sparelx - Spa Saloon React Next JS Template"}</title>
                <Link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
                <Link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400&display=swap" rel="stylesheet" />
            </Head>
        </>
    );
};

export default PageHead;