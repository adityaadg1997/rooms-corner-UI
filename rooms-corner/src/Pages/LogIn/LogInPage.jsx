import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogInComponent from "../../Components/LogIn/LogInComponent";

const LogInPage = () => {
  const [isLoginOpen, setLoginOpen] = useState(true);
  const navigate = useNavigate();

  const toggleLogin = () => {
    setLoginOpen(!isLoginOpen);
    navigate("/");
  };

  return (
    <>
      <LogInComponent isLoginOpen={isLoginOpen} toggleLogin={toggleLogin} />
    </>
  );
};

export default LogInPage;
