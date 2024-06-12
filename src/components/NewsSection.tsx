import React from "react";
import NewsSlider from "./NewsSlider";

const NewsSection: React.FC = () => {
  return (
    <section className="news-section">
      <h2 className="news-section__title">
        Current news from the world of finance
      </h2>
      <p className="news-section__text">
        We update the news feed every 15 minutes. You can learn more by clicking
        on the news you are interested in.
      </p>
      <NewsSlider />
    </section>
  );
};

export default NewsSection;
