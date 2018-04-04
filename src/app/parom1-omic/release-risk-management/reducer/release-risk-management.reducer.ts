import * as actionClass from '../action/release-risk-management.action';
import { IReleaseRiskManagement } from '../model/release-risk-management.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IReleaseRiskManagement = {
  riskManagementPlan: '',
  saved: false,
  valid: false
};

export function releaseRiskManagementReducer(state = initialState, action: actionClass.Actions): IReleaseRiskManagement {

  switch (action.type) {
    case actionClass.UPDATE_RELEASE_MANAGEMENT: {
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

export const getReleaseRiskManagement = (state: IReleaseRiskManagement) => state['releaseRiskManagement'];
