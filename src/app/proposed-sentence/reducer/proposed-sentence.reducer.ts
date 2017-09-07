import * as proposedSentence from '../action/proposed-sentence.action';
import { IProposedSentence } from '../model/proposed-sentence.model';

import { RESET_STATE } from '../../_shared/action/reset-state.action';

export const initialState: IProposedSentence = {
  proposal: '',
  saved: false,
  valid: false
};

export function proposedSentenceReducer(state = initialState, action: proposedSentence.Actions): IProposedSentence {

  switch (action.type) {
    case proposedSentence.UPDATE_PROPOSED_SENTENCE: {
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

export const getProposedSentence = (state: IProposedSentence) => state['proposedSentence'];
