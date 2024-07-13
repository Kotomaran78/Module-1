import React from 'react';
import { aboutCardData } from './constants';
import './AboutCard.scss';

const AboutCard: React.FC = () => (
  <div className='aboutCard'>
    {aboutCardData.map((item) => (
      <div key={item.detail} className='aboutCard__item'>
        <img src={item.icon} alt={item.description} className='aboutCard__icon' />
        <strong>{item.detail}</strong>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
);

export default AboutCard;
