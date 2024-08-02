export interface Employment {
  employmentStatus: 'UNEMPLOYED' | 'SELF_EMPLOYED' | 'EMPLOYED' | 'BUSINESS_OWNER';
  employerINN: string;
  salary: number;
  position: 'WORKER' | 'MID_MANAGER' | 'TOP_MANAGER' | 'OWNER';
  workExperienceTotal: number;
  workExperienceCurrent: number;
}

export interface FormData {
  gender: 'MALE' | 'FEMALE';
  maritalStatus: 'MARRIED' | 'DIVORCED' | 'SINGLE' | 'WIDOW_WIDOWER';
  dependentAmount: number;
  passportIssueDate: string;
  passportIssueBranch: string;
  employment: Employment;
  account: string;
}

export interface Field {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  options?: string[];
}

export interface accountData {
  gender: 'MALE';
  maritalStatus: 'SINGLE';
  employment: {
    employmentStatus: 'EMPLOYED';
    position: 'WORKER';
  };
  account: string;
}

export interface ScoringFormProps {
  handleSubmit: (data: FormData) => void;
}
