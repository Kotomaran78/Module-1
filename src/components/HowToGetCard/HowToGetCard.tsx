import React, { useEffect } from 'react';
import './HowToGetCard.scss';
import { cardSteps } from './constants';
import { useApplicationLogic } from './applicationLogic';
import Loader from '@components/Loader';
import PrescoringForm from '@components/PrescoringForm';
import PrescoringFormApproved from '@components/PrescoringFormApproved';
import PrescoringFormSelect from '@components/PrescoringFormSelect';

const HowToGetCard: React.FC = () => {
  const {
    loading,
    results,
    setResults,
    setSelectedResult,
    status,
    fetchStatus,
    handleFormSubmit,
    handleSelectResult,
  } = useApplicationLogic();

  useEffect(() => {
    const savedApplicationId = localStorage.getItem('applicationId');
    const savedResults = localStorage.getItem('results');
    const savedSelectedResult = localStorage.getItem('selectedResult');

    if (savedApplicationId) {
      fetchStatus(Number(savedApplicationId));
    }

    if (savedResults) {
      setResults(JSON.parse(savedResults));
    }

    if (savedSelectedResult) {
      setSelectedResult(JSON.parse(savedSelectedResult));
    }
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loader />;
    }

    if (!status) {
      return <PrescoringForm handleSubmit={handleFormSubmit} />;
    }

    switch (status) {
      case 'REQUEST_DENIED':
        return <p>Your request was denied.</p>;
      case 'PREAPPROVAL':
        return <PrescoringFormSelect results={results} onSelect={handleSelectResult} />;
      case 'APPROVED':
        return <PrescoringFormApproved />;
      default:
        return <p>Unknown status.</p>;
    }
  };

  return (
    <section className='how-to-get-card'>
      <h2 className='how-to-get-card__title'>How to get a card</h2>
      <div className='how-to-get-card__steps'>
        {cardSteps.map((step) => (
          <div className='how-to-get-card__step' key={step.number}>
            <div className='how-to-get-card__step-title'>
              <div className='how-to-get-card__step-number'>{step.number}</div>
              <div className='how-to-get-card__line'></div>
            </div>
            <p className='how-to-get-card__step-description'>{step.description}</p>
          </div>
        ))}
      </div>
      {renderContent()}
    </section>
  );
};

export default HowToGetCard;
