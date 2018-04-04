import * as actionClass from '../action/current-risk-assessment.action';

import { ICurrentRiskAssessment } from '../model/current-risk-assessment.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: ICurrentRiskAssessment = {
  riskToThem: '',
  riskToOthers: '',
  seriousHarmOthers: '',
  increaseFactors: '',
  reductionFactors: '',
  furtherOffending: '',
  saved: false,
  valid: false
};

export function currentRiskAssessmentReducer(state = initialState, action: actionClass.Actions): ICurrentRiskAssessment {

  switch (action.type) {
    case actionClass.UPDATE_CURRENT_RISK_ASSESSMENT: {
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

export const getPreviousRiskAssessment = (state: ICurrentRiskAssessment) => state['currentRiskAssessment'];
