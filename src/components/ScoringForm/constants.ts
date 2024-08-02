import * as yup from 'yup';
import { Field, accountData } from './types';

export const initialValues: accountData = {
  gender: 'MALE',
  maritalStatus: 'SINGLE',
  employment: {
    employmentStatus: 'EMPLOYED',
    position: 'WORKER',
  },
  account: '11223344556677889900',
};

export const validationSchema = yup.object().shape({
  gender: yup
    .string()
    .oneOf(['MALE', 'FEMALE'], 'Select one of the options')
    .required('Gender is required'),
  maritalStatus: yup
    .string()
    .oneOf(['MARRIED', 'DIVORCED', 'SINGLE', 'WIDOW_WIDOWER'], 'Select one of the options')
    .required('Marital status is required'),
  dependentAmount: yup
    .number()
    .typeError('Dependent amount must be a number')
    .integer('Dependent amount must be an integer')
    .min(0, 'Dependent amount cannot be negative')
    .required('Dependent amount is required'),
  passportIssueDate: yup
    .string()
    .required('Issue date is required')
    .test('passportIssueDate', 'Incorrect date of passport issue date', (value) => {
      if (!value) return true;
      const issueDate = new Date(value);
      return issueDate <= new Date();
    }),
  passportIssueBranch: yup
    .string()
    .matches(/^[0-9]{6}/, 'The series must be 6 digits')
    .required('Passport issue branch is required'),
  employment: yup.object().shape({
    employmentStatus: yup
      .string()
      .oneOf(
        ['UNEMPLOYED', 'SELF_EMPLOYED', 'EMPLOYED', 'BUSINESS_OWNER'],
        'Select one of the options',
      )
      .required('Employment status is required'),
    employerINN: yup
      .string()
      .matches(/^[0-9]{12}$/, 'Employer INN must be 12 digits')
      .required('Employer INN is required'),
    salary: yup
      .number()
      .typeError('Salary must be a number')
      .min(0, 'Salary cannot be negative')
      .required('Enter your salary'),
    position: yup
      .string()
      .oneOf(['WORKER', 'MID_MANAGER', 'TOP_MANAGER', 'OWNER'], 'Select one of the options')
      .required('Position is required'),
    workExperienceTotal: yup
      .number()
      .typeError('Total work experience must be a number')
      .integer('Total work experience must be an integer')
      .min(0, 'Total work experience cannot be negative')
      .max(99, 'Enter your work experience total')
      .required('Total work experience is required'),
    workExperienceCurrent: yup
      .number()
      .typeError('Current work experience must be a number')
      .integer('Current work experience must be an integer')
      .min(0, 'Current work experience cannot be negative')
      .max(99, 'Enter your work experience current')
      .required('Current work experience is required'),
  }),
  account: yup
    .string()
    .matches(/^[0-9]{20}$/, 'Account number must be 20 digits')
    .required('Account is required'),
});

export const fields: Field[] = [
  { name: 'gender', type: 'select', label: 'Gender *', options: ['MALE', 'FEMALE'] },
  {
    name: 'maritalStatus',
    type: 'select',
    label: 'Marital Status *',
    options: ['MARRIED', 'DIVORCED', 'SINGLE', 'WIDOW_WIDOWER'],
  },
  {
    name: 'dependentAmount',
    type: 'number',
    label: 'Dependent Amount *',
    placeholder: 'For example 3',
  },
  {
    name: 'passportIssueDate',
    type: 'date',
    label: 'Passport Issue Date *',
    placeholder: 'Select Date and Time',
  },
  {
    name: 'passportIssueBranch',
    type: 'text',
    label: 'Passport Issue Branch *',
    placeholder: '123456',
  },
];

export const fieldsEmployment: Field[] = [
  {
    name: 'employmentStatus',
    type: 'select',
    label: 'Employment Status *',
    options: ['UNEMPLOYED', 'SELF_EMPLOYED', 'EMPLOYED', 'BUSINESS_OWNER'],
  },
  { name: 'employerINN', type: 'text', label: 'Employer INN *', placeholder: '123456789012' },
  { name: 'salary', type: 'number', label: 'Salary *', placeholder: 'For example 100 000' },
  {
    name: 'position',
    type: 'select',
    label: 'Position *',
    options: ['WORKER', 'MID_MANAGER', 'TOP_MANAGER', 'OWNER'],
  },
  {
    name: 'workExperienceTotal',
    type: 'number',
    label: 'Total Work Experience *',
    placeholder: 'For example 10',
  },
  {
    name: 'workExperienceCurrent',
    type: 'number',
    label: 'Current Work Experience *',
    placeholder: 'For example 2',
  },
];
