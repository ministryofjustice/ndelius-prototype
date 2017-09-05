import { IOffenderAssessment } from '../model/offender-assessment.model';
import * as offenderAssessment from '../action/offender-assessment.action';

export const initialState: IOffenderAssessment = {
  issueAccommodation: void 0,
  detailsAccommodation: '',
  issueEmployment: void 0,
  detailsEmployment: '',
  issueFinance: void 0,
  detailsFinance: '',
  issueRelationships: void 0,
  detailsRelationships: '',
  issueDrugs: void 0,
  detailsDrugs: '',
  issueAlcohol: void 0,
  detailsAlcohol: '',
  issueHealth: void 0,
  detailsHealth: '',
  issueBehaviour: void 0,
  detailsBehaviour: '',
  saved: false,
  valid: false
};

export function offenderAssessmentReducer(state = initialState, action: offenderAssessment.Actions): IOffenderAssessment {

  switch (action.type) {
    case offenderAssessment.UPDATE_OFFENDER_ASSESSMENT: {
      return Object.assign({}, state, action.payload);
    }

    default: {
      return state;
    }
  }
}

export const getOffenderAssessment = (state: IOffenderAssessment) => state['offenderAssessment'];
