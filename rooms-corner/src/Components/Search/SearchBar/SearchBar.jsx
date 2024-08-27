import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <section id="search-bar-wrapper">
      <div className="search-bar-container">
      <div className="search-bar">
        <input type="text" placeholder="Enter your location" />
        <button type="submit">SEARCH</button>
      </div>
      </div>
    </section>
  );
};

export default SearchBar;
