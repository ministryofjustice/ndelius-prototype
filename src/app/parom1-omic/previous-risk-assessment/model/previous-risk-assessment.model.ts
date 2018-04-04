interface IMonthYear {
  month: number;
  year: number;
}

export interface IPreviousRiskAssessment {
  previousDate: IMonthYear;
  attitude: string;
  saved: boolean;
  valid: boolean;
}
