interface IMonthYear {
  month: number;
  year: number;
}

export interface IPreviousRiskAssessment {
  previousDate: IMonthYear;
  riskPublic: string;
  riskKnownAdult: string;
  riskChildren: string;
  riskPrisoners: string;
  attitude: string;
  saved: boolean;
  valid: boolean;
}
