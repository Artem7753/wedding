import React, { useState } from "react";
import "./styles.scss";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel__container">
        <div className="carousel__arrow carousel__arrow--left" onClick={prevSlide}>
          &#60;
        </div>
        <div className="carousel__arrow carousel__arrow--right" onClick={nextSlide}>
          &#62;
        </div>
        {images.map((image, index) => {
          return (
            <div key={index} className={`${index === currentIndex ? "carousel__slide--active" : "carousel__slide"}`}>
              <img src={image} alt={`Slide ${index}`} className="carousel__image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;