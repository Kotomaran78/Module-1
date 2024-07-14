import * as Yup from 'yup';

export const initialValues = {
  amount: 150000,
  term: 6,
  firstName: '',
  lastName: '',
  middleName: '',
  email: '',
  birthdate: '',
  passportSeries: '',
  passportNumber: '',
};

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Enter your first name'),
  lastName: Yup.string().required('Enter your last name'),
  email: Yup.string().email('Incorrect email address').required('This field is required'),
  birthdate: Yup.string()
    .required('This field is required')
    .test('age', 'Incorrect date of birth', (value) => {
      if (!value) return true;
      const birthDate = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      return age >= 18;
    }),
  passportSeries: Yup.string()
    .required('This field is required')
    .matches(/^\d{4}$/, 'The series must be 4 digits'),
  passportNumber: Yup.string()
    .required('This field is required')
    .matches(/^\d{6}$/, 'The series must be 6 digits'),
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
