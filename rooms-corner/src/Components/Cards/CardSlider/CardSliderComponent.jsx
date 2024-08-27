import React, { useRef } from "react";
import CardComponent from "../Card/CardComponent";

const CardSliderComponent = ({ cardsData }) => {
  const slider = useRef(null);

  const scrollSlider = (amount) => {
    slider.current.scrollLeft += amount;
  };

  return (
    <>
      <div className="property-slider">
        <div className="card-slider-Heading">
          <h4>Stay at our top unique properties </h4>
          <p>From castles and villas to boats and igloos, we've got it all</p>
        </div>
        <button
          className="property-slider-button property-slider-left"
          onClick={() => scrollSlider(-600)}
        >
          &lt;
        </button>
        <div className="property-slider-container" ref={slider}>
          {cardsData.map((property) => (
            <CardComponent key={property.title} cardData={property} />
          ))}
        </div>
        <button
          className="property-slider-button property-slider-right"
          onClick={() => scrollSlider(900)}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default CardSliderComponent;
