import { Action } from '@ngrx/store';
import { ICourtDetails } from '../model/court-details.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_COURT_DETAILS = 'UPDATE_COURT_DETAILS';

export class UpdateCourtDetailsAction implements Action {
  readonly type = UPDATE_COURT_DETAILS;

  constructor(public payload: ICourtDetails) {
    // Empty
  }
}

export type Actions = | UpdateCourtDetailsAction | ResetStateAction;
