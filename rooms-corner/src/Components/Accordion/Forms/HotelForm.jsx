import React, { useState } from 'react';

const HotelForm = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages(newImages);
  };

  return (
    <form>
      <div>
        <label>Hotel Name:</label>
        <input type="text" name="hotelName" />
      </div>
      <div>
        <label>Hotel Rating:</label>
        <input type="number" name="hotelRating" />
      </div>
      <div>
        <label>Upload Images:</label>
        <input 
          type="file" 
          accept="image/*" 
          multiple 
          onChange={handleImageChange} 
        />
      </div>
      {images.length > 0 && (
        <div className="image-preview">
          {images.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`Hotel ${index + 1}`} 
              style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }} 
            />
          ))}
        </div>
      )}
      {/* Add more form fields as needed */}
    </form>
  );
};

export default HotelForm;
