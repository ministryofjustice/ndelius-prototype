import { IMultiFieldDate } from '../../../_shared/interface/three-field-date.interface';

export interface IPrisonerDetails {
  prison: string;
  name: string;
  prisonNumber: string;
  nomisNumber: string;
  gender: number;
  category: string;
  sentence: string;
  sentenceType: string;
  determinateReleaseDate: IMultiFieldDate;
  tariffLength: string;
  tariffExpiryDate: IMultiFieldDate;
  saved: boolean;
  valid: boolean;
}
