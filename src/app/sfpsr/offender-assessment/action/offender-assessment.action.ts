import { Action } from '@ngrx/store';
import { IOffenderAssessment } from '../model/offender-assessment.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_OFFENDER_ASSESSMENT = 'UPDATE_OFFENDER_ASSESSMENT_DETAIL';

export class UpdateOffenderAssessmentAction implements Action {
  readonly type = UPDATE_OFFENDER_ASSESSMENT;

  constructor(public payload: IOffenderAssessment) {
    // Empty
  }
}

export type Actions = | UpdateOffenderAssessmentAction | ResetStateAction;
