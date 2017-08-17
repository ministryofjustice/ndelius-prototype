import * as offenderIssues from '../action/offender-issues.action';
import { IOffenderIssues } from '../model/offender-issues.model';

export const initialState: IOffenderIssues = {
  issueAccommodation: void 0,
  issueEmployment: void 0,
  issueFinance: void 0,
  issueDrugs: void 0,
  issueAlcohol: void 0,
  issueHealth: void 0,
  issueBehaviour: void 0
};

export function offenderIssuesReducer(state = initialState, action: offenderIssues.Actions): IOffenderIssues {

  switch (action.type) {
    case offenderIssues.UPDATE_OFFENDER_ISSUES: {
      return Object.assign({}, state, action.payload);
    }

    default: {
      return state;
    }
  }
}

export const getOffenderIssues = (state: IOffenderIssues) => state['offenderIssues'];
