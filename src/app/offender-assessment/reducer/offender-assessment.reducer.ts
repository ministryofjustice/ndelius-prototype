import { IOffenderAssessmentDetail } from '../model/offender-assessment.model';
import * as offenderAssessment from '../action/offender-assessment.action';

export const initialState: IOffenderAssessmentDetail = {
  offenderAssessment: ''
};

export function offenderAssessmentDetailReducer(state = initialState, action: offenderAssessment.Actions): IOffenderAssessmentDetail {

  switch (action.type) {
    case offenderAssessment.UPDATE_OFFENDER_ASSESSMENT_DETAIL: {
      return Object.assign({}, state, action.payload);
    }

    default: {
      return state;
    }
  }
}

export const getOffenderAssessmentDetail = (state: IOffenderAssessmentDetail) => state['offenderAssessmentDetail'];
