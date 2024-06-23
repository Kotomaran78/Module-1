import React from "react";
import GlobalImage from "@assets/img/HugeGlobal.png";
import "./GlobalUsageSection.scss";

const GlobalUsageSection: React.FC = () => {
  return (
    <section className="global-services">
      <h2 className="global-services__title">
        You can use our services anywhere in the world
      </h2>
      <p className="global-services__text">
        Withdraw and transfer money online through our application
      </p>
      <div className="global-services__image">
        <img src={String(GlobalImage)} alt="Global Services" />
      </div>
    </section>
  );
};

export default GlobalUsageSection;
