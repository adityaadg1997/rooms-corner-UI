import React from "react";
import "./Footer.css";
import logo from "./logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__row">
          <div className="footer__col footer__col--left">
            <div className="footer__logo-container">
              <img src={logo} alt="Normstahl Logo" className="footer__logo" />
            </div>
          </div>
          <div className="footer__col footer__col--right">
            <div className="footer__link-container">
              <h4 className="footer__link-title">About us</h4>
              <h4 className="footer__link-title">Become a Partner</h4>
              <h4 className="footer__link-title">Contact us</h4>
            </div>
          </div>
        </div>
        <div className="footer__row">
          <div className="footer__col footer__col--full">
            <ul className="footer__social-links">
              <li>
                <a
                  href="https://www.facebook.com/normstahl"
                  className="footer__social-link"
                >
                  <i className="fab fa-facebook-f">FB</i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCm3t4Y_jD8y-g6_D2b23l7g"
                  className="footer__social-link"
                >
                  <i className="fab fa-youtube">You</i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/normstahl/"
                  className="footer__social-link"
                >
                  <i className="fab fa-linkedin-in">LI</i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.com/normstahl/"
                  className="footer__social-link"
                >
                  <i className="fab fa-pinterest-p">PI</i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/normstahl/"
                  className="footer__social-link"
                >
                  <i className="fab fa-instagram">Ins</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__row">
          <p className="footer__text">© Rooms Corner - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
