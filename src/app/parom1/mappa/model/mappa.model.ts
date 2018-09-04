import { IMultiFieldDate } from '../../../_shared/interface/three-field-date.interface';

export interface IMappa {
  screenedDate: IMultiFieldDate;
  mappaCategory: number;
  mappaLevel: number;
  saved: boolean;
  valid: boolean;
}
