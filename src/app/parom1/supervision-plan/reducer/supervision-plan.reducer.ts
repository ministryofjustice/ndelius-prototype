import * as actionClass from '../action/supervision-plan.action';
import { ISupervisionPlan } from '../model/supervision-plan.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: ISupervisionPlan = {
  supervisionPlanRequired: void 0,
  supervisionPlanForRelease: '',
  saved: false,
  valid: false
};

export function supervisionPlanReducer(state = initialState, action: actionClass.Actions): ISupervisionPlan {

  switch (action.type) {
    case actionClass.UPDATE_SUPERVISION_PLAN: {
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

export const getSupervisionPlan = (state: ISupervisionPlan) => state['supervisionPlan'];
