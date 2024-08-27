import React from "react";
import "./LargeCard.css";
import ButtonComponent from "../../Utils/Buttons/ButtonComponent";
import Slider from "../../Utils/Slider/Slider";

const LargeCard = (props) => {
  return (
    <section id="large-card-wrapper">
      <div className="large-card-container">
        <div className="large-card">
          {props.titlePosition === "top" && (
            <div className="content-container">
              <h2>{props.title}</h2>
              <p>{props.location}</p>
            </div>
          )}

          <Slider hotelImages={props.hotelImages} />

          {props.titlePosition === "top" && (
            <div className="content-container">
              <div className="rating-container">
                <span>9.8</span>
                <span>Exceptional</span>
                <span>• 135 reviews</span>
              </div>
              <ButtonComponent
                width={"100%"}
                buttonText={"BOOK NOW"}
                url={"/register"}
                btnType={"border-outLine-btn"}
              />
            </div>
          )}
          {props.titlePosition != "top" && (
            <div className="content-container">
              <h2>{props.title}</h2>
              <p>{props.location}</p>
              <div className="rating-container">
                <span>9.8</span>
                <span>Exceptional</span>
                <span>• 135 reviews</span>
              </div>
              <ButtonComponent
                width={"100%"}
                buttonText={"BOOK NOW"}
                url={"/bookingDetails"}
                btnType={"border-outLine-btn"}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LargeCard;
