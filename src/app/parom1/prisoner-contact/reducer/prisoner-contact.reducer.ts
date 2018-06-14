import * as actionClass from '../action/prisoner-contact.action';
import { IPrisonerContact } from '../model/prisoner-contact.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IPrisonerContact = {
  prisonerContactDetails: '',
  prisonerFamilyContact: '',
  prisonerStaffContact: '',
  saved: false,
  valid: false
};

export function prisonerContactReducer(state = initialState, action: actionClass.Actions): IPrisonerContact {

  switch (action.type) {
    case actionClass.UPDATE_PRISONER_CONTACT: {
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

export const getPrisonerRelationship = (state: IPrisonerContact) => state['prisonerContact'];
