import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>{headTitle ? headTitle : "Sparelx - Spa Saloon React Next JS Template"}</title>
                <Link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
                <Link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400&display=swap" rel="stylesheet" />
            </Head>
        </>
    );
};

export default PageHead;