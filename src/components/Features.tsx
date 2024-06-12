import React from "react";

const FeaturesSection: React.FC = () => {
  const features = [
    "Powerful online protection.",
    "Cashback without borders.",
    "Personal design.",
    "Work anywhere in the world.",
  ];
  const Illustration =
    require("../img/featuresImages/Illustration 2.svg").default;
  const CheckIcon =
    require("../img/featuresImages/bx_bxs-check-circle.svg").default;

  return (
    <section className="features-section">
      <div className="features-section__image">
        <img src={Illustration} alt="Illustration" />
      </div>
      <div className="features-section__content">
        <h2 className="features-section__title">
          We Provide Many Features You Can Use
        </h2>
        <p className="features-section__description">
          You can explore the features that we provide with fun and have their
          own functions each feature
        </p>
        <ul className="features-section__list">
          {features.map((feature) => (
            <li key={feature} className="features-section__list-item">
              <img
                src={CheckIcon}
                alt="Check Icon"
                className="features-section__list-icon"
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;
