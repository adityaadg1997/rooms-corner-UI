import React from 'react';
import './QrCodeComponent.css';
import img2 from "./qr-adi.jpeg";

const QrCodeComponent = () => {
  return (
    <div className="qr-container-wrapper">
      <h4>Please Scan the QR to Pay</h4>
      <div className="qr-container">
        <img src={img2} alt="QR Code" className="qr-image" />
        {/* <p>QR Image</p> */}
      </div>
      <button className="done-button">Done Button</button>
    </div>
  );
};

export default QrCodeComponent;