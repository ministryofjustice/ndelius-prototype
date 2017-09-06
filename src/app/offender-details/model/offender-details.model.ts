export interface IDateOfBirth {
  day: number;
  month: number;
  year: number;
}

export interface IOffenderDetails {
  name: string;
  address: string;
  dateOfBirth: IDateOfBirth;
  age: number;
  crn: string;
  pnc: string;
  saved: boolean;
  valid: boolean;
}
