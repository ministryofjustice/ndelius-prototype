import { IMultiFieldDate } from '../../../_shared/interface/three-field-date.interface';

export interface ISignature {
  reportAuthor: string;
  address: string;
  division: string;
  email: string;
  phone: string;
  counterSignature: string;
  counterSignatureRole: string;
  reportDate: IMultiFieldDate;
  saved: boolean;
  valid: boolean;
}
