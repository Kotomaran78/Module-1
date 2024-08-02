import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './LoanDocumentCode.scss';
import { Controller, useForm } from 'react-hook-form';
import Loader from '@components/Loader';
import HappyBox from '@assets/img/HappyBox.png';

interface CodeFormData {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
}

const LoanDocumentCode = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string | null>(null);
  const [localApplicationId, setLocalApplicationId] = useState<string | null>(null);
  const { applicationId } = useParams<{ applicationId: string }>();
  const [statusCode, setStatusCode] = useState<boolean>(false);

  const { control, handleSubmit, setFocus } = useForm<CodeFormData>({
    defaultValues: { code1: '', code2: '', code3: '', code4: '' },
  });
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  const handleKeyUp = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && index > 0) {
      setFocus(`code${index}` as keyof CodeFormData);
    } else if (event.key === 'Enter') {
      handleSubmit(onSubmit)();
    }
  };

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

  const onSubmit = async (data: CodeFormData) => {
    setLoading(true);
    const enteredCode = Number(`${data.code1}${data.code2}${data.code3}${data.code4}`);
    try {
      await axios.post(`${urlHost}/document/${applicationId}/sign/code`, { code: enteredCode });
      fetchStatus(String(localApplicationId));
    } catch (error) {
      console.error(error);
      setStatusCode(true);
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
      case 'DOCUMENT_SIGNED':
        return (
          <div className='loan-document-code__content'>
            <h2 className='loan-document-code__title'>Please enter confirmation code</h2>
            <form className='loan-document-code__form'>
              <div className='loan-document-code__input-codes'>
                {['code1', 'code2', 'code3', 'code4'].map((field, index) => (
                  <Controller
                    key={field}
                    name={field as keyof CodeFormData}
                    control={control}
                    rules={{
                      required: true,
                      pattern: /^[0-9]$/,
                    }}
                    render={({ field: { onChange, onBlur, ref } }) => (
                      <input
                        className='loan-document-code__input'
                        ref={(el) => {
                          refs.current[index] = el;
                          ref(el);
                        }}
                        type='text'
                        placeholder='&#9711;'
                        maxLength={1}
                        onChange={(e) => {
                          onChange(e);
                          if (e.target.value.length === 1 && index < 3) {
                            setFocus(`code${index + 2}` as keyof CodeFormData);
                          }
                        }}
                        onBlur={onBlur}
                        onKeyUp={(e) => handleKeyUp(index, e)}
                      />
                    )}
                  />
                ))}
              </div>
              {statusCode ? (
                <p className='loan-document-code__error'>Invalid confirmation code</p>
              ) : (
                <></>
              )}
            </form>
          </div>
        );

      default:
        return (
          <div className='loan-document-code__step-message'>
            <img src={HappyBox} alt='Congratulations images' />
            <h1>Congratulations! You have completed your new credit card.</h1>
            <p>Your credit card will arrive soon. Thank you for choosing us!</p>
            <button>View other offers of our bank</button>
          </div>
        );
    }
  };

  return <section className='loan-document-code'>{renderContent()}</section>;
};

export default LoanDocumentCode;
