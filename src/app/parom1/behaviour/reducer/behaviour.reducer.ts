import * as actionClass from '../action/behaviour.action';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';
import { IBehaviour } from '../model/behaviour.model';

export const initialState: IBehaviour = {
  rotl: '',
  rotlInformation: '',
  saved: false,
  valid: false
};

export function behaviourReducer(state = initialState, action: actionClass.Actions): IBehaviour {

  switch (action.type) {
    case actionClass.UPDATE_BEHAVIOUR: {
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

export const getBehaviour = (state: IBehaviour) => state['behaviour'];
