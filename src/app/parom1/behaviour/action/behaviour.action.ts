import { Action } from '@ngrx/store';

import { IBehaviour } from '../model/behaviour.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_BEHAVIOUR = 'UPDATE_BEHAVIOUR';

export class UpdateBehaviourAction implements Action {
  readonly type = UPDATE_BEHAVIOUR;

  constructor(public payload: IBehaviour) {
    // Empty
  }
}

export type Actions = | UpdateBehaviourAction | ResetStateAction;
