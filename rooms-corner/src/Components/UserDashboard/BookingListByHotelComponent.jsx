import React, { useState } from "react";
import { getAllBookingsByHotelId } from "../../API/Services/UserService/RestrictedApi/GetAllBookingsByHotelId";

const BookingListByHotelComponent = () => {
  const [hotelId, setHotelId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await getAllBookingsByHotelId(hotelId);
      console.log("hotel info fetch success:", response);
    } catch (error) {
      console.log("Invalid hotelId:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter hotelId"
        value={hotelId}
        onChange={(e) => setHotelId(e.target.value)}
      />
      <button type="submit">Show hotel info</button>
    </form>
  );
};

export default BookingListByHotelComponent;
