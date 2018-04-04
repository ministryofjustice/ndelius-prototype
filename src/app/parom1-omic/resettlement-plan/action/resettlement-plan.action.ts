import { Action } from '@ngrx/store';
import { IResettlementPlan } from '../model/resettlement-plan.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_RESETTLEMENT_PLAN = 'UPDATE_RESETTLEMENT_PLAN';

export class UpdateResettlementPlanAction implements Action {
  readonly type = UPDATE_RESETTLEMENT_PLAN;

  constructor(public payload: IResettlementPlan) {
    // Empty
  }
}

export type Actions = | UpdateResettlementPlanAction | ResetStateAction;
