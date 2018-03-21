import * as offenderDetails from '../action/prisoner-details.action';
import { IPrisonerDetails } from '../model/prisoner-details.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IPrisonerDetails = {
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

export function prisonerDetailsReducer(state = initialState, action: offenderDetails.Actions): IPrisonerDetails {

  switch (action.type) {
    case offenderDetails.UPDATE_PRISONER_DETAILS: {
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

export const getPrisonerDetails = (state: IPrisonerDetails) => state['prisonerDetails'];
