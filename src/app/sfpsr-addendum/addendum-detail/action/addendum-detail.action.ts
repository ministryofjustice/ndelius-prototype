import { Action } from '@ngrx/store';

import { IAddendumDetail } from '../model/addendum-detail.model';
import { ResetStateAction } from '../../../sfpsr/_shared/action/reset-state.action';

export const UPDATE_ADDENDUM_DETAIL = 'UPDATE_ADDENDUM_DETAIL';

export class UpdateAddendumDetailAction implements Action {
  readonly type = UPDATE_ADDENDUM_DETAIL;

  constructor(public payload: IAddendumDetail) {
    // Empty
  }
}

export type Actions = | UpdateAddendumDetailAction | ResetStateAction;
