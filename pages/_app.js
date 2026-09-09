import "swiper/css";
import "swiper/css/navigation";
import "lenis/dist/lenis.css";
import '../public/css/bootstrap.min.css';
import '../public/css/style-dark.css';
import '../public/css/style.css';
import { useEffect, useState } from "react";
import Lenis from "lenis";

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // Timing is unchanged; the timeout is just tracked so it can be cleared.
        // (While the stylesheet was still ~1MB, hydration ran long enough that
        // this teardown landed before the browser had painted the preloader at
        // all, and first paint slipped to ~1.25s. With the CSS trimmed it paints
        // at ~0.23s, as intended.)
        const timer = window.setTimeout(() => setLoading(false), 1000);
        return () => window.clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const lenis = new Lenis({
            autoRaf: true,
            smoothWheel: true,
            // A slightly lower lerp keeps the smooth scroll feeling relaxed
            // without making wheel and trackpad navigation feel sluggish.
            lerp: 0.06,
            anchors: true,
            stopInertiaOnNavigate: true,
        });

        return () => {
            lenis.destroy();
        };
    }, []);
    // The page always renders; the preloader is a fixed, full-screen overlay on top of
    // it. Swapping the two out instead would leave the server HTML empty, so crawlers
    // (and JSON-LD, and <title>) would see nothing but the loading screen.
    return (<>
        <Component {...pageProps} />
        {loading && (
            <div id="preloader">
                <div className="animation-preloader">
                    <div className="preloader-mark">
                        <img
                            className="preloader-logo"
                            fetchPriority="high"
                            decoding="async"
                            src="/images/logo/sbm.webp"
                            alt="Spa Bali Moon logo"
                        />
                    </div>
                    <div className="preloader-brand">Spa Bali Moon</div>
                    <p className="text-center">Loading...</p>
                </div>
                <div className="loader">
                    <div className="row">
                        <div className="col-3 loader-section section-left">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-left">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg"></div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>)
}

export default MyApp
