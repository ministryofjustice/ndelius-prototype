import * as offenderDetails from '../action/offender-details.action';
import { IOffenderDetails } from '../model/offender-details.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IOffenderDetails = {
  name: '',
  address: '',
  phone: '',
  dateOfBirth: {
    day: void 0,
    month: void 0,
    year: void 0
  },
  age: void 0,
  crn: '',
  pnc: '',
  saved: false,
  valid: false
};

export function offenderDetailsReducer(state = initialState, action: offenderDetails.Actions): IOffenderDetails {

  switch (action.type) {
    case offenderDetails.UPDATE_OFFENDER_DETAILS: {
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

export const getOffenderDetails = (state: IOffenderDetails) => state['offenderDetails'];
