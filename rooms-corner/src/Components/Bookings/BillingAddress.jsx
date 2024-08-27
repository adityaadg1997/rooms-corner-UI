import React from 'react';
import InputField from '../../Components/Utils/InputField/InputField';

const BillingAddress = ({ formData, handleChange }) => (
  <div className="billing-address">
    <h2>Billing Address</h2>
    <InputField label="Address" type="textarea" name="address" value={formData.address} onChange={handleChange} />
    <InputField label="Landmark" name="landmark" value={formData.landmark} onChange={handleChange} />
    <InputField label="Pincode" name="pincode" value={formData.pincode} onChange={handleChange} />
    <InputField label="Country" name="country" value={formData.country} onChange={handleChange} />
    <InputField label="State" name="state" value={formData.state} onChange={handleChange} />
    <InputField label="City" name="city" value={formData.city} onChange={handleChange} />
  </div>
);

export default BillingAddress;
