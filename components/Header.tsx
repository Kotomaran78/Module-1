import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo" to="/">
          NeoBank
        </Link>
        <nav className="header__nav">
          <Link className="header__link" to="/credit-card">
            Credit card
          </Link>
          <Link className="header__link" to="/product">
            Product
          </Link>
          <Link className="header__link" to="/account">
            Account
          </Link>
          <Link className="header__link" to="/resources">
            Resources
          </Link>
        </nav>
        <button className="header__button">Online Bank</button>
      </div>
    </header>
  );
};

export default Header;
