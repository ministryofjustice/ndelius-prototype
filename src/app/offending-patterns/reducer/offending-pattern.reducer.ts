import * as offendingPattern from '../action/offending-patters.action';
import { IOffendingPattern } from '../model/offending-pattern.model';

export const initialState: IOffendingPattern = {
  patternOfOffending: void 0
};

export function offendingPatternReducer(state = initialState, action: offendingPattern.Actions): IOffendingPattern {

  switch (action.type) {
    case offendingPattern.UPDATE_OFFENDING_PATTERN: {
      return Object.assign({}, state, action.payload);
    }

    default: {
      return state;
    }
  }
}

export const getOffendingPattern = (state: IOffendingPattern) => state['offendingPattern'];
