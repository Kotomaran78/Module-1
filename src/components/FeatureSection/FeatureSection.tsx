import React from 'react';
import { featuresList } from './constants';
import Illustration from '@assets/img/Illustration2.png';
import CheckIcon from '@assets/icons/bx_bxs-check-circle.svg';
import './FeatureSection.scss';

const FeatureSection: React.FC = () => {
  return (
    <section className="feature-section">
      <div className="feature-section__image">
        <img src={String(Illustration)} alt="Illustration" />
      </div>
      <div className="feature-section__content">
        <h2 className="feature-section__title">
          We Provide Many Features You Can Use
        </h2>
        <p className="feature-section__description">
          You can explore the features that we provide with fun and have their
          own functions each feature
        </p>
        <ul className="feature-section__list">
          {featuresList.map((feature) => (
            <li key={feature} className="feature-section__listItem">
              <img
                src={String(CheckIcon)}
                alt="Check Icon"
                className="feature-section__listIcon"
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeatureSection;
