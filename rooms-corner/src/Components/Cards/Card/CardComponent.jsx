import React, { useEffect, useState } from "react";
import "../assets/CardComponent.css";
import { useNavigate } from "react-router-dom";
import { getHotelImageUrlsByHotelId } from "../../../API/Services/Helper/Image/Image.helper.service";
import loading from "../Card/loadingGif.gif";

const CardComponent = ({ cardData }) => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/hotel/${cardData.hotelId}`);
  };

  useEffect(() => {
    if (!cardData.hotelId) return;

    const loadHotelImageUrlsByHotelId = async () => {
      try {
        const response = await getHotelImageUrlsByHotelId(cardData.hotelId);
        setImages(response);
      } catch (error) {
        console.log("Failed to load Hotel Image Urls By Hotel Id:", error);
        // Optionally set a fallback image or handle the error UI-wise
      }
    };

    loadHotelImageUrlsByHotelId();
  }, [cardData.hotelId]);

  const firstImage = images?.[0] || loading; // Provide a fallback image

  return (
    <div className="property-card" onClick={handleClick}>
      <img
        src={firstImage}
        alt={cardData.hotelName}
        className="property-image"
      />
      <div className="property-info">
        <h3 className="property-title">{cardData.hotelDescription}</h3>
        <p className="property-location">{cardData.locationId}</p>
        <div className="property-rating">
          <span className="rating-number">{cardData.rating}</span>
          <span className="rating-star">★</span>
          <span className="review-count">({cardData.reviewCount} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
