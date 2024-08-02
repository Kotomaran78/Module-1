import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './LoanDocumentSign.scss';
import DocumentSignCheckbox from '@components/Checkbox';
import Loader from '@components/Loader';
import PDF_Icon from '@assets/icons/PDF_Icon.svg';
import PDF_File from '@assets/documents/credit-card-offer.pdf';

const LoanDocumentSign = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string | null>(null);
  const [localApplicationId, setLocalApplicationId] = useState<string | null>(null);
  const { applicationId } = useParams<{ applicationId: string }>();
  const [isChecked, setIsChecked] = useState(false);

  const urlHost = 'https://8080-kotomaran78-dockercompo-usoyjrpml5c.ws-eu115.gitpod.io';

  const fetchStatus = async (id: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`${urlHost}/admin/application/${id}`);
      setStatus(response.data.status);
      localStorage.setItem('status', JSON.stringify(response.data.status));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedApplicationId = localStorage.getItem('applicationId');
    if (savedApplicationId) {
      fetchStatus(savedApplicationId);
      setLocalApplicationId(savedApplicationId);
    } else if (applicationId) {
      fetchStatus(applicationId);
      setLocalApplicationId(applicationId);
    }
  }, [applicationId]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.post(`${urlHost}/document/${applicationId}/sign`);
      fetchStatus(String(localApplicationId));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    if (loading) {
      return <Loader />;
    }

    if (!status) {
      return (
        <h2>
          Ошибка: заявки с id:
          <strong>{applicationId} </strong>
          не найдено
        </h2>
      );
    }

    switch (status) {
      case 'DOCUMENT_CREATED':
        return (
          <div className='loan-document-sign__content'>
            <div className='loan-document-sign__header'>
              <h2 className='loan-document-sign__header-title'>Payment Schedule</h2>
              <div className='loan-document-sign__step-info'>Step 4 of 5</div>
            </div>

            <div className='loan-document-sign__info'>
              <p className='loan-document-sign__information'>
                Information on interest rates under bank deposit agreements with individuals. Center
                for Corporate Information Disclosure. Information of a professional participant in
                the securities market. Information about persons under whose control or significant
                influence the Partner Banks are. By leaving an application, you agree to the
                processing of personal data, obtaining information, obtaining access to a credit
                history, using an analogue of a handwritten signature, an offer, a policy regarding
                the processing of personal data, a form of consent to the processing of personal
                data.
              </p>
              <a
                className='loan-document-sign__pdf-link'
                href={PDF_File}
                download='credit-card-offer.pdf'
              >
                <img className='loan-document-sign__pdf-img' src={PDF_Icon} alt='Download PDF' />
                Information on your card
              </a>

              <div className='loan-document__action-submit'>
                <DocumentSignCheckbox
                  label='I agree'
                  isChecked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />

                <button
                  className='loan-document-sign__button-submit'
                  onClick={handleSubmit}
                  disabled={!isChecked}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className='loan-document-sign__step-message'>
            <h1>Documents have been successfully signed and sent for approval</h1>
            <p>Within 10 minutes you will be sent a PIN code to your email for confirmation</p>
          </div>
        );
    }
  };

  return <section className='loan-document-sign'>{renderContent()}</section>;
};

export default LoanDocumentSign;
