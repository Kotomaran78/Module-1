import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { fields, initialValues, validationSchema } from './constants';
import './CardApplicationForm.scss';
import { FormValues } from './types';
import Spinner from '@assets/icons/Spinner.svg';

const CardApplicationForm: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number>(initialValues.amount);
  const [amountError, setAmountError] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleAmountChange = (
    value: number,
    setFieldValue: (field: keyof FormValues, value: number, shouldValidate?: boolean) => void,
  ) => {
    setSelectedAmount(value);
    setAmountError(false);
    setFieldValue('amount', value);
  };

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 10000));

    try {
      const response = await fetch('/application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        console.log('Form submitted successfully:', values);
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {({ setFieldValue, errors, touched }) => (
        <div className='card-application-form'>
          {isSubmitting ? (
            <div className='card-application-form__loader'>
              <img src={Spinner} alt='Spinner' />
            </div>
          ) : (
            <div>
              <div className='card-application-form__top-content'>
                <div className='card-application-form__left'>
                  <div className='card-application-form__header'>
                    <h2 className='card-application-form__header-title'>Customize your card</h2>
                    <div className='card-application-form__step-info'>Step 1 of 5</div>
                  </div>
                  <div className='card-application-form__section-slider'>
                    <h3 className='card-application-form__slider-title'>Select amount</h3>
                    <div className='card-application-form__amount-value'>{selectedAmount}</div>
                    <div className='card-application-form__slider-container'>
                      <input
                        type='range'
                        min={15000}
                        max={600000}
                        value={selectedAmount}
                        onChange={(e) =>
                          handleAmountChange(parseInt(e.target.value, 10), setFieldValue)
                        }
                        className='card-application-form__slider'
                      />
                      <div className='card-application-form__slider-minmax'>
                        <p className='card-application-form__slider-min'>15000</p>
                        <p className='card-application-form__slider-max'>600000</p>
                      </div>
                    </div>
                    {amountError && <p className='card-application-form__error'>Invalid amount</p>}
                  </div>
                </div>
                <div className='card-application-form__divider'></div>
                <div className='card-application-form__right'>
                  <div className='card-application-form__section-amount'>
                    <h3 className='card-application-form__amount-title'>
                      You have chosen the amount
                    </h3>
                    <div className='card-application-form__amount-selected'>{selectedAmount} ₽</div>
                  </div>
                </div>
              </div>

              <div className='card-application-form__content-form'>
                <h2 className='card-application-form__form-title'>Contact Information</h2>

                <Form className='card-application-form__form'>
                  {fields.map((field) => {
                    const isError =
                      errors[field.name as keyof FormValues] &&
                      touched[field.name as keyof FormValues];
                    const isSuccess =
                      !errors[field.name as keyof FormValues] &&
                      touched[field.name as keyof FormValues];

                    return (
                      <div key={field.name} className={'card-application-form__form-group'}>
                        <label className='card-application-form__label' htmlFor={field.name}>
                          {field.label}
                        </label>
                        <Field
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          placeholder={field.placeholder}
                          className={`card-application-form__input 
                                  ${isError ? 'card-application-form__input--error' : ''} 
                                  ${isSuccess ? 'card-application-form__input--success' : ''}`}
                        />
                        <ErrorMessage
                          name={field.name}
                          component='div'
                          className='card-application-form__error'
                        />
                      </div>
                    );
                  })}
                  <div className='card-application-form__form-group'>
                    <label className='card-application-form__label' htmlFor='term'>
                      Select term *
                    </label>
                    <Field
                      as='select'
                      id='term'
                      name='term'
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setFieldValue('term', parseInt(e.target.value, 10));
                      }}
                      className='card-application-form__select'
                    >
                      <option value={6}>6 month</option>
                      <option value={12}>12 month</option>
                      <option value={18}>18 month</option>
                      <option value={24}>24 month</option>
                    </Field>
                    <ErrorMessage
                      name='term'
                      component='div'
                      className='card-application-form__error'
                    />
                  </div>
                  <div className='card-application-form__button-container'>
                    <button type='submit' className='card-application-form__continue-button'>
                      Continue
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          )}
        </div>
      )}
    </Formik>
  );
};

export default CardApplicationForm;
