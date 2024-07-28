export interface FormData {
  amount: number;
  term: number;
  firstName: string;
  lastName: string;
  middleName?: string | null;
  email: string;
  birthdate: string;
  passportSeries: string;
  passportNumber: string;
}

export interface PrescoringFormProps {
  handleSubmit: (data: FormData) => void;
}
