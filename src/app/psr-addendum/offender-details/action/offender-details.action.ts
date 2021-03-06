import { Action } from '@ngrx/store';
import { IOffenderDetails } from '../model/offender-details.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_OFFENDER_DETAILS = 'UPDATE_OFFENDER_DETAILS';

export class UpdateOffenderDetailsAction implements Action {
  readonly type = UPDATE_OFFENDER_DETAILS;

  constructor(public payload: IOffenderDetails) {
    // Empty
  }
}

export type Actions = | UpdateOffenderDetailsAction | ResetStateAction;
