import React from "react";
import Accordion from "./Accordion/Accordion";
import HotelForm from "./Forms/HotelForm";
import LocationForm from "./Forms/LocationForm";
import FacilitiesForm from "./Forms/FacilitiesForm";
import "./css/Accordion.css";

const AccordionComponent = () => {
  return (
    <section id="accordion-card-wrapper">
      <div className="accordion-container">
        <h3 className="accordion-card-heading">Publish your rooms</h3>
        <Accordion title="Hotel Details">
          <HotelForm />
        </Accordion>
        <Accordion title="Location Details">
          <LocationForm />
        </Accordion>
        <Accordion title="Facilities Details">
          <FacilitiesForm />
        </Accordion>
      </div>
    </section>
  );
};

export default AccordionComponent;
