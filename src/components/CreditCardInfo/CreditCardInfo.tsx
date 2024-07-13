import React, { useState } from 'react';
import './CreditCardInfo.scss';
import creditCardTabsData from './constants';

const CreditCardInfo: React.FC = () => {
  const [activeTab, setActiveTab] = useState(creditCardTabsData[0].id);

  const ActiveComponent = creditCardTabsData.find((tab) => tab.id === activeTab)?.component;

  return (
    <section className='credit-card-section'>
      <nav className='credit-card-section__nav'>
        {creditCardTabsData.map((tab) => (
          <button
            key={tab.id}
            className={`credit-card-section__nav-item ${activeTab === tab.id ? 'credit-card-section__nav-item--active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className='credit-card-section__content'>{ActiveComponent && <ActiveComponent />}</div>
    </section>
  );
};

export default CreditCardInfo;
