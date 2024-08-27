import React from 'react';
import img2 from "./image2.jpg";

const HotelInfo = () => (
  <div className="booking-details">
    <div className="hotel-info">
      <h2>Holiday Inn Hotel</h2>
      <p>Saharsa</p>
    </div>
    <div className="hotel-image">
      <img src={img2} alt="Hotel" />
    </div>
  </div>
);

export default HotelInfo;
