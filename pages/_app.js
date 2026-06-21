import "swiper/css";
import "swiper/css/navigation";
import '../public/css/bootstrap.min.css';
import '../public/css/style-dark.css';
import '../public/css/style.css';
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
    return (<>
        {!loading ? (
            <Component {...pageProps} />
        ) : (
            <div id="preloader">
                <div className="animation-preloader">
                    <div className="spinner"/>
                    <div className="txt-loading">
                        <span data-text-preloader="S" className="letters-loading">
                            S
                        </span>
                        <span data-text-preloader="P" className="letters-loading">
                            P
                        </span>
                        <span data-text-preloader="A" className="letters-loading">
                            A
                        </span>
                        <span className="letters-loading word-space">&nbsp;</span>
                        <span data-text-preloader="B" className="letters-loading">
                            B
                        </span>
                        <span data-text-preloader="A" className="letters-loading">
                            A
                        </span>
                        <span data-text-preloader="L" className="letters-loading">
                            L
                        </span>
                        <span data-text-preloader="I" className="letters-loading">
                            I
                        </span>
                        <span className="letters-loading word-space">&nbsp;</span>
                        <span data-text-preloader="M" className="letters-loading">
                            M
                        </span>
                        <span data-text-preloader="O" className="letters-loading">
                            O
                        </span>
                        <span data-text-preloader="O" className="letters-loading">
                            O
                        </span>
                        <span data-text-preloader="N" className="letters-loading">
                            N
                        </span>
                    </div>
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
