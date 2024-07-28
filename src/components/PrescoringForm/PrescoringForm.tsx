import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import './PrescoringForm.scss';
import { FormData, PrescoringFormProps } from './types';
import { MAX_AMOUNT, MIN_AMOUNT, fields, initialValues, validationSchema } from './constants';

const PrescoringForm: React.FC<PrescoringFormProps> = ({ handleSubmit }) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(initialValues.amount);

  const {
    control,
    handleSubmit: handleFormSubmit,
    formState: { errors, isSubmitting, dirtyFields },
    setValue,
    trigger,
  } = useForm<FormData>({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const onAmountChange = (value: number) => {
    setSelectedAmount(value);
    setValue('amount', value);
    trigger('amount');
  };

  const getClassName = (name: keyof FormData) => {
    const isError = errors[name] && dirtyFields[name];
    const isSuccess = !errors[name] && dirtyFields[name];
    return `prescoring-form__input 
            ${isError ? 'prescoring-form__input--error' : ''}
            ${isSuccess ? 'prescoring-form__input--success' : ''}`;
  };

  return (
    <div className='prescoring-form'>
      <form onSubmit={handleFormSubmit(handleSubmit)}>
        <div className='prescoring-form__top-content'>
          <div className='prescoring-form__left'>
            <div className='prescoring-form__header'>
              <h2 className='prescoring-form__header-title'>Customize your card</h2>
              <div className='prescoring-form__step-info'>Step 1 of 5</div>
            </div>
            <div className='prescoring-form__section-slider'>
              <h3 className='prescoring-form__slider-title'>Select amount</h3>
              <div className='prescoring-form__amount-value'>{selectedAmount}</div>
              <div className='prescoring-form__slider-container'>
                <Controller
                  name='amount'
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type='range'
                      min={MIN_AMOUNT}
                      max={MAX_AMOUNT}
                      value={selectedAmount}
                      onChange={(e) => onAmountChange(parseInt(e.target.value, 10))}
                      className='prescoring-form__slider'
                    />
                  )}
                />
                <div className='prescoring-form__slider-minmax'>
                  <p className='prescoring-form__slider-min'>{MIN_AMOUNT}</p>
                  <p className='prescoring-form__slider-max'>{MAX_AMOUNT}</p>
                </div>
              </div>
              {errors.amount && <p className='prescoring-form__error'>{errors.amount.message}</p>}
            </div>
          </div>
          <div className='prescoring-form__divider'></div>
          <div className='prescoring-form__right'>
            <div className='prescoring-form__section-amount'>
              <h3 className='prescoring-form__amount-title'>You have chosen the amount</h3>
              <div className='prescoring-form__amount-selected'>{selectedAmount} ₽</div>
            </div>
          </div>
        </div>

        <div className='prescoring-form__content-form'>
          <h2 className='prescoring-form__form-title'>Contact Information</h2>
          <div className='prescoring-form__form'>
            {fields.map((field) => (
              <div key={field.name} className='prescoring-form__form-group'>
                <label className='prescoring-form__label' htmlFor={field.name}>
                  {field.label}
                </label>
                <Controller
                  name={field.name as keyof FormData}
                  control={control}
                  render={({ field: controllerField }) => {
                    return (
                      <input
                        {...controllerField}
                        type={field.type}
                        id={field.name}
                        placeholder={field.placeholder}
                        className={getClassName(field.name as keyof FormData)}
                        value={controllerField.value ?? ''}
                        onChange={(e) => {
                          controllerField.onChange(e);
                          trigger(field.name as keyof FormData);
                        }}
                      />
                    );
                  }}
                />
                {errors[field.name as keyof FormData] &&
                  dirtyFields[field.name as keyof FormData] && (
                    <div className='prescoring-form__error'>
                      {errors[field.name as keyof FormData]?.message}
                    </div>
                  )}
              </div>
            ))}

            <div className='prescoring-form__form-group'>
              <label className='prescoring-form__label' htmlFor='term'>
                Select term *
              </label>
              <Controller
                name='term'
                control={control}
                render={({ field }) => (
                  <select {...field} id='term' className='prescoring-form__select'>
                    <option value={6}>6 months</option>
                    <option value={12}>12 months</option>
                    <option value={18}>18 months</option>
                    <option value={24}>24 months</option>
                  </select>
                )}
              />
              {errors.term && <div className='prescoring-form__error'>{errors.term.message}</div>}
            </div>

            <div className='prescoring-form__button-container'>
              <button
                type='submit'
                className='prescoring-form__continue-button'
                disabled={isSubmitting}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PrescoringForm;
