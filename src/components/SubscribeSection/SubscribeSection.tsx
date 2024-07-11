import React from 'react';
import subscribeIcon from '@assets/icons/sendEmail.svg';
import './SubscribeSection.scss';

const SubscribeSection: React.FC = () => {
  const handleSubscribe = () => {
    alert('Подписка оформлена!');
  };

  return (
    <section className='subscription-section'>
      <h2 className='subscription-section__title1'>Support</h2>
      <h2 className='subscription-section__title2'>Subscribe Newsletter & get</h2>
      <h3 className='subscription-section__title3'>Bank News</h3>
      <div className='subscription-section__form'>
        <input type='email' placeholder='Your email' className='subscription-section__input' />
        <button className='subscription-section__button' onClick={handleSubscribe}>
          <img src={String(subscribeIcon)} alt='Subscribe' className='subscription-section__icon' />
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default SubscribeSection;
