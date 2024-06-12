import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Features from "../components/Features";
import ExchangeRates from "../components/ExchangeRates";
import GlobalServices from "../components/GlobalServices";
import NewsSection from "../components/NewsSection";
import SubscriptionSection from "../components/SubscriptionSection";

const Home: React.FC = () => {
  const cardImages = [
    "cardImage1.png",
    "cardImage2.png",
    "cardImage3.png",
    "cardImage4.png",
  ];

  return (
    <div className="home">
      <div className="home__content">
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
              <Card key={image} imagePath={image} />
            ))}
          </div>
        </section>
        <Features />
        <ExchangeRates />
        <GlobalServices />
        <NewsSection />
        <SubscriptionSection />
      </div>
    </div>
  );
};

export default Home;
