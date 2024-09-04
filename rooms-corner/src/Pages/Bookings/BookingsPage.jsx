import React, { useEffect, useState } from "react";
import Base from "../../Components/Base/Base";
import BookingForm from "../../Components/Bookings/BookingForm";
import { useParams } from "react-router-dom";
import { getHotelById } from "../../API/Services/HotelService/RestrictedApi/HotelApi";

const BookingsPage = () => {
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    loadHotelById(hotelId);
  }, [hotelId]);

  const loadHotelById = async (hotelId) => {
    try {
      const response = await getHotelById(hotelId);
      setHotel(response);
    } catch (error) {
      console.log("Failed to load Hotel By Id:", error);
    }
  };

  return (
    <>
      <Base />

      {hotel && <BookingForm hotelInfo={hotel} />}
    </>
  );
};

export default BookingsPage;
