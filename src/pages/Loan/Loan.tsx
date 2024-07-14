import React from 'react';
import './Loan.scss';
import CreditCardOffer from '@components/CreditCardOffer';
import HowToGetCard from '@components/HowToGetCard';
import CreditCardInfo from '@components/CreditCardInfo';

const Loan: React.FC = () => {
  return (
    <div className='loan__content'>
      <CreditCardOffer />
      <CreditCardInfo />
      <HowToGetCard />
    </div>
  );
};

export default Loan;
