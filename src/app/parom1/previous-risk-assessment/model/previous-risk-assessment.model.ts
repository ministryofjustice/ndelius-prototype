interface IMonthYear {
  month: number;
  year: number;
}

export interface IPreviousRiskAssessment {
  roshCompleted: string;
  previousDate: IMonthYear;
  riskPublic: string;
  riskKnownAdult: string;
  riskChildren: string;
  riskPrisoners: string;
  riskStaff: string;
  attitude: string;
  attitudePrevious: string;
  saved: boolean;
  valid: boolean;
}
