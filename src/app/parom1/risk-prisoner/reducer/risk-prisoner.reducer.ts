import * as riskPrisoner from '../action/risk-prisoner.action';
import { IRiskPrisoner } from '../model/risk-prisoner.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IRiskPrisoner = {
  selfHarmCommunity: '',
  selfHarmCustody: '',
  harmOthersCommunity: '',
  harmOthersCustody: '',
  saved: false,
  valid: false
};

export function riskPrisonerReducer(state = initialState, action: riskPrisoner.Actions): IRiskPrisoner {

  switch (action.type) {
    case riskPrisoner.UPDATE_RISK_PRISONER: {
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

export const getRiskPrisoner = (state: IRiskPrisoner) => state['riskPrisoner'];
