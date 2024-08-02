import React from 'react';
import { cashbackData } from './constants';
import './Cashback.scss';

const Cashback: React.FC = () => {
  return (
    <div className='cashback'>
      {cashbackData.map((item) => (
        <div key={item.description} className='cashback__item'>
          <p>{item.description}</p>
          <strong>{item.percentage}</strong>
        </div>
      ))}
    </div>
  );
};

export default Cashback;
