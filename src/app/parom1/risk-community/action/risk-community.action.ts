import { Action } from '@ngrx/store';

import { IRiskCommunity } from '../model/risk-community.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_RISK_COMMUNITY = 'UPDATE_RISK_COMMUNITY';

export class UpdateRiskCommunityAction implements Action {
  readonly type = UPDATE_RISK_COMMUNITY;

  constructor(public payload: IRiskCommunity) {
    // Empty
  }
}

export type Actions = | UpdateRiskCommunityAction | ResetStateAction;
