import React from "react";
import { Link } from "react-router-dom";
import { cardImages } from "./constants";
import "./styles/CardDesignSelector.scss";

const CardDesignSelector: React.FC = () => {
  return (
    <section className="card-section">
      <div className="card-section__block">
        <h1 className="card-section__title">
          Choose the design you like and apply for card right now
        </h1>
        <Link to="/credit-card">
          <button className="card-section__button">Choose the card</button>
        </Link>
      </div>
      <div className="card-section__cards">
        {cardImages.map((image) => (
          <img
            src={image}
            alt="Card Design"
            className="card-section__cardImage"
          />
        ))}
      </div>
    </section>
  );
};

export default CardDesignSelector;
