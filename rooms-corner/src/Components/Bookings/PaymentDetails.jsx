import React from 'react';

const PaymentDetails = ({ handleProccedToPay }) => (
  <div className="payment-details">
    <h2>Payment Details</h2>
    <div className="payment-item">
      <p>Item Price</p>
      <span>5000</span>
    </div>
    <div className="payment-item">
      <p>Discount</p>
      <span>0</span>
    </div>
    <div className="payment-item total">
      <p>TOTAL</p>
      <span>5000</span>
    </div>
    <button onClick={handleProccedToPay} className="proceed-to-pay">Proceed To Pay</button>
  </div>
);

export default PaymentDetails;
