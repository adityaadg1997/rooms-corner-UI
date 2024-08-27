import React, { useState, useCallback } from 'react';
import HotelInfo from './HotelInfo';
import CustomerDetails from './CustomerDetails';
import BillingAddress from './BillingAddress';
import PaymentDetails from './PaymentDetails';
import './BookingDetails.css';

const BookingForm1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    landmark: '',
    pincode: '',
    country: '',
    state: '',
    city: '',
  });

  const handleChange = useCallback((e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleProccedToPay = () => {
    console.log("Payment Started");
  };

  return (
    <div className="booking-form-container">
      <HotelInfo />
      <CustomerDetails formData={formData} handleChange={handleChange} />
      <BillingAddress formData={formData} handleChange={handleChange} />
      <PaymentDetails handleProccedToPay={handleProccedToPay} />
    </div>
  );
};

export default BookingForm1;
