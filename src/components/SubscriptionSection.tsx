import React from "react";

const SubscriptionSection: React.FC = () => {
  const subscribeIcon =
    require("../img/SubscriptionSection/sendEmail.svg").default;

  const handleSubscribe = () => {
    alert("Подписка оформлена!");
  };

  return (
    <div className="subscription-section">
      <h2 className="subscription-section__title1">Support</h2>
      <h2 className="subscription-section__title2">
        Subscribe Newsletter & get
      </h2>
      <h3 className="subscription-section__title3">Bank News</h3>
      <div className="subscription-section__form">
        <input
          type="email"
          placeholder="Your email"
          className="subscription-section__input"
        />
        <button
          className="subscription-section__button"
          onClick={handleSubscribe}
        >
          <img
            src={subscribeIcon}
            alt="Subscribe"
            className="subscription-section__icon"
          />
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscriptionSection;
