import { Action } from '@ngrx/store';

import { IRiskCustody } from '../model/risk-custody.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_RISK_CUSTODY = 'UPDATE_RISK_CUSTODY';

export class UpdateRiskCustodyAction implements Action {
  readonly type = UPDATE_RISK_CUSTODY;

  constructor(public payload: IRiskCustody) {
    // Empty
  }
}

export type Actions = | UpdateRiskCustodyAction | ResetStateAction;
