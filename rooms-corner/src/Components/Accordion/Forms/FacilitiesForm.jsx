import React from 'react';

const FacilitiesForm = () => {
  return (
    <form>
      <div>
        <label>Swimming Pool:</label>
        <input type="checkbox" name="swimmingPool" />
      </div>
      <div>
        <label>Gym:</label>
        <input type="checkbox" name="gym" />
      </div>
      {/* Add more form fields as needed */}
    </form>
  );
};

export default FacilitiesForm;
