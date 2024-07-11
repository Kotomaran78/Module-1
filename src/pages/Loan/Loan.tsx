import React from 'react';
import './Loan.scss';
import CreditCardOffer from '@components/CreditCardOffer';

const Loan: React.FC = () => {
  return (
    <div className='loan__content'>
      <CreditCardOffer />
    </div>
  );
};

export default Loan;
