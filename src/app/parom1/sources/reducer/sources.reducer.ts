import * as actionClass from '../action/sources.action';
import { ISources } from '../model/sources.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: ISources = {
  probationCaseRecords: void 0,
  previousConvictions: void 0,
  paroleDossier: void 0,
  cpsDocuments: void 0,
  preSentenceReport: void 0,
  previousParoleReports: void 0,
  judgesComments: void 0,
  other: void 0,
  otherDocuments: '',
  reportsAssessmentsDirections: '',
  sourceLimitations: '',
  sourceLimitationExplanation: '',
  diversity: '',
  saved: false,
  valid: false
};

export function sourcesReducer(state = initialState, action: actionClass.Actions): ISources {

  switch (action.type) {
    case actionClass.UPDATE_SOURCES: {
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

export const getSources = (state: ISources) => state['sources'];
