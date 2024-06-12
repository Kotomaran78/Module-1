import React from "react";

const GlobalServices: React.FC = () => {
  const GlobalImage = require("../img/GlobalServices/Huge Global.svg").default;
  return (
    <section className="global-services">
      <h2 className="global-services__title">
        You can use our services anywhere in the world
      </h2>
      <p className="global-services__text">
        Withdraw and transfer money online through our application
      </p>
      <div className="global-services__image">
        <img src={GlobalImage} alt="Global Services" />
      </div>
    </section>
  );
};

export default GlobalServices;
