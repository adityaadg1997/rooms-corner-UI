import React, { useState } from "react";
import "./Slider.css";

const Slider = ({ hotelImages }) => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((startIndex + 1) % hotelImages.length);
  };

  const previousSlide = () => {
    setStartIndex(
      (startIndex - 1 + hotelImages.length) % hotelImages.length
    );
  };

  const isPreviousDisabled = startIndex === 0;
  const isNextDisabled = startIndex === hotelImages.length - 1;

  return (
    <div className="large-card-image-container">
      {hotelImages && (
        <div className="slider">
          <div className="slides">
            {hotelImages.map((image, index) => (
              <img key={index} src={image.image} alt="Image" className={`slide ${index === startIndex ? "active" : ""}`} />
            ))}
          </div>
          <button className="slide-prev" onClick={previousSlide} disabled={isPreviousDisabled}>
            &#10094;
          </button>
          <button className="slide-next" onClick={nextSlide} disabled={isNextDisabled}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;
