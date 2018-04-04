import * as actionClass from '../action/prisoner-knowledge.action';
import { IPrisonerKnowledge } from '../model/prisoner-knowledge.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IPrisonerKnowledge = {
  prisonerContact: '',
  prisonerFamilyContact: '',
  prisonerStaffContact: '',
  saved: false,
  valid: false
};

export function prisonerKnowledgeReducer(state = initialState, action: actionClass.Actions): IPrisonerKnowledge {

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

export const getPrisonerKnowledge = (state: IPrisonerKnowledge) => state['prisonerKnowledge'];
