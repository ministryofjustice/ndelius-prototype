import { Action } from '@ngrx/store';
import { IPrisonerContact } from '../model/prisoner-contact.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_PRISONER_CONTACT = 'UPDATE_PRISONER_CONTACT';

export class UpdatePrisonerContactAction implements Action {
  readonly type = UPDATE_PRISONER_CONTACT;

  constructor(public payload: IPrisonerContact) {
    // Empty
  }
}

export type Actions = | UpdatePrisonerContactAction | ResetStateAction;
