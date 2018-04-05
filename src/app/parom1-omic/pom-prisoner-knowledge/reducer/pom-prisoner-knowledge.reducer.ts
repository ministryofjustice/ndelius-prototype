import * as actionClass from '../action/pom-prisoner-knowledge.action';
import { IPomPrisonerKnowledge } from '../model/pom-prisoner-knowledge.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IPomPrisonerKnowledge = {
  lengthOfAssignment: '',
  behaviourInPrison: '',
  riskOfAbsconding: '',
  riskOfAbscondingDetails: '',
  rotl: '',
  rotlDetails: '',
  furtherInformation: '',
  saved: false,
  valid: false
};

export function pomPrisonerKnowledgeReducer(state = initialState, action: actionClass.Actions): IPomPrisonerKnowledge {

  switch (action.type) {
    case actionClass.UPDATE_POM_PRISONER_KNOWLEDGE: {
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

export const getPomPrisionerKnowledge = (state: IPomPrisonerKnowledge) => state['pomPrisonerKnowledge'];
