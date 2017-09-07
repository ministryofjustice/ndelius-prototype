import { Action } from '@ngrx/store';
import { IOffenceDetails } from '../model/offence-details.model';
import { ResetStateAction } from '../../_shared/action/reset-state.action';

export const UPDATE_OFFENCE_DETAILS = 'UPDATE_OFFENCE_DETAILS';

export class UpdateOffenceDetailsAction implements Action {
  readonly type = UPDATE_OFFENCE_DETAILS;

  constructor(public payload: IOffenceDetails) {
    // Empty
  }
}

export type Actions = | UpdateOffenceDetailsAction | ResetStateAction;
