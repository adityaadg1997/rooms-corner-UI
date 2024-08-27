import React from "react";
import "./AmenitiesCard.css";

const AmenitiesCard = () => {
  const amenities = [
    { icon: "icon-ac", label: "AC" },
    { icon: "icon-wifi", label: "Free Wifi" },
    { icon: "icon-tv", label: "TV" },
    { icon: "icon-geyser", label: "Geyser" },
    { icon: "icon-power", label: "Power backup" },
    { icon: "icon-elevator", label: "Elevator" },
  ];

  return (
    <div id="amenities-card-wrapper">
      <div className="amenities-card-container">
        <h3 className="amenities-card-heading">Amenities</h3>
        <div className="amenities-card">
          <ul className="amenities-list">
            {amenities.map((amenity, index) => (
              <li key={index} className="amenity-item">
                <i className={amenity.icon} />
                <span>{amenity.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesCard;
