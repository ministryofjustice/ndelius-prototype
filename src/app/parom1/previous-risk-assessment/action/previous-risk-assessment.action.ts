import { Action } from '@ngrx/store';

import { IPreviousRiskAssessment } from '../model/previous-risk-assessment.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_PREVIOUS_RISK_ASSESSMENT = 'UPDATE_PREVIOUS_RISK_ASSESSMENT';

export class UpdatePreviousRiskAssessmentAction implements Action {
  readonly type = UPDATE_PREVIOUS_RISK_ASSESSMENT;

  constructor(public payload: IPreviousRiskAssessment) {
    // Empty
  }
}

export type Actions = | UpdatePreviousRiskAssessmentAction | ResetStateAction;
