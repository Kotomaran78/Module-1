import React, { useState } from 'react';
import './DocumentModal.scss';
import { useNavigate } from 'react-router-dom';
import { ModalProps } from './types';
import Close from '@assets/icons/Close_square.svg';

const DocumentModal: React.FC<ModalProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleConfirmDeny = () => {
    setIsSubmitted(true);
    //отмена заявки
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className='document-modal'>
      {isSubmitted ? (
        <div className='document-modal__modal'>
          <h3 className='document-modal__title'>Deny application</h3>
          <button className='document-modal__button-close' onClick={handleGoHome}>
            <img src={Close} alt='Close' />
          </button>
          <p className='document-modal__paragraph'>Your application has been denied!</p>

          <div className='document-modal__buttons-container'>
            <button className='document-modal__button-home' onClick={handleGoHome}>
              Go home
            </button>
          </div>
        </div>
      ) : (
        <div className='document-modal__modal'>
          <h3 className='document-modal__title'>Deny application</h3>
          <button className='document-modal__button-close' onClick={onClose}>
            <img src={Close} alt='Close' />
          </button>
          <p className='document-modal__paragraph'>
            You exactly sure, you want to cancel this application?
          </p>
          <div className='document-modal__buttons-container'>
            <button className='document-modal__button-deny' onClick={handleConfirmDeny}>
              Deny
            </button>
            <button className='document-modal__button-cancel' onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default DocumentModal;
