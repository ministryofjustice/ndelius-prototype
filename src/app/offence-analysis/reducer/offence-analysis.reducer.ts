import { IOffenceAnalysis } from '../model/offence-analysis.model';
import * as offenceAnalysis from '../action/offence-analysis.action';

export const initialState: IOffenceAnalysis = {
  offenceAnalysisEntry: '',
  patternOfOffending: ''
};

export function offenceAnalysisReducer(state = initialState, action: offenceAnalysis.Actions): IOffenceAnalysis {

  switch (action.type) {
    case offenceAnalysis.UPDATE_OFFENCE_ANALYSIS: {
      return Object.assign({}, state, action.payload);
    }

    default: {
      return state;
    }
  }
}

export const getOffenceAnalysis = (state: IOffenceAnalysis) => state['offenceAnalysis'];
