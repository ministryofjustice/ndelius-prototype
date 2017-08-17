import { Action } from '@ngrx/store';
import { IOffenderDetails } from '../model/offender-details.model';

export const UPDATE_OFFENDER_DETAILS = 'UPDATE_OFFENDER_DETAILS';

export class UpdateOffenderDetailsAction implements Action {
  readonly type = UPDATE_OFFENDER_DETAILS;

  constructor(public payload: IOffenderDetails) {
    // Empty
  }
}

export type Actions = | UpdateOffenderDetailsAction;
