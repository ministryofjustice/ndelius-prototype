import * as actionClass from '../action/resettlement-plan.action';
import { IResettlementPlan } from '../model/resettlement-plan.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IResettlementPlan = {
  resettlementPlanRequired: void 0,
  resettlementPlanForRelease: '',
  saved: false,
  valid: false
};

export function resettlementPlanReducer(state = initialState, action: actionClass.Actions): IResettlementPlan {

  switch (action.type) {
    case actionClass.UPDATE_RESETTLEMENT_PLAN: {
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

export const getResettlementPlan = (state: IResettlementPlan) => state['resettlementPlan'];
