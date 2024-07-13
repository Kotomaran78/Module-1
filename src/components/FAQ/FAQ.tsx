import React, { useState } from 'react';
import './FAQ.scss';
import Expand_up from '@assets/icons/Expand_up.svg';
import Expand_down from '@assets/icons/Expand_down.svg';
import { issuingData, usingData } from './constants';

const FAQ: React.FC = () => {
  // const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  // const toggleFAQ = (index: number) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };
  const toggleFAQ = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className='faq'>
      <h2 className='faq__title'>Issuing and receiving a card</h2>
      <div className='faq__block-questions'>
        {issuingData.map((item, index) => (
          <div key={item.question} className='faq__item'>
            <div className='faq__question' onClick={() => toggleFAQ(item.question)}>
              {item.question}
              <img
                className='faq__toggle-icon'
                src={openIndex === item.question ? Expand_up : Expand_down}
                alt='Expand'
              />
            </div>
            <div className={`faq__answer ${openIndex === item.question ? 'faq__answer--open' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>

      <h2 className='faq__title'>Using a credit card</h2>
      <div className='faq__block-questions'>
        {usingData.map((item, index) => (
          <div key={item.question} className='faq__item'>
            <div className='faq__question' onClick={() => toggleFAQ(item.question)}>
              {item.question}
              <img
                className='faq__toggle-icon'
                src={openIndex === item.question ? Expand_up : Expand_down}
                alt='Expand'
              />
            </div>
            <div className={`faq__answer ${openIndex === item.question ? 'faq__answer--open' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
