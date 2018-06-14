import * as actionClass from '../action/current-risk-assessment.action';

import { IRiskAssessment } from '../model/current-risk-assessment.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IRiskAssessment = {
  rsrScore: void 0,
  ogrs3Percentage: '',
  ogpProbability: '',
  ovpProbability: '',
  riskMatrix2000: '',
  sara: '',
  saved: false,
  valid: false
};

export function currentRiskAssessmentReducer(state = initialState, action: actionClass.Actions): IRiskAssessment {

  switch (action.type) {
    case actionClass.UPDATE_RISK_ASSESSMENT: {
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
