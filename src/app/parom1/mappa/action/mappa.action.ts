import { Action } from '@ngrx/store';
import { IMappa } from '../model/mappa.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_MAPPA = 'UPDATE_MAPPA';

export class UpdateMappaAction implements Action {
  readonly type = UPDATE_MAPPA;

  constructor(public payload: IMappa) {
    // Empty
  }
}

export type Actions = | UpdateMappaAction | ResetStateAction;
