export interface IDateOfBirth {
  day: number;
  month: number;
  year: number;
}

export interface IPrisonerDetails {
  name: string;
  address: string;
  phone: string;
  dateOfBirth: IDateOfBirth;
  age: number;
  crn: string;
  pnc: string;
  saved: boolean;
  valid: boolean;
}
