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
        // This used to be a flat 1000ms after hydration. PageSpeed scores what
        // is on screen over time, not what is in the DOM, so a full second of
        // loading overlay was paid for twice: once in Speed Index, and again in
        // LCP wherever the hero behind it would otherwise have been the largest
        // paint. By the time this effect runs the page underneath is already
        // hydrated, so the only thing left worth waiting for is one painted
        // frame. The floor keeps the overlay from flashing on a fast
        // connection; the ceiling is the old 1000ms, kept as a backstop in case
        // a frame never arrives. Raise MIN_VISIBLE_MS if the brand moment
        // should linger -- it is the only number here that is taste, not
        // measurement.
        const MIN_VISIBLE_MS = 250;
        let settled = false;
        const clear = () => {
            if (settled) return;
            settled = true;
            setLoading(false);
        };

        const floor = window.setTimeout(() => {
            // Two frames: the first is scheduled before paint, the second runs
            // after it, so the page underneath is genuinely on screen.
            window.requestAnimationFrame(() => window.requestAnimationFrame(clear));
        }, MIN_VISIBLE_MS);
        const ceiling = window.setTimeout(clear, 1000);

        return () => {
            window.clearTimeout(floor);
            window.clearTimeout(ceiling);
        };
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
                        {/* Lowercase on purpose. React 18.2 does not know the
                            camelCase `fetchPriority` prop (it landed in 18.3),
                            so it forwarded it as an unknown attribute and
                            logged a warning on every page. HTML attributes are
                            case-insensitive, so the lowercase spelling reaches
                            the browser identically and the warning is gone. */}
                        <img
                            className="preloader-logo"
                            fetchpriority="high"
                            decoding="async"
                            src="/images/logo/sbm.webp"
                            alt="Spa Bali Moon logo"
                            width="280"
                            height="219"
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
