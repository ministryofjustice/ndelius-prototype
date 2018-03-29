import * as previousRiskAssessment from '../action/previous-risk-assessment.action';

import { IPreviousRiskAssessment } from '../model/previous-risk-assessment.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IPreviousRiskAssessment = {
  attitude: '',
  saved: false,
  valid: false
};

export function previousRiskAssessmentReducer(state = initialState, action: previousRiskAssessment.Actions): IPreviousRiskAssessment {

  switch (action.type) {
    case previousRiskAssessment.UPDATE_PREVIOUS_RISK_ASSESSMENT: {
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
