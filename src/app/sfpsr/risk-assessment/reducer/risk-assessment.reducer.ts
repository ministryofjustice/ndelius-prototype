import * as riskAssessment from '../action/risk-assessment.action';
import { IRiskAssessment } from '../model/risk-assessment.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IRiskAssessment = {
  previousSupervisionResponse: '',
  additionalPreviousSupervision: '',
  likelihoodOfReOffending: '',
  riskOfSeriousHarm: '',
  saved: false,
  valid: false
};

export function riskAssessmentReducer(state = initialState, action: riskAssessment.Actions): IRiskAssessment {

  switch (action.type) {
    case riskAssessment.UPDATE_RISK_ASSESSMENT: {
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

export const getRiskAssessment = (state: IRiskAssessment) => state['riskAssessment'];
