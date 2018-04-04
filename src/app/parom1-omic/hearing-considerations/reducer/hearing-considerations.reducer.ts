import * as actionClass from '../action/hearing-considerations.action';
import { IHearingConsiderations } from '../model/hearing-considerations.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IHearingConsiderations = {
  oralHearingConsiderations: '',
  saved: false,
  valid: false
};

export function hearingConsiderationsReducer(state = initialState, action: actionClass.Actions): IHearingConsiderations {

  switch (action.type) {
    case actionClass.UPDATE_HEARING_CONSIDERATIONS: {
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

export const getHearingConsiderations = (state: IHearingConsiderations) => state['hearingConsiderations'];
