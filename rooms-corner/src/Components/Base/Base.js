import React from "react";
import Navbar from "../Header/Navbar";

const Base = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Base;
