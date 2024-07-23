import React, { useState, useEffect, FormEvent } from 'react';
import subscribeIcon from '@assets/icons/sendEmail.svg';
import './SubscribeSection.scss';

const SubscribeSection: React.FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const subscribed = localStorage.getItem('isSubscribed');
    if (subscribed) {
      setIsSubscribed(true);
    }
  }, []);

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        localStorage.setItem('isSubscribed', 'true');
      } else {
        alert('Не удалось оформить подписку.');
      }
    } catch (error) {
      console.error('Ошибка при подписке:', error);
    }
  };

  return (
    <section className='subscription-section'>
      <h2 className='subscription-section__title1'>Support</h2>
      <h2 className='subscription-section__title2'>Subscribe Newsletter & get</h2>
      <h3 className='subscription-section__title3'>Bank News</h3>
      {isSubscribed ? (
        <h3 className='subscription-section__title3'>
          You are already subscribed to the bank&apos;s newsletter
        </h3>
      ) : (
        <form className='subscription-section__form' onSubmit={handleSubscribe}>
          <input
            type='email'
            placeholder='Your email'
            className='subscription-section__input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type='submit' className='subscription-section__button'>
            <img
              src={String(subscribeIcon)}
              alt='Subscribe'
              className='subscription-section__icon'
            />
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
};

export default SubscribeSection;
