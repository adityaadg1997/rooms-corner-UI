import React from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonComponent.css";

const ButtonComponent = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${props.url ? props.url : ''}`);
  };

  return (
    <>
      <button className={`${props.btnType}`} onClick={handleClick} style={{width : props.width}}>
        {props.buttonText?props.buttonText:'CLICK ME'}
      </button>
    </>
  );
};

export default ButtonComponent;
