export interface IRiskCustody {
  riskPublic: string;
  riskKnownAdult: string;
  riskChildren: string;
  riskPrisoners: string;
  riskSelf: string;
  riskStaff: string;
  riskOthers: string;
  saved: boolean;
  valid: boolean;
}
