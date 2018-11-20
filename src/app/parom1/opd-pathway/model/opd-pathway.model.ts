import { IMultiFieldDate } from '../../../_shared/interface/three-field-date.interface';

export interface IOffenderPersonalityDisorderPathway {
  opdPathway: string;
  opdScreeningDate: IMultiFieldDate;
  notScreenedReason: string;
  saved: boolean;
  valid: boolean;
}
