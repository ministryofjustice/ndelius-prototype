import { IMultiFieldDate } from '../../../_shared/interface/three-field-date.interface';

export interface IPrisonerDetails {
  prisonImage: string;
  prison: string;
  name: string;
  prisonNumber: string;
  nomisNumber: string;
  gender: number;
  category: string;
  offence: string;
  sentence: string;
  indeterminateSentence: string;
  sentenceType: string;
  determinateEligibilityDate: IMultiFieldDate;
  tariffLength: string;
  tariffExpiryDate: IMultiFieldDate;
  saved: boolean;
  valid: boolean;
}
