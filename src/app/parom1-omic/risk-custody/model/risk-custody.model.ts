export interface IRiskCustody {
  riskPublic: string;
  riskKnownAdult: string;
  riskChildren: string;
  riskPrisoners: string;
  riskSelf: string;
  riskOthers: string;
  saved: boolean;
  valid: boolean;
}
