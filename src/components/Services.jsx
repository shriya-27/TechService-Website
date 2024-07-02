import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import css file of carousel
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

const Services = () => {
  return (
    <div >
        <Carousel
        infiniteLoop
        autoPlay
        showStatus = {false} // 1 of 2 (removed)
        showArrows = {false} // arrow taaki side ke picture pr jaa sko
        showThumbs = {false} // how many photos visula display at bottom (removed)
        interval={1000} // i.e. 1s
        >
            <div>
                <img src={img1} alt="Item1" />
                <p className="legend">FullStack</p>
            </div>

            <div>
                <img src={img2} alt="Item2" />
                <p className="legend">Peer-to-peer support</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services