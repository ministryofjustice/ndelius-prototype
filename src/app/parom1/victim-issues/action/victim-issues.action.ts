import { Action } from '@ngrx/store';
import { IVictimIssues } from '../model/victim-issues.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_VICTIM_ISSUES = 'UPDATE_VICTIM_ISSUES';

export class UpdateVictimIssuesAction implements Action {
  readonly type = UPDATE_VICTIM_ISSUES;

  constructor(public payload: IVictimIssues) {
    // Empty
  }
}

export type Actions = | UpdateVictimIssuesAction | ResetStateAction;
