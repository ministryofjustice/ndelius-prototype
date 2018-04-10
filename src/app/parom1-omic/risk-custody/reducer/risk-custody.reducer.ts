import * as actionClass from '../action/risk-custody.action';

import { IRiskCustody } from '../model/risk-custody.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IRiskCustody = {
  riskPublic: '',
  riskKnownAdult: '',
  riskChildren: '',
  riskPrisoners: '',
  riskSelf: '',
  riskOthers: '',
  saved: false,
  valid: false
};

export function riskCustodyReducer(state = initialState, action: actionClass.Actions): IRiskCustody {

  switch (action.type) {
    case actionClass.UPDATE_RISK_CUSTODY: {
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

export const getRiskCustody = (state: IRiskCustody) => state['riskCustody'];
