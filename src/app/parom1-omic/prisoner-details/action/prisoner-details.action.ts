import { Action } from '@ngrx/store';
import { IPrisonerDetails } from '../model/prisoner-details.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_PRISONER_DETAILS = 'UPDATE_PRISONER_DETAILS';

export class UpdatePrisonerDetailsAction implements Action {
  readonly type = UPDATE_PRISONER_DETAILS;

  constructor(public payload: IPrisonerDetails) {
    // Empty
  }
}

export type Actions = | UpdatePrisonerDetailsAction | ResetStateAction;
