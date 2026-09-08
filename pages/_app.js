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
        setTimeout(() => {
            setLoading(false);
        }, 1000);
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
