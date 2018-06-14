import { Action } from '@ngrx/store';

import { IRiskAssessment } from '../model/current-risk-assessment.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_RISK_ASSESSMENT = 'UPDATE_RISK_ASSESSMENT';

export class UpdateRiskAssessmentAction implements Action {
  readonly type = UPDATE_RISK_ASSESSMENT;

  constructor(public payload: IRiskAssessment) {
    // Empty
  }
}

export type Actions = | UpdateRiskAssessmentAction | ResetStateAction;
