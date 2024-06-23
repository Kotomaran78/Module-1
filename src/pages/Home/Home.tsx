import React from "react";
import "./Home.scss";
import CardDesignSelector from "@components/CardDesignSelector";
import FeatureSection from "@components/FeatureSection";
import ExchangeRates from "@components/ExchangeRates";
import GlobalUsageSection from "@components/GlobalUsageSection";
import NewsSection from "@components/NewsSection";
import SubscribeSection from "@components/SubscribeSection";

const Home: React.FC = () => {
  return (
    <div className="home__content">
      <CardDesignSelector />
      <FeatureSection />
      <ExchangeRates />
      <GlobalUsageSection />
      <NewsSection />
      <SubscribeSection />
    </div>
  );
};

export default Home;
