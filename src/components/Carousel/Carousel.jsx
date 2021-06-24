import React from "react";
import Slider from "react-slick";
import {
  CarousalData,
  description,
  Heading,
} from "../../MockData/CarousalData";

import { CarouselStyle } from "./Carousel.style";

function Carousel() {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: "linear",
  };

  return (
    <CarouselStyle>
      <article className="slider-content">
        <h2 className="heading">{Heading}</h2>
        <p className="description">{description}</p>
        <button className="read-more-button">Read More</button>
      </article>

      <Slider {...settings}>
        {CarousalData.map((carousel, index) => {
          return (
            <picture className="slider-image-wrapper" key="index">
              <img src={carousel} className="slider-image" />
            </picture>
          );
        })}
      </Slider>
    </CarouselStyle>
  );
}

export default Carousel;
