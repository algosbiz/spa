import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function PortfolioFilter1() {
    const isotopeContainer = useRef(null);
    const [filterKey, setFilterKey] = useState("*");
    const [isotopeInstance, setIsotopeInstance] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            import("isotope-layout")
                .then(({ default: Isotope }) => {
                    if (isotopeContainer.current) {
                        const instance = new Isotope(isotopeContainer.current, {
                            itemSelector: ".masonry-item",
                            percentPosition: true,
                            masonry: {
                                columnWidth: ".masonry-item",
                            },
                            animationOptions: {
                                duration: 750,
                                easing: "linear",
                                queue: false,
                            },
                        });
                        setIsotopeInstance(instance);
                    }
                })
                .catch((error) => {
                    console.error("Failed to load Isotope:", error);
                });
        }
    }, []);

    useEffect(() => {
        if (isotopeInstance) {
            isotopeInstance.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` });
        }
    }, [filterKey, isotopeInstance]);

    const handleFilterKeyChange = (key) => () => {
        setFilterKey(key);
    };

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter");

    return (
        <>
            <div className="filters clearfix">
                <ul className="filter-tabs filter-btns clearfix">
                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>
                        All
                    </li>
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>
                        Lotion
                    </li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>
                        Oil
                    </li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>
                        Message
                    </li>
                    <li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}>
                        Facial
                    </li>
                    <li className={activeBtn("cat-5")} onClick={handleFilterKeyChange("cat-5")}>
                        Cream
                    </li>
                </ul>
            </div>
            <div className="items-container row" ref={isotopeContainer}>
                {/* Your product blocks here */}
                <div className="product-block masonry-item small-column all cat-2 product lenses mb-50 col-lg-3 col-md-6">
                    <div className="inner-box">
                        <div className="image-box">
                            <div className="image">
                                <Link href="/shop-product-details">
                                    <img src="/images/resource/product1-1.jpg" alt="Image" />
                                </Link>
                            </div>
                            <div className="icon-box">
                                <Link href="/shop-product-details" className="ui-btn">
                                    <i className="fa fa-heart"></i>
                                </Link>
                                <Link href="shop-cart" className="ui-btn">
                                    <i className="fa fa-shopping-cart"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="content-box py-3">
                            <div className="inner">
                                <span className="price">70$.00 - 90$.00</span>
                                <h4 className="title">
                                    <Link href="/shop-product-details">Glow Facial Cream</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-block masonry-item small-column all cat-1 cat-2 product lenses mb-50 col-lg-3 col-md-6">
                    <div className="inner-box">
                        <div className="image-box">
                            <div className="image">
                                <Link href="/shop-product-details">
                                    <img src="/images/resource/product1-2.jpg" alt="Image" />
                                </Link>
                            </div>
                            <div className="icon-box">
                                <Link href="/shop-product-details" className="ui-btn">
                                    <i className="fa fa-heart"></i>
                                </Link>
                                <Link href="shop-cart" className="ui-btn">
                                    <i className="fa fa-shopping-cart"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="content-box py-3">
                            <div className="inner">
								<span className="price">90$.00 - 70$.00</span>
                                <h4 className="title">
                                    <Link href="/shop-product-details">Hair Treatment</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-block masonry-item small-column all cat-1 cat-2 cat-4 product lenses mb-50 col-lg-3 col-md-6">
                    <div className="inner-box">
                        <div className="image-box">
                            <div className="image">
                                <Link href="/shop-product-details">
                                    <img src="/images/resource/product1-3.jpg" alt="Image" />
                                </Link>
                            </div>
                            <div className="icon-box">
                                <Link href="/shop-product-details" className="ui-btn">
                                    <i className="fa fa-heart"></i>
                                </Link>
                                <Link href="shop-cart" className="ui-btn">
                                    <i className="fa fa-shopping-cart"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="content-box py-3">
                            <div className="inner">
                                <span className="price">70$.00</span>
                                <h4 className="title">
                                    <Link href="/shop-product-details">Massage Cream</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-block masonry-item small-column all cat-1 cat-3  product lenses mb-50 col-lg-3 col-md-6">
                    <div className="inner-box">
                        <div className="image-box">
                            <div className="image">
                                <Link href="/shop-product-details">
                                    <img src="/images/resource/product1-4.jpg" alt="Image" />
                                </Link>
                            </div>
                            <div className="icon-box">
                                <Link href="/shop-product-details" className="ui-btn">
                                    <i className="fa fa-heart"></i>
                                </Link>
                                <Link href="shop-cart" className="ui-btn">
                                    <i className="fa fa-shopping-cart"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="content-box py-3">
                            <div className="inner">
                                <span className="price">50$.00</span>
                                <h4 className="title">
                                    <Link href="/shop-product-details">Body Message Oil</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-block masonry-item small-column all cat-1 cat-3 cat-5 product lenses mb-50 col-lg-3 col-md-6">
                    <div className="inner-box">
                        <div className="image-box">
                            <div className="image">
                                <Link href="/shop-product-details">
                                    <img src="/images/resource/product1-4.jpg" alt="Image" />
                                </Link>
                            </div>
                            <div className="icon-box">
                                <Link href="/shop-product-details" className="ui-btn">
                                    <i className="fa fa-heart"></i>
                                </Link>
                                <Link href="shop-cart" className="ui-btn">
                                    <i className="fa fa-shopping-cart"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="content-box py-3">
                            <div className="inner">
                                <span className="price">50$.00</span>
                                <h4 className="title">
                                    <Link href="/shop-product-details">Body Message Oil</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-block masonry-item small-column all cat-2 cat-3 cat-4 product lenses mb-50 col-lg-3 col-md-6">
                    <div className="inner-box">
                        <div className="image-box">
                            <div className="image">
                                <Link href="/shop-product-details">
                                    <img src="/images/resource/product1-1.jpg" alt="Image" />
                                </Link>
                            </div>
                            <div className="icon-box">
                                <Link href="/shop-product-details" className="ui-btn">
                                    <i className="fa fa-heart"></i>
                                </Link>
                                <Link href="shop-cart" className="ui-btn">
                                    <i className="fa fa-shopping-cart"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="content-box py-3">
                            <div className="inner">
                                <span className="price">70$.00 - 90$.00</span>
                                <h4 className="title">
                                    <Link href="/shop-product-details">Glow Facial Cream</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-block masonry-item small-column all cat-1 cat-2 cat-5 product lenses mb-50 col-lg-3 col-md-6">
                    <div className="inner-box">
                        <div className="image-box">
                            <div className="image">
                                <Link href="/shop-product-details">
                                    <img src="/images/resource/product1-2.jpg" alt="Image" />
                                </Link>
                            </div>
                            <div className="icon-box">
                                <Link href="/shop-product-details" className="ui-btn">
                                    <i className="fa fa-heart"></i>
                                </Link>
                                <Link href="shop-cart" className="ui-btn">
                                    <i className="fa fa-shopping-cart"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="content-box py-3">
                            <div className="inner">
                                <span className="price">90$.00 - 70$.00</span>
                                <h4 className="title">
                                    <Link href="/shop-product-details">Hair Treatment</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-block masonry-item small-column all cat-1 cat-4 cat-5 product lenses mb-50 col-lg-3 col-md-6">
                    <div className="inner-box">
                        <div className="image-box">
                            <div className="image">
                                <Link href="/shop-product-details">
                                    <img src="/images/resource/product1-3.jpg" alt="Image" />
                                </Link>
                            </div>
                            <div className="icon-box">
                                <Link href="/shop-product-details" className="ui-btn">
                                    <i className="fa fa-heart"></i>
                                </Link>
                                <Link href="shop-cart" className="ui-btn">
                                    <i className="fa fa-shopping-cart"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="content-box py-3">
                            <div className="inner">
                                <span className="price">70$.00</span>
                                <h4 className="title">
                                    <Link href="/shop-product-details">Massage Cream</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
