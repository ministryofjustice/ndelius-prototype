import { IMultiFieldDate } from '../../../_shared/interface/three-field-date.interface';

export interface IVictimIssues {
  impactOfOffence: string;
  vloContactDate: IMultiFieldDate;
  victimContactService: string;
  victimPersonalStatement: string;
  saved: boolean;
  valid: boolean;
}
