/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "./Carousel.scss";
import { useState } from "react";

const Carousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    if (activeIndex === 0) {
      setActiveIndex(props.carouselData.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % props.carouselData.length);
  };

  return (
    <div className="carousel">
      {props.carouselData.map((item, index) => {
        return (
          <img
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            src={item.src}
            alt={item.alt}
            key={index}
            className="carousel__img"
          />
        );
      })}
      <FontAwesomeIcon
        icon={faAngleLeft}
        className="carousel__icon carousel__icon--left"
        onClick={prevSlide}
      />
      <FontAwesomeIcon
        icon={faAngleRight}
        className="carousel__icon carousel__icon--right"
        onClick={nextSlide}
      />
    </div>
  );
};

export default Carousel;
