import * as actionClass from '../action/previous-risk-assessment.action';

import { IPreviousRiskAssessment } from '../model/previous-risk-assessment.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IPreviousRiskAssessment = {
  previousDate: {
    month: void 0,
    year: void 0
  },
  riskPublic: '',
  riskKnownAdult: '',
  riskChildren: '',
  riskPrisoners: '',
  riskStaff: '',
  attitude: '',
  saved: false,
  valid: false
};

export function previousRiskAssessmentReducer(state = initialState, action: actionClass.Actions): IPreviousRiskAssessment {

  switch (action.type) {
    case actionClass.UPDATE_PREVIOUS_RISK_ASSESSMENT: {
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

export const getPreviousRiskAssessment = (state: IPreviousRiskAssessment) => state['previousRiskAssessment'];
