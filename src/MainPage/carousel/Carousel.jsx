import React, { useState } from "react";
import Carousel from "nuka-carousel"
import "./styles.scss";

const Carousel = ({ images }) => {

  return (
    <Carousel>
      {images.map((image, index) => {
          return  <img src={image} alt={`Slide ${index}`} className="carousel__image" /> })}
    </Carousel>

  );
};

export default Carousel;