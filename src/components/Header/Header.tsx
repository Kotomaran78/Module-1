import React, { useState } from "react";
import { Link } from "react-router-dom";
import { headerLinks } from "./constants";
import "./Header.scss";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo" to="/">
          NeoBank
        </Link>
        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          {headerLinks.map((link) => (
            <Link
              key={link.to}
              className="header__link"
              to={link.to}
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
          <button
            className={`header__nav-button ${isMenuOpen ? "header__nav-button--open" : ""}`}
          >
            Online Bank
          </button>
        </nav>
        <button className="header__button">Online Bank</button>
        <div className="header__burger" onClick={toggleMenu}>
          {isMenuOpen ? <span>&#x2715;</span> : <span>&#9776;</span>}
        </div>
      </div>
    </header>
  );
};

export default Header;
