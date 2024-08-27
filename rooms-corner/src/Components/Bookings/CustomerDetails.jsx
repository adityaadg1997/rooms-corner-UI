import React from 'react';
import InputField from '../../Components/Utils/InputField/InputField';

const CustomerDetails = ({ formData, handleChange }) => (
  <div className="customer-details">
    <h2>Customer Details</h2>
    <InputField label="Name" name="name" value={formData.name} onChange={handleChange} />
    <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
    <InputField label="Contact" type="tel" name="contact" value={formData.contact} onChange={handleChange} />
  </div>
);

export default CustomerDetails;
