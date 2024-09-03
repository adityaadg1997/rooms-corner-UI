import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getHotelImageUrlsByHotelId } from "../../../API/Services/Helper/Image/Image.helper.service";
import loading from "../Card/loadingGif.gif";
import "../assets/HotelCardComponent.css";
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
      }
    };

    loadHotelImageUrlsByHotelId();
  }, [cardData.hotelId]);

  const firstImage = images?.[0] || loading;

  return (
    <div className="hotel-card" onClick={handleClick}>
      <img
        src={firstImage}
        alt={cardData.hotelName}
        className="hotel-card-image"
      />
      <div className="hotel-card-info">
        <h3 className="hotel-card-title">{cardData.hotelDescription}</h3>
        <p className="hotel-card-location">{cardData.locationId}</p>
        <div className="hotel-card-rating">
          <span className="hotel-rating-number">{cardData.rating}</span>
          <span className="hotel-rating-star">★</span>
          <span className="hotel-review-count">({cardData.reviewCount} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
