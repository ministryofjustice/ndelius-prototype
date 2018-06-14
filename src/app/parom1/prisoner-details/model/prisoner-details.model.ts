import { IMultiFieldDate } from '../../../_shared/interface/three-field-date.interface';

export interface IPrisonerDetails {
  prison: string;
  name: string;
  prisonNumber: string;
  nomisNumber: string;
  gender: number;
  category: string;
  offence: string;
  sentence: string;
  sentenceType: string;
  determinateEligibilityDate: IMultiFieldDate;
  determinateReleaseDate: IMultiFieldDate;
  tariffLength: string;
  tariffExpiryDate: IMultiFieldDate;
  saved: boolean;
  valid: boolean;
}
