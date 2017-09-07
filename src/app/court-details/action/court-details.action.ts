import { Action } from '@ngrx/store';
import { ICourtDetails } from '../model/court-details.model';

export const UPDATE_COURT_DETAILS = 'UPDATE_COURT_DETAILS';

export class UpdateCourtDetailsAction implements Action {
  readonly type = UPDATE_COURT_DETAILS;

  constructor(public payload: ICourtDetails) {
    // Empty
  }
}

export class ResetCourtDetailsAction implements Action {
  readonly type = 'RESET_STATE';

  constructor(public payload: ICourtDetails) {
    // Empty
  }
}

export type Actions = | UpdateCourtDetailsAction | ResetCourtDetailsAction;
