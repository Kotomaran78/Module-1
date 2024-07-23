import React from 'react';
import './ErrorPage404.scss';
import { useNavigate } from 'react-router-dom';
import Image404 from '@assets/img/Oops.png';

const ErrorPage404: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className='ErrorPage404'>
      <div className='ErrorPage404__content'>
        <h2 className='ErrorPage404__subtitle'>Oops....</h2>
        <h1 className='ErrorPage404__title'>Page not found</h1>
        <p className='ErrorPage404__paragraph'>
          This Page doesn`t exist or was removed! We suggest you go back.
        </p>
        <button className='ErrorPage404__button' onClick={handleGoBack}>
          Go back
        </button>
      </div>
      <div className='ErrorPage404__image'>
        <img className='ErrorPage404__image-img' src={Image404} alt='404 Error' />
      </div>
    </section>
  );
};

export default ErrorPage404;
