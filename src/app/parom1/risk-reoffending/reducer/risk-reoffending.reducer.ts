import * as actionClass from '../action/risk-reoffending.action';

import { IRiskReoffending } from '../model/risk-reoffending.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IRiskReoffending = {
  rsrScore: void 0,
  ogrs3Percentage: '',
  ogpProbability: '',
  ovpProbability: '',
  riskMatrix2000: '',
  sara: '',
  likelihoodOfReoffending: '',
  saved: false,
  valid: false
};

export function riskReoffendingReducer(state = initialState, action: actionClass.Actions): IRiskReoffending {

  switch (action.type) {
    case actionClass.UPDATE_RISK_REOFFENDING: {
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

export const getRiskOfReoffending = (state: IRiskReoffending) => state['riskReoffending'];
