export interface PaymentSchedule {
  number: number;
  date: string;
  totalPayment: number;
  interestPayment: number;
  debtPayment: number;
  remainingDebt: number;
}

export interface DocumentTableProps {
  data: PaymentSchedule[];
}
