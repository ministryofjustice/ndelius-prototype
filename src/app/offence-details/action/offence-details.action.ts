import { Action } from '@ngrx/store';
import { IOffenceDetails } from '../model/offence-details.model';

export const UPDATE_OFFENCE_DETAILS = 'UPDATE_OFFENCE_DETAILS';

export class UpdateOffenceDetailsAction implements Action {
  readonly type = UPDATE_OFFENCE_DETAILS;

  constructor(public payload: IOffenceDetails) {
    // Empty
  }
}

export type Actions = | UpdateOffenceDetailsAction;
