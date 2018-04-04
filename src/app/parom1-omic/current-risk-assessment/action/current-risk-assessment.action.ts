import { Action } from '@ngrx/store';

import { ICurrentRiskAssessment } from '../model/current-risk-assessment.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_CURRENT_RISK_ASSESSMENT = 'UPDATE_CURRENT_RISK_ASSESSMENT';

export class UpdateCurrentRiskAssessmentAction implements Action {
  readonly type = UPDATE_CURRENT_RISK_ASSESSMENT;

  constructor(public payload: ICurrentRiskAssessment) {
    // Empty
  }
}

export type Actions = | UpdateCurrentRiskAssessmentAction | ResetStateAction;
