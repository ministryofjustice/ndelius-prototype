import * as victimIssues from '../action/victim-issues.action';
import { IVictimIssues } from '../model/victim-issues.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IVictimIssues = {
  impactOfOffence: '',
  vloContactDate: '',
  victimContactService: '',
  victimPersonalStatement: '',
  saved: false,
  valid: false
};

export function victimIssuesReducer(state = initialState, action: victimIssues.Actions): IVictimIssues {

  switch (action.type) {
    case victimIssues.UPDATE_VICTIM_ISSUES: {
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

export const getVictimIssues = (state: IVictimIssues) => state['victimIssues'];
