import { Action } from '@ngrx/store';

import { IInterventions } from '../model/interventions.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_INTERVENTIONS = 'UPDATE_INTERVENTIONS';

export class UpdateInterventionsAction implements Action {
  readonly type = UPDATE_INTERVENTIONS;

  constructor(public payload: IInterventions) {
    // Empty
  }
}

export type Actions = | UpdateInterventionsAction | ResetStateAction;
