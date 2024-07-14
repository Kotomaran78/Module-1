import React from 'react';
import './HowToGetCard.scss';
import CardApplicationForm from '@components/CardApplicationForm';

const HowToGetCard: React.FC = () => {
  return (
    <section className='how-to-get-card'>
      <h2 className='how-to-get-card__title'>How to get a card</h2>
      <div className='how-to-get-card__steps'>
        <div className='how-to-get-card__step'>
          <div className='how-to-get-card__step-title'>
            <div className='how-to-get-card__step-number'>1</div>
            <div className='how-to-get-card__line'></div>
          </div>
          <p className='how-to-get-card__step-description'>
            Fill out an online application - you do not need to visit the bank
          </p>
        </div>
        <div className='how-to-get-card__step'>
          <div className='how-to-get-card__step-title'>
            <div className='how-to-get-card__step-number'>2</div>
            <div className='how-to-get-card__line'></div>
          </div>
          <p className='how-to-get-card__step-description'>
            Find out the bank's decision immediately after filling out the application
          </p>
        </div>
        <div className='how-to-get-card__step'>
          <div className='how-to-get-card__step-title'>
            <div className='how-to-get-card__step-number'>3</div>
            <div className='how-to-get-card__line'></div>
          </div>
          <p className='how-to-get-card__step-description'>
            The bank will deliver the card free of charge, wherever convenient, to your city
          </p>
        </div>
      </div>
      <CardApplicationForm />
    </section>
  );
};

export default HowToGetCard;
