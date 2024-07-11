import React from 'react';
import './CreditCardOffer.scss';

const CreditCardOffer: React.FC = () => {
  return (
    <div className='credit-card-offer'>
      <div className='card-info'>
        <h2>Platinum digital credit card</h2>
        <p>
          Our best credit card. Suitable for everyday spending and shopping. Cash withdrawals and
          transfers without commission and interest.
        </p>
        <div className='card-details'>
          <div className='card-detail'>
            <strong>Up to 160 days</strong>
            <p>No percent</p>
          </div>
          <div className='card-detail'>
            <strong>Up to 600 000 ₽</strong>
            <p>Credit limit</p>
          </div>
          <div className='card-detail'>
            <strong>0 ₽</strong>
            <p>Card service is free</p>
          </div>
        </div>
        <button className='apply-button'>Apply for card</button>
      </div>
      <div className='card-image'>
        <img src='path_to_image' alt='Credit Card' />
      </div>
    </div>
  );
};

export default CreditCardOffer;
