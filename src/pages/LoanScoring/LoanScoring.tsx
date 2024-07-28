import React, { useEffect, useState } from 'react';
import './LoanScoring.scss';
import ScoringForm from '@components/ScoringForm';
import Loader from '@components/Loader';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Employment {
  employmentStatus: 'UNEMPLOYED' | 'SELF_EMPLOYED' | 'EMPLOYED' | 'BUSINESS_OWNER';
  employerINN: string;
  salary: number;
  position: 'WORKER' | 'MID_MANAGER' | 'TOP_MANAGER' | 'OWNER';
  workExperienceTotal: number;
  workExperienceCurrent: number;
}

interface FormData {
  gender: 'MALE' | 'FEMALE';
  maritalStatus: 'MARRIED' | 'DIVORCED' | 'SINGLE' | 'WIDOW_WIDOWER';
  dependentAmount: number;
  passportIssueDate: string;
  passportIssueBranch: string;
  employment: Employment;
  account: string;
}

const LoanScoring: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string | null>(null);
  const [localApplicationId, setLocalApplicationId] = useState<string | null>(null);
  const { applicationId } = useParams<{ applicationId: string }>();

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

  const handleFormSubmit = async (values: FormData) => {
    setLoading(true);
    try {
      await axios.put(`${urlHost}/application/registration/${localApplicationId}`, values);
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
      case 'APPROVED':
        return <ScoringForm handleSubmit={handleFormSubmit} />;

      default:
        return (
          <div className='loan-scoring__step-message'>
            <h1>Wait for a decision on the application</h1>
            <p>The answer will come to your mail within 10 minutes</p>
          </div>
        );
    }
  };

  return <section className='loan-scoring'>{renderContent()}</section>;
};

export default LoanScoring;
