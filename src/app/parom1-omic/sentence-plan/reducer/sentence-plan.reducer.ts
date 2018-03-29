import * as victimIssues from '../action/sentence-plan.action';
import { ISentencePlan } from '../model/sentence-plan.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: ISentencePlan = {
  sentencePlanObjectives: '',
  saved: false,
  valid: false
};

export function sentencePlanReducer(state = initialState, action: victimIssues.Actions): ISentencePlan {

  switch (action.type) {
    case victimIssues.UPDATE_SENTENCE_PLAN: {
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

export const getSentencePlan = (state: ISentencePlan) => state['sentencePlan'];
