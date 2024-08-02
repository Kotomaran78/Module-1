import * as yup from 'yup';

export const initialValues = {
  amount: 150000,
  term: 6,
  firstName: '',
  lastName: '',
  middleName: null,
  email: '',
  birthdate: '',
  passportSeries: '',
  passportNumber: '',
};

export const MIN_AMOUNT = 15000;
export const MAX_AMOUNT = 600000;

export const validationSchema = yup.object().shape({
  amount: yup.number().min(MIN_AMOUNT).max(MAX_AMOUNT).required('Amount is required'),
  firstName: yup
    .string()
    .matches(/^[A-Za-z-]{2,30}$/, 'Enter your first name')
    .required('First name is required'),
  lastName: yup
    .string()
    .matches(/^[A-Za-z-]{2,30}$/, 'Enter your last name')
    .required('Last name is required'),
  middleName: yup
    .string()
    .nullable()
    .transform((value) => (value === '' ? null : value))
    .matches(/^[A-Za-z-]{2,30}$/, 'Invalid patronymic')
    .notRequired(),
  email: yup.string().email('Incorrect email address').required('Email is required'),
  birthdate: yup
    .string()
    .required('This field is required')
    .test('age', 'Incorrect date of birth', (value) => {
      if (!value) return true;
      const birthDate = new Date(value);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();

      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age >= 18 && age <= 120;
    }),
  passportSeries: yup
    .string()
    .matches(/^[0-9]{4}$/, 'The series must be 4 digits')
    .required('Passport series is required'),
  passportNumber: yup
    .string()
    .matches(/^[0-9]{6}$/, 'The series must be 6 digits')
    .required('Passport number is required'),
  term: yup.number().min(6).required('Term is required'),
});

export const fields = [
  { name: 'lastName', type: 'text', label: 'Your last name *', placeholder: 'For Example Doe' },
  { name: 'firstName', type: 'text', label: 'Your first name *', placeholder: 'For Example Jhon' },
  {
    name: 'middleName',
    type: 'text',
    label: 'Your patronymic',
    placeholder: 'For Example Victorovich',
  },
  { name: 'email', type: 'email', label: 'Your email *', placeholder: 'test@gmail.com' },
  {
    name: 'birthdate',
    type: 'date',
    label: 'Your date of birth *',
    placeholder: 'Select Date and Time',
  },
  { name: 'passportSeries', type: 'text', label: 'Your passport series *', placeholder: '0000' },
  { name: 'passportNumber', type: 'text', label: 'Your passport number *', placeholder: '000000' },
];
