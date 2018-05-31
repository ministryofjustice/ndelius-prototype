import { IMultiFieldDate } from '../../../_shared/interface/three-field-date.interface';

export interface IOffenderDetails {
  name: string;
  address: string;
  phone: string;
  dateOfBirth: IMultiFieldDate;
  age: number;
  crn: string;
  pnc: string;
  saved: boolean;
  valid: boolean;
}
