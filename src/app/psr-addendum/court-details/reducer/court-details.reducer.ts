import { ICourtDetails } from '../model/court-details.model';
import * as courtDetails from '../action/court-details.action';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: ICourtDetails = {
  court: '',
  localJusticeArea: '',
  hearingDate: {
    day: void 0,
    month: void 0,
    year: void 0
  },
  saved: false,
  valid: false
};

export function courtDetailsReducer(state = initialState, action: courtDetails.Actions): ICourtDetails {

  switch (action.type) {
    case courtDetails.UPDATE_COURT_DETAILS: {
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

export const getCourtDetails = (state: ICourtDetails) => state['courtDetails'];
