import * as proposedSentence from '../action/proposed-sentence.action';
import { IProposedSentence } from '../model/proposed-sentence.model';

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

    default: {
      return state;
    }
  }
}

export const getProposedSentence = (state: IProposedSentence) => state['proposedSentence'];
