import { Action } from '@ngrx/store';
import { IHearingConsiderations } from '../model/hearing-considerations.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_HEARING_CONSIDERATIONS = 'UPDATE_HEARING_CONSIDERATIONS';

export class UpdateHearingConsiderationsAction implements Action {
  readonly type = UPDATE_HEARING_CONSIDERATIONS;

  constructor(public payload: IHearingConsiderations) {
    // Empty
  }
}

export type Actions = | UpdateHearingConsiderationsAction | ResetStateAction;
