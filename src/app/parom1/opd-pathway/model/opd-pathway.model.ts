import { IMultiFieldDate } from '../../../_shared/interface/three-field-date.interface';

export interface IOffenderPersonalityDisorderPathway {
  opdPathway: string;
  opdScreeningDate: IMultiFieldDate;
  consultationOrFormulation: string;
  saved: boolean;
  valid: boolean;
}
