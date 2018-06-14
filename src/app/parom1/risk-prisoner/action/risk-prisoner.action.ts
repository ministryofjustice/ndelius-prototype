import { Action } from '@ngrx/store';
import { IRiskPrisoner } from '../model/risk-prisoner.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_RISK_PRISONER = 'UPDATE_RISK_PRISONER';

export class UpdateRiskPrisonerAction implements Action {
  readonly type = UPDATE_RISK_PRISONER;

  constructor(public payload: IRiskPrisoner) {
    // Empty
  }
}

export type Actions = | UpdateRiskPrisonerAction | ResetStateAction;
