import React from "react";
import "../assets/CardComponent.css";
import { useNavigate } from "react-router-dom";

const CardComponent = ({ cardData }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/userList");
  };

  return (
    <>
      <div className="property-card" onClick={handleClick}>
        <img
          src={cardData.image}
          alt={cardData.title}
          className="property-image"
        />
        <div className="property-info">
          <h3 className="property-title">
            {cardData.title.length > 11
              ? cardData.title.substring(0, 11) + "..."
              : cardData.title}
          </h3>
          <p className="property-location">{cardData.location}</p>
          <div className="property-rating">
            <span className="rating-number">{cardData.rating}</span>
            <span className="rating-star">★</span>
            <span className="review-count">
              ({cardData.reviewCount} reviews)
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
