import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"
import { carouselItems } from '../../utils/data';
import s from "./Banner.module.scss"

const Banner = () => {
    return (
        <div className={s.wrapper}>
            <Carousel
                infiniteLoop
                autoPlay
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                interval={5000}
            >

                {carouselItems.map(i => <div key={i}>
                    <img src={i} alt="banner" loading="lazy" />
                </div>)}

            </Carousel>
        </div>
    );
};

export default Banner;