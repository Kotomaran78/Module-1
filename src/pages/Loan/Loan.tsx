import React from 'react';
import './Loan.scss';
import CreditCardOffer from '@components/CreditCardOffer';
import HowToGetCard from '@components/HowToGetCard';
import CreditCardInfo from '@components/CreditCardInfo';

const Loan: React.FC = () => {
  return (
    <section className='loan'>
      <CreditCardOffer />
      <CreditCardInfo />
      <HowToGetCard />
    </section>
  );
};

export default Loan;
