import React,{useState} from 'react';
import ModalVideo from 'react-modal-video';

export default function Home3_Video() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
        <div className="video-section-three">
            <div className="image-box gsap__parallax">
                <img src="/images/video/video-three-image.jpg" alt="image"/>
                <div className="btn-video video-pulse">
                    <a className="video-popup wow zoomIn" onClick={() => setOpen(true)}
                        data-fancybox="gallery" data-caption=""><i className="fa-sharp fa-solid fa-play"></i></a>
                </div>
            </div>
        </div>
          <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
        </>
    )
}
