import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import './ScoringForm.scss';
import { Employment, FormData, ScoringFormProps } from './types';
import { fields, fieldsEmployment, initialValues, validationSchema } from './constants';

const ScoringForm: React.FC<ScoringFormProps> = ({ handleSubmit }) => {
  const {
    control,
    handleSubmit: handleFormSubmit,
    formState: { errors, isSubmitting, dirtyFields },
    trigger,
  } = useForm<FormData>({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const getClassNameInput = (name: keyof FormData | keyof FormData['employment']) => {
    const [mainField, subField] = name.split('.') as [keyof FormData, keyof FormData['employment']];
    const isError = subField
      ? errors.employment?.[subField] && dirtyFields.employment?.[subField]
      : errors[mainField] && dirtyFields[mainField];
    const isSuccess = subField
      ? !errors.employment?.[subField] && dirtyFields.employment?.[subField]
      : !errors[mainField] && dirtyFields[mainField];
    return `scoring-form__input
            ${isError ? 'scoring-form__input--error' : ''}
            ${isSuccess ? 'scoring-form__input--success' : ''}`;
  };

  const getClassNameSelect = (name: keyof FormData | keyof FormData['employment']) => {
    const [mainField, subField] = name.split('.') as [keyof FormData, keyof FormData['employment']];
    const isError = subField
      ? errors.employment?.[subField] && dirtyFields.employment?.[subField]
      : errors[mainField] && dirtyFields[mainField];
    return `scoring-form__select 
             ${isError ? 'scoring-form__select--error' : ''}`;
  };

  const handleChangeAndTrigger =
    (field: { onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void }, name: string) => 
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      field.onChange(e);
      trigger(name as keyof FormData);
    };

  return (
    <div className='scoring-form'>
      <form onSubmit={handleFormSubmit(handleSubmit)}>
        <div className='scoring-form__header'>
          <h2 className='scoring-form__header-title'>Continuation of the application</h2>
          <div className='scoring-form__step-info'>Step 2 of 5</div>
        </div>

        <div className='scoring-form__content-form'>
          {fields.map((field) => (
            <div key={field.name} className='scoring-form__form-group'>
              <label className='scoring-form__label' htmlFor={field.name}>
                {field.label}
              </label>
              <Controller
                name={field.name as keyof FormData}
                control={control}
                render={({ field: controllerField }) => {
                  if (field.type === 'select') {
                    return (
                      <select
                        {...controllerField}
                        id={field.name as keyof FormData | keyof Employment}
                        className={getClassNameSelect(field.name as keyof FormData)}
                        value={(controllerField.value as keyof FormData) ?? ''}
                        onChange={handleChangeAndTrigger(controllerField, field.name)}
                      >
                        {field.options?.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    );
                  }
                  return (
                    <input
                      {...controllerField}
                      type={field.type}
                      id={field.name}
                      placeholder={field.placeholder}
                      className={getClassNameInput(field.name as keyof FormData)}
                      value={(controllerField.value as keyof FormData) ?? ''}
                      onChange={handleChangeAndTrigger(controllerField, field.name)}
                    />
                  );
                }}
              />
              {errors[field.name as keyof FormData] &&
                dirtyFields[field.name as keyof FormData] && (
                  <div className='scoring-form__error'>
                    {errors[field.name as keyof FormData]?.message}
                  </div>
                )}
            </div>
          ))}
        </div>

        <h2 className='scoring-form__subtitle'>Employment</h2>
        <div className='scoring-form__content-form'>
          {fieldsEmployment.map((field) => (
            <div key={field.name} className='scoring-form__form-group'>
              <label className='scoring-form__label' htmlFor={field.name}>
                {field.label}
              </label>
              <Controller
                name={`employment.${field.name}` as keyof FormData}
                control={control}
                render={({ field: controllerField }) => {
                  if (field.type === 'select') {
                    return (
                      <select
                        {...controllerField}
                        id={field.name}
                        className={getClassNameSelect(`employment.${field.name}` as keyof FormData)}
                        value={(controllerField.value as keyof FormData) ?? ''}
                        onChange={handleChangeAndTrigger(
                          controllerField,
                          `employment.${field.name}`,
                        )}
                      >
                        {field.options?.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    );
                  }
                  return (
                    <input
                      {...controllerField}
                      type={field.type}
                      id={field.name}
                      placeholder={field.placeholder}
                      className={getClassNameInput(`employment.${field.name}` as keyof FormData)}
                      value={(controllerField.value as keyof FormData) ?? ''}
                      onChange={handleChangeAndTrigger(controllerField, `employment.${field.name}`)}
                    />
                  );
                }}
              />
              {errors[`employment.${field.name}` as keyof FormData] &&
                dirtyFields[`employment.${field.name}` as keyof FormData] && (
                  <div className='scoring-form__error'>
                    {errors[`employment.${field.name}` as keyof FormData]?.message}
                  </div>
                )}
            </div>
          ))}

          <div className='scoring-form__button-container'>
            <button type='submit' className='scoring-form__continue-button' disabled={isSubmitting}>
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ScoringForm;
