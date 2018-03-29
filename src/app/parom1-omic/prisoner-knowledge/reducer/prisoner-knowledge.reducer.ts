import * as prisonerKnowledge from '../action/prisoner-knowledge.action';
import { IPrisonerKnowledge } from '../model/prisoner-knowledge.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IPrisonerKnowledge = {
  prisonerContact: '',
  prisonerFamilyContact: '',
  prisonerStaffContact: '',
  saved: false,
  valid: false
};

export function prisonerKnowledgeReducer(state = initialState, action: prisonerKnowledge.Actions): IPrisonerKnowledge {

  switch (action.type) {
    case prisonerKnowledge.UPDATE_PRISONER_KNOWLEDGE: {
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
