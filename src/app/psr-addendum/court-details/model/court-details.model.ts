import { IMultiFieldDate } from '../../../_shared/interface/three-field-date.interface';

export interface ICourtDetails {
  court: string;
  localJusticeArea: string;
  hearingDate: IMultiFieldDate;
  saved: boolean;
  valid: boolean;
}
