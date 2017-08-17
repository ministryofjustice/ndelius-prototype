import { Action } from '@ngrx/store';
import { IRiskAssessment } from '../model/risk-assessment.model';

export const UPDATE_RISK_ASSESSMENT = 'UPDATE_RISK_ASSESSMENT';

export class UpdateRiskAssessmentAction implements Action {
  readonly type = UPDATE_RISK_ASSESSMENT;

  constructor(public payload: IRiskAssessment) {
    // Empty
  }
}

export type Actions = | UpdateRiskAssessmentAction;
