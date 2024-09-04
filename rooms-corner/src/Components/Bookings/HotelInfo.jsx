import React, { useEffect, useState } from "react";
import { getHotelImageUrlsByHotelId } from "../../API/Services/Helper/Image/Image.helper.service";
import loading from "./loadingGif.gif";

const HotelInfo = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    loadHotelImageUrlsByHotelId(props.hotelData.hotelId);
  }, []);

  const loadHotelImageUrlsByHotelId = async (hotelId) => {
    try {
      const response = await getHotelImageUrlsByHotelId(hotelId);
      setImages(response);
    } catch (error) {
      console.log("Failed to load Hotel Image Urls By Hotel Id:", error);
    }
  };

  const firstImage = images?.[0] || loading;

  return (
    <div className="booking-details">
      <div className="hotel-info">
        <h2>{props.hotelData.hotelName}</h2>
        <p>{props.hotelData.address}</p>
      </div>
      <div className="hotel-image">
        <img src={firstImage} alt="Hotel" />
      </div>
    </div>
  );
};

export default HotelInfo;
