import { Html, Head, Main, NextScript } from 'next/document'

// Exists mainly so the served markup carries a language: without <html lang>,
// screen readers fall back to the user's system voice for English content.
export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
