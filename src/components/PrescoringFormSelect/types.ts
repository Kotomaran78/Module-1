export interface SelectData {
  applicationId: number;
  requestedAmount: number;
  totalAmount: number;
  term: number;
  monthlyPayment: number;
  rate: number;
  isInsuranceEnabled: boolean;
  isSalaryClient: boolean;
}

export interface PrescoringFormSelectProps {
  results: SelectData[];
  onSelect: (result: SelectData) => void;
}