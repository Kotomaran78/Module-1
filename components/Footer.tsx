import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const logo = require("../img/Footer/logo.png");
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <Link to="/" className="footer__logo">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="footer__contact">
            <h2 className="footer__contact-title">+7 (495) 984 25 13</h2>
            <p className="footer__contact-email">info@neoflex.ru</p>
          </div>
        </div>
        <div className="footer__nav">
          <nav>
            <ul className="footer__navList">
              <li>
                <Link to="/about">About bank</Link>
              </li>
              <li>
                <Link to="/questions">Ask a Question</Link>
              </li>
              <li>
                <Link to="/quality">Quality of service</Link>
              </li>
              <li>
                <Link to="/requisites">Requisites</Link>
              </li>
              <li>
                <Link to="/press">Press center</Link>
              </li>
              <li>
                <Link to="/career">Bank career</Link>
              </li>
              <li>
                <Link to="/investors">Investors</Link>
              </li>
              <li>
                <Link to="/analytics">Analytics</Link>
              </li>
              <li>
                <Link to="/business">Business and processes</Link>
              </li>
              <li>
                <Link to="/ethics">Compliance and business ethics</Link>
              </li>
            </ul>
          </nav>
        </div>
        <hr className="footer__divider" />
        <p className="footer__cookies">
          We use cookies to personalize our services and improve the user
          experience of our website. Cookies are small files containing
          information about previous visits to a website. If you do not want to
          use cookies, please change your browser settings.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
