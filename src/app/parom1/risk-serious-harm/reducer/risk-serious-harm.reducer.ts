import * as actionClass from '../action/risk-serious-harm.action';

import { IRiskSeriousHarm } from '../model/risk-serious-harm.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IRiskSeriousHarm = {
  seriousHarmOthers: '',
  increaseFactors: '',
  reductionFactors: '',
  likelihoodOfReoffending: '',
  abscondingRisk: '',
  abscondingRiskDetails: '',
  saved: false,
  valid: false
};

export function riskSeriousHarmReducer(state = initialState, action: actionClass.Actions): IRiskSeriousHarm {

  switch (action.type) {
    case actionClass.UPDATE_RISK_SERIOUS_HARM: {
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

export const getRiskSeriousHarm = (state: IRiskSeriousHarm) => state['riskSeriousHarm'];
