import React, { useState } from 'react';
import './FAQ.scss';
import { issuingData, usingData } from './constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const handleToggle = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='faq'>
      <h2 className='faq__title'>Issuing and receiving a card</h2>
      <div className='faq__block-questions'>
        {issuingData.map((item) => (
          <details
            key={item.question}
            className='faq__details'
            open={openIndex === item.question}
            onClick={(e) => {
              e.preventDefault();
              handleToggle(item.question);
            }}
          >
            <summary className='faq__summary'>{item.question}</summary>
            <p className='faq__answer'>{item.answer}</p>
          </details>
        ))}
      </div>

      <h2 className='faq__title'>Using a credit card</h2>
      <div className='faq__block-questions'>
        {usingData.map((item) => (
          <details
            key={item.question}
            className='faq__details'
            open={openIndex === item.question}
            onClick={(e) => {
              e.preventDefault();
              handleToggle(item.question);
            }}
          >
            <summary className='faq__summary'>{item.question}</summary>
            <p className='faq__answer'>{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
