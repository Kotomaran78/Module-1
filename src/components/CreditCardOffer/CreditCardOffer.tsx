import React from 'react';
import './CreditCardOffer.scss';
import cardImage1 from '@assets/img/cardImage1.png';

const CreditCardOffer: React.FC = () => {
  return (
    <section className='credit-card-offer'>
      <div className='credit-card-offer___info'>
        <h2 className='credit-card-offer__title'>Platinum digital credit card</h2>
        <div className='credit-card-offer__image-display1 credit-card-offer__image'>
          <img src={cardImage1} alt='Credit Card' className='credit-card-offer__image-img' />
        </div>
        <p className='credit-card-offer__description'>
          Our best credit card. Suitable for everyday spending and shopping. Cash withdrawals and
          transfers without commission and interest.
        </p>
        <div className='credit-card-offer__details'>
          <div className='credit-card-offer__detail'>
            <strong>Up to 160 days</strong>
            <p>No percent</p>
          </div>
          <div className='credit-card-offer__detail'>
            <strong>Up to 600 000 ₽</strong>
            <p>Credit limit</p>
          </div>
          <div className='credit-card-offer__detail'>
            <strong>0 ₽</strong>
            <p>Card service is free</p>
          </div>
        </div>
        <button className='credit-card-offer__apply-button'>Apply for card</button>
      </div>
      <div className='credit-card-offer__image-display2 credit-card-offer__image'>
        <img src={cardImage1} alt='Credit Card' className='credit-card-offer__image-img' />
      </div>
    </section>
  );
};

export default CreditCardOffer;
