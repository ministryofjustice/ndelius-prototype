import { IOffenceAnalysis } from '../model/offence-analysis.model';
import * as offenceAnalysis from '../action/offence-analysis.action';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IOffenceAnalysis = {
  offenceAnalysisEntry: '',
  patternOfOffending: '',
  saved: false,
  valid: false
};

export function offenceAnalysisReducer(state = initialState, action: offenceAnalysis.Actions): IOffenceAnalysis {

  switch (action.type) {
    case offenceAnalysis.UPDATE_OFFENCE_ANALYSIS: {
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

export const getOffenceAnalysis = (state: IOffenceAnalysis) => state['offenceAnalysis'];
