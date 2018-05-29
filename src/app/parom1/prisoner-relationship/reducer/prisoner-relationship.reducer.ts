import * as actionClass from '../action/prisoner-relationship.action';
import { IPrisonerRelationship } from '../model/prisoner-relationship.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IPrisonerRelationship = {
  prisonerContact: '',
  prisonerFamilyContact: '',
  prisonerStaffContact: '',
  saved: false,
  valid: false
};

export function prisonerRelationshipReducer(state = initialState, action: actionClass.Actions): IPrisonerRelationship {

  switch (action.type) {
    case actionClass.UPDATE_PRISONER_KNOWLEDGE: {
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

export const getPrisonerRelationship = (state: IPrisonerRelationship) => state['prisonerRelationship'];
