import React, { useRef } from "react";
import CardComponent from "../Card/CardComponent";
import "../CardSlider/HotelSliderComponent.css";

const CardSliderComponent = ({ cardsData }) => {
  const slider = useRef(null);

  const scrollSlider = (amount) => {
    slider.current.scrollLeft += amount;
  };

  return (
    <div className="hotel-card-slider">
      <div className="hotel-card-slider-heading">
        <h4>Stay at our top unique properties</h4>
        <p>From castles and villas to boats and igloos, we've got it all</p>
      </div>
      <button
        className="hotel-card-slider-button hotel-card-slider-left"
        onClick={() => scrollSlider(-600)}
      >
        &lt;
      </button>
      <div className="hotel-card-slider-container" ref={slider}>
        {cardsData.map((property) => (
          <CardComponent key={property.hotelId} cardData={property} />
        ))}
      </div>
      <button
        className="hotel-card-slider-button hotel-card-slider-right"
        onClick={() => scrollSlider(900)}
      >
        &gt;
      </button>
    </div>
  );
};

export default CardSliderComponent;
