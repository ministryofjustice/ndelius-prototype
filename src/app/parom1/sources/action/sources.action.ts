import { Action } from '@ngrx/store';
import { ISources } from '../model/sources.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_SOURCES = 'UPDATE_SOURCES';

export class UpdateSourcesAction implements Action {
  readonly type = UPDATE_SOURCES;

  constructor(public payload: ISources) {
    // Empty
  }
}

export type Actions = | UpdateSourcesAction | ResetStateAction;
