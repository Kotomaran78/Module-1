import React, { useEffect, useState } from 'react';
import './CreditCardOffer.scss';
import cardImage1 from '@assets/img/cardImage1.png';

const CreditCardOffer: React.FC = () => {
  const [status, setStatus] = useState<string | null>(localStorage.getItem('status'));

  useEffect(() => {
    const handleStorageChange = () => {
      setStatus(localStorage.getItem('status'));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const getButtonText = (status: string | null) => {
    switch (status) {
      case 'PREAPPROVAL':
        return 'Choose an offer';
      case 'APPROVED':
        return 'Continue registration';
      default:
        return 'Apply for card';
    }
  };

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
            <div className='credit-card-offer__detail-tooltip'>
              When repaying the full debt up to 160 days.
            </div>
          </div>
          <div className='credit-card-offer__detail'>
            <strong>Up to 600 000 ₽</strong>
            <p>Credit limit</p>
            <div className='credit-card-offer__detail-tooltip'>
              Over the limit willaccrue percent
            </div>
          </div>
          <div className='credit-card-offer__detail'>
            <strong>0 ₽</strong>
            <p>Card service is free</p>
            <div className='credit-card-offer__detail-tooltip'>
              Promotion valid until December 31, 2022.
            </div>
          </div>
        </div>
        <button className='credit-card-offer__apply-button'>{getButtonText(status)}</button>
      </div>
      <div className='credit-card-offer__image-display2 credit-card-offer__image'>
        <img src={cardImage1} alt='Credit Card' className='credit-card-offer__image-img' />
      </div>
    </section>
  );
};

export default CreditCardOffer;
