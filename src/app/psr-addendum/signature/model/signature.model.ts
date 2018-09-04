import { IMultiFieldDate } from '../../../_shared/interface/three-field-date.interface';

export interface ISignature {
  reportAuthor: string;
  office: string;
  phone: string;
  counterSignature: string;
  reportDate: IMultiFieldDate;
  saved: boolean;
  valid: boolean;
}
