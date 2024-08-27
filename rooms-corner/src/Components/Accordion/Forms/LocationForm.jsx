import React from 'react';

const LocationForm = () => {
  return (
    <form>
      <div>
        <label>City:</label>
        <input type="text" name="city" />
      </div>
      <div>
        <label>Country:</label>
        <input type="text" name="country" />
      </div>
      {/* Add more form fields as needed */}
    </form>
  );
};

export default LocationForm;
