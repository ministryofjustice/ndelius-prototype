import * as actionClass from '../action/interventions.action';

import { IInterventions } from '../model/interventions.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IInterventions = {
  interventionsList: '',
  interventionsSummary: '',
  saved: false,
  valid: false
};

export function interventionsReducer(state = initialState, action: actionClass.Actions): IInterventions {

  switch (action.type) {
    case actionClass.UPDATE_INTERVENTIONS: {
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

export const getInterventions = (state: IInterventions) => state['interventions'];
