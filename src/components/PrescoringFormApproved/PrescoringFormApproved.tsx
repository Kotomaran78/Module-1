import React from 'react';
import './PrescoringFormApproved.scss';

const PrescoringFormApproved: React.FC = () => {
  return (
    <div className='prescoring-form-approved'>
      <h2 className='prescoring-form-approved__title'>
        The preliminary decision has been sent to your email.
      </h2>
      <p className='prescoring-form-approved__paragraph'>
        In the letter you can get acquainted with the preliminary decision on the credit card.
      </p>
    </div>
  );
};

export default PrescoringFormApproved;
