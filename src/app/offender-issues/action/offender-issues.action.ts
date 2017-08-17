import { Action } from '@ngrx/store';
import { IOffenderIssues } from '../model/offender-issues.model';

export const UPDATE_OFFENDER_ISSUES = 'UPDATE_OFFENDER_ISSUES';

export class UpdateOffenderIssuesAction implements Action {
  readonly type = UPDATE_OFFENDER_ISSUES;

  constructor(public payload: IOffenderIssues) {
    // Empty
  }
}

export type Actions = | UpdateOffenderIssuesAction;
