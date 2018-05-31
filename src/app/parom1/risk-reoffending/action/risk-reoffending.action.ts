import { Action } from '@ngrx/store';

import { IRiskReoffending } from '../model/risk-reoffending.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_RISK_REOFFENDING = 'UPDATE_RISK_REOFFENDING';

export class UpdateRiskReoffendingAction implements Action {
  readonly type = UPDATE_RISK_REOFFENDING;

  constructor(public payload: IRiskReoffending) {
    // Empty
  }
}

export type Actions = | UpdateRiskReoffendingAction | ResetStateAction;
