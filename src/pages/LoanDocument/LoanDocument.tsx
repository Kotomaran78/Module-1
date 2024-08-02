import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoanDocument.scss';
import DocumentTable from '@components/DocumentTable';
import DocumentCheckbox from '@components/Checkbox';
import DocumentModal from '@components/DocumentModal';
import { PaymentSchedule } from './types';
import Loader from '@components/Loader';

const LoanDocument = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string | null>(null);
  const [localApplicationId, setLocalApplicationId] = useState<string | null>(null);
  const { applicationId } = useParams<{ applicationId: string }>();
  const [data, setData] = useState<PaymentSchedule[]>([]);
  // const [data, setData] = useState<PaymentSchedule[]>([
  //   {
  //     number: 1,
  //     date: '2024-08-27',
  //     totalPayment: 31000,
  //     interestPayment: 4000,
  //     debtPayment: 27000,
  //     remainingDebt: 873000,
  //   },
  //   {
  //     number: 2,
  //     date: '2024-09-26',
  //     totalPayment: 32000,
  //     interestPayment: 5000,
  //     debtPayment: 27000,
  //     remainingDebt: 846000,
  //   },
  //   {
  //     number: 3,
  //     date: '2024-10-26',
  //     totalPayment: 33000,
  //     interestPayment: 3000,
  //     debtPayment: 30000,
  //     remainingDebt: 816000,
  //   },
  //   {
  //     number: 4,
  //     date: '2024-11-25',
  //     totalPayment: 34000,
  //     interestPayment: 4500,
  //     debtPayment: 29500,
  //     remainingDebt: 786500,
  //   },
  //   {
  //     number: 5,
  //     date: '2024-12-25',
  //     totalPayment: 35000,
  //     interestPayment: 6000,
  //     debtPayment: 29000,
  //     remainingDebt: 757500,
  //   },
  //   {
  //     number: 6,
  //     date: '2025-01-24',
  //     totalPayment: 36000,
  //     interestPayment: 4000,
  //     debtPayment: 32000,
  //     remainingDebt: 725500,
  //   },
  //   {
  //     number: 7,
  //     date: '2025-02-23',
  //     totalPayment: 37000,
  //     interestPayment: 3500,
  //     debtPayment: 33500,
  //     remainingDebt: 692000,
  //   },
  //   {
  //     number: 8,
  //     date: '2025-03-25',
  //     totalPayment: 38000,
  //     interestPayment: 5500,
  //     debtPayment: 32500,
  //     remainingDebt: 659500,
  //   },
  //   {
  //     number: 9,
  //     date: '2025-04-24',
  //     totalPayment: 39000,
  //     interestPayment: 2000,
  //     debtPayment: 37000,
  //     remainingDebt: 622500,
  //   },
  //   {
  //     number: 10,
  //     date: '2025-05-24',
  //     totalPayment: 40000,
  //     interestPayment: 7000,
  //     debtPayment: 33000,
  //     remainingDebt: 589500,
  //   },
  //   {
  //     number: 11,
  //     date: '2025-06-23',
  //     totalPayment: 41000,
  //     interestPayment: 2500,
  //     debtPayment: 38500,
  //     remainingDebt: 551000,
  //   },
  //   {
  //     number: 12,
  //     date: '2025-07-23',
  //     totalPayment: 42000,
  //     interestPayment: 1500,
  //     debtPayment: 40500,
  //     remainingDebt: 510500,
  //   },
  //   {
  //     number: 13,
  //     date: '2025-08-22',
  //     totalPayment: 43000,
  //     interestPayment: 8000,
  //     debtPayment: 35000,
  //     remainingDebt: 475500,
  //   },
  //   {
  //     number: 14,
  //     date: '2025-09-21',
  //     totalPayment: 44000,
  //     interestPayment: 500,
  //     debtPayment: 43500,
  //     remainingDebt: 432000,
  //   },
  //   {
  //     number: 15,
  //     date: '2025-10-21',
  //     totalPayment: 45000,
  //     interestPayment: 6000,
  //     debtPayment: 39000,
  //     remainingDebt: 393000,
  //   },
  //   {
  //     number: 16,
  //     date: '2025-11-20',
  //     totalPayment: 46000,
  //     interestPayment: 7500,
  //     debtPayment: 38500,
  //     remainingDebt: 354500,
  //   },
  //   {
  //     number: 17,
  //     date: '2025-12-20',
  //     totalPayment: 47000,
  //     interestPayment: 2000,
  //     debtPayment: 45000,
  //     remainingDebt: 309500,
  //   },
  //   {
  //     number: 18,
  //     date: '2026-01-19',
  //     totalPayment: 48000,
  //     interestPayment: 4000,
  //     debtPayment: 44000,
  //     remainingDebt: 265500,
  //   },
  //   {
  //     number: 19,
  //     date: '2026-02-18',
  //     totalPayment: 49000,
  //     interestPayment: 3000,
  //     debtPayment: 46000,
  //     remainingDebt: 219500,
  //   },
  //   {
  //     number: 20,
  //     date: '2026-03-20',
  //     totalPayment: 50000,
  //     interestPayment: 3500,
  //     debtPayment: 46500,
  //     remainingDebt: 173000,
  //   },
  //   {
  //     number: 21,
  //     date: '2026-04-19',
  //     totalPayment: 51000,
  //     interestPayment: 6000,
  //     debtPayment: 45000,
  //     remainingDebt: 128000,
  //   },
  //   {
  //     number: 22,
  //     date: '2026-05-19',
  //     totalPayment: 52000,
  //     interestPayment: 2500,
  //     debtPayment: 49500,
  //     remainingDebt: 78500,
  //   },
  //   {
  //     number: 23,
  //     date: '2026-06-18',
  //     totalPayment: 53000,
  //     interestPayment: 7000,
  //     debtPayment: 46000,
  //     remainingDebt: 32500,
  //   },
  //   {
  //     number: 24,
  //     date: '2026-07-18',
  //     totalPayment: 54000,
  //     interestPayment: 500,
  //     debtPayment: 53500,
  //     remainingDebt: 0,
  //   },
  // ]); //sdaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssssssssss
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${urlHost}/admin/application/${applicationId}`);
        setData(response.data.credit.paymentSchedule);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [applicationId]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.post(`${urlHost}/document/${applicationId}`);
      fetchStatus(String(localApplicationId));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeny = () => {
    setShowModal(true);
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
      case 'CC_APPROVED':
        return (
          <>
            <div className='loan-document__content'>
              <div className='loan-document__header'>
                <h2 className='loan-document__header-title'>Payment Schedule</h2>
                <div className='loan-document__step-info'>Step 3 of 5</div>
              </div>

              <DocumentTable data={data} />

              <div className='loan-document__actions'>
                <button className='loan-document__button-deny' onClick={handleDeny}>
                  Deny
                </button>
                <div className='loan-document__action-submit'>
                  <DocumentCheckbox
                    label='I agree with the payment schedule'
                    isChecked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />

                  <button
                    className='loan-document__button-submit'
                    onClick={handleSubmit}
                    disabled={!isChecked}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>

            {showModal && <DocumentModal onClose={() => setShowModal(false)} />}
          </>
        );

      default:
        return (
          <div className='loan-document__step-message'>
            <h1>Documents are formed</h1>
            <p>Documents for signing will be sent to your email</p>
          </div>
        );
    }
  };

  return <section className='loan-document'>{renderContent()}</section>;
};

export default LoanDocument;
