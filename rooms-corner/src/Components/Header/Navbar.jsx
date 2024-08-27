import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./css/styles.css";
import bigImage from "./bg-image.jpg";
import img2 from "./image2.jpg";
import LogInComponent from "../LogIn/LogInComponent";
// import Search from "../Search/Search";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  const toggleLogin = () => {
    setLoginOpen(!isLoginOpen);
  };

  return (
    <>
      {/*  HEADER Starts here */}
      <header className="header">
        <nav className="nav container">
          <Link to={"/"} className="nav__logo">
            Logo
          </Link>

          <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}>
            <ul className="nav__list">
              <li className="nav__item">
                <a to={"/"} className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a to={"/"} className="nav__link">
                  About Us
                </a>
              </li>
              <li className="nav__item">
                <a to={"/"} className="nav__link">
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a to={"/"} className="nav__link">
                  Featured
                </a>
              </li>
              <li className="nav__item">
                <a to={"/"} className="nav__link">
                  Contact Me
                </a>
              </li>
            </ul>
            {/* Close button */}
            <div className="nav__close" onClick={toggleMenu}>
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__actions">
            {/* Search button */}
            <i
              className="ri-search-line nav__search"
              onClick={toggleSearch}
            ></i>
            {/* Login button */}
            <i className="ri-user-line nav__login" onClick={toggleLogin}></i>
            {/* Toggle button */}
            <div className="nav__toggle" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </div>
          </div>
        </nav>
        {/*  SEARCH COMPONENT */}
        {/* <Search isSearchOpen={isSearchOpen} toggleSearch={toggleSearch} /> */}
        {/*  LOGIN COMPONENT */}
        <LogInComponent isLoginOpen={isLoginOpen} toggleLogin={toggleLogin} />
      </header>
      {/* ==================== MAIN ==================== */}
      {/* <main className="main">
        <img src={bigImage} alt="image here" className="main__bg" />
      </main> */}
    </>
  );
};

export default Navbar;
