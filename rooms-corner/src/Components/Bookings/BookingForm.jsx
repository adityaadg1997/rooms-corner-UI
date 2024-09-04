import React, { useState, useCallback } from "react";
import HotelInfo from "./HotelInfo";
import CustomerDetails from "./CustomerDetails";
import BillingAddress from "./BillingAddress";
import PaymentDetails from "./PaymentDetails";
import "./BookingDetails.css";

const BookingForm1 = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    landmark: "",
    pincode: "",
    country: "",
    state: "",
    city: "",
  });

  const handleChange = useCallback((e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }, []);

  return (
    <div className="booking-form-container">
      <HotelInfo hotelData={props.hotelInfo} />
      <CustomerDetails formData={formData} handleChange={handleChange} />
      <BillingAddress formData={formData} handleChange={handleChange} />
      <PaymentDetails allData={formData} price={props.hotelInfo.pricePerDay} />
    </div>
  );
};

export default BookingForm1;
