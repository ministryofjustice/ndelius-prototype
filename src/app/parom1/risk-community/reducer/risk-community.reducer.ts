import * as actionClass from '../action/risk-community.action';

import { IRiskCommunity } from '../model/risk-community.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IRiskCommunity = {
  riskPublic: '',
  riskKnownAdult: '',
  riskChildren: '',
  riskPrisoners: '',
  riskSelf: '',
  riskStaff: '',
  riskOthers: '',
  saved: false,
  valid: false
};

export function riskCommunityReducer(state = initialState, action: actionClass.Actions): IRiskCommunity {

  switch (action.type) {
    case actionClass.UPDATE_RISK_COMMUNITY: {
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

export const getRiskCommunity = (state: IRiskCommunity) => state['riskCommunity'];
