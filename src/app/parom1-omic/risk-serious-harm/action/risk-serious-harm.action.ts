import { Action } from '@ngrx/store';

import { IRiskSeriousHarm } from '../model/risk-serious-harm.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_RISK_SERIOUS_HARM = 'UPDATE_RISK_SERIOUS_HARM';

export class UpdateRiskSeriousHarmAction implements Action {
  readonly type = UPDATE_RISK_SERIOUS_HARM;

  constructor(public payload: IRiskSeriousHarm) {
    // Empty
  }
}

export type Actions = | UpdateRiskSeriousHarmAction | ResetStateAction;
