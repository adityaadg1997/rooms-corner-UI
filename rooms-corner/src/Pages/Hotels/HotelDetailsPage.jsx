import React, { useEffect, useState } from "react";
import { getHotelById } from "../../API/Services/HotelService/RestrictedApi/HotelApi";
import { useParams } from "react-router-dom";
import LargeCard from "../../Components/Cards/LargeCard/LargeCard";
import Base from "../../Components/Base/Base";
import Footer from "../../Components/Footer/Footer";
import { getHotelImageUrlsByHotelId } from "../../API/Services/Helper/Image/Image.helper.service";

const HotelDetailsPage = () => {
  const [hotel, setHotel] = useState(null);
  const [images, setImages] = useState([]);
  const { hotelId } = useParams();

  useEffect(() => {
    loadHotelById(hotelId);
    loadHotelImageUrlsByHotelId(hotelId);
  }, [hotelId]);

  const loadHotelById = async (hotelId) => {
    try {
      const response = await getHotelById(hotelId);
      console.log("aditya hotel :", response);
      setHotel(response);
    } catch (error) {
      console.log("Failed to load Hotel By Id:", error);
    }
  };

  const loadHotelImageUrlsByHotelId = async (hotelId) => {
    try {
      const response = await getHotelImageUrlsByHotelId(hotelId);
      setImages(response);
    } catch (error) {
      console.log("Failed to load Hotel Image Urls By Hotel Id:", error);
    }
  };

  return (
    <>
      <Base />
      {hotel && (
        <LargeCard
          hotelId={hotelId}
          hotelName={hotel.hotelName}
          locationId={hotel.locationId}
          hotelImages={images && images}
          price={hotel.pricePerDay}
        />
      )}
      <Footer />
    </>
  );
};

export default HotelDetailsPage;
