import { ICourtDetails } from '../model/court-details.model';
import * as courtDetails from '../action/court-details.action';

import { defaultCourtDetails } from '../../_shared/model/default-data';
import { RESET_STATE } from '../../_shared/action/reset-state.action';

export const initialState: ICourtDetails = defaultCourtDetails();

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
