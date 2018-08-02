interface IMonthYear {
  month: number;
  year: number;
}

export interface IPreviousRiskAssessment {
  roshCompleted: boolean;
  previousDate: IMonthYear;
  riskPublic: string;
  riskKnownAdult: string;
  riskChildren: string;
  riskPrisoners: string;
  riskStaff: string;
  attitude: string;
  saved: boolean;
  valid: boolean;
}
