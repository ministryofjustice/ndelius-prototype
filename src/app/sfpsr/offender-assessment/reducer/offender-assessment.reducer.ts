import { IOffenderAssessment } from '../model/offender-assessment.model';
import * as offenderAssessment from '../action/offender-assessment.action';

import { RESET_STATE } from '../../_shared/action/reset-state.action';

export const initialState: IOffenderAssessment = {
  issueAccommodation: null,
  detailsAccommodation: '',
  issueEmployment: null,
  detailsEmployment: '',
  issueFinance: null,
  detailsFinance: '',
  issueRelationships: null,
  detailsRelationships: '',
  issueDrugs: null,
  detailsDrugs: '',
  issueAlcohol: null,
  detailsAlcohol: '',
  issueHealth: null,
  detailsHealth: '',
  issueBehaviour: null,
  detailsBehaviour: '',
  saved: false,
  valid: false
};

export function offenderAssessmentReducer(state = initialState, action: offenderAssessment.Actions): IOffenderAssessment {

  switch (action.type) {
    case offenderAssessment.UPDATE_OFFENDER_ASSESSMENT: {
      return Object.assign({}, state, action.payload);
    }
    case RESET_STATE: {
      return Object.assign({}, initialState);
    }

    default: {
      return state;
    }
  }
}

export const getOffenderAssessment = (state: IOffenderAssessment) => state['offenderAssessment'];
