import { Action } from '@ngrx/store';
import { IOffenderAssessmentDetail } from '../model/offender-assessment.model';

export const UPDATE_OFFENDER_ASSESSMENT_DETAIL = 'UPDATE_OFFENDER_ASSESSMENT_DETAIL';

export class UpdateOffenderAssessmentDetailAction implements Action {
  readonly type = UPDATE_OFFENDER_ASSESSMENT_DETAIL;

  constructor(public payload: IOffenderAssessmentDetail) {
    // Empty
  }
}

export type Actions = | UpdateOffenderAssessmentDetailAction;
