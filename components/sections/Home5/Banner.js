import React,{useState} from 'react';
import ModalVideo from 'react-modal-video';

export default function Home5_Banner() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
        <section id="home" className="banner-five-area section__decoration-bottom paralax__animation mb-130">
            <div className="banner-five__shape-one parallaxLeftScroll">
                <img src="images/shape/banner-five-shape1.png" alt="image"/>
            </div>
            <div className="banner-five__shape-two parallaxLeftScroll">
                <img className="animation__arryLeftRight" src="images/shape/banner-five-shape2.png" alt="image"/>
            </div>
            <div className="container">
                <div className="banner-five__wrp">
                    <div className="banner-five__content">
                        <h1 className="title">Experience <span>Bliss, Embrace</span></h1>
                        <div className="info">
                            <a onClick={() => setOpen(true)} className="video-btn wow zoomIn"
                                data-fancybox="gallery" data-caption="">
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.786133 0L10.2147 5.5L0.786133 11V0Z" fill="black" />
                                </svg>
                            </a>
                            <p className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur
                                ligula, eget egestas magna mi ut arcu.</p>
                            <div className="arry">
                                <img className="animation__arryUpDown" src="images/banner/banner-five-arry.png" alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className="banner-five__image-left">
                        <div className="gsap__parallax">
                            <img src="images/banner/banner-five-image1.jpg" alt="image"/>
                        </div>
                        <img className="shape" data-depth="0.03" src="images/banner/banner-five-image2.jpg"
                            alt="image"/>
                    </div>
                    <div className="banner-five__image-right">
                        <div className="gsap__parallax">
                            <img src="images/banner/banner-five-image1-shape.png" alt="image"/>
                        </div>
                        <img className="shape parallaxRightRotateScroll" src="images/banner/banner-five-image2-shape.png"
                            alt="image"/>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
        </>
    )
}
