import * as actionClass from '../action/prisoner-details.action';
import { IPrisonerDetails } from '../model/prisoner-details.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IPrisonerDetails = {
  prison: '',
  name: '',
  prisonNumber: '',
  nomisNumber: '',
  gender: void 0,
  category: '',
  sentence: '',
  sentenceType: '',
  determinateReleaseDate: {
    day: void 0,
    month: void 0,
    year: void 0
  },
  saved: false,
  valid: false
};

export function prisonerDetailsReducer(state = initialState, action: actionClass.Actions): IPrisonerDetails {

  switch (action.type) {
    case actionClass.UPDATE_PRISONER_DETAILS: {
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
