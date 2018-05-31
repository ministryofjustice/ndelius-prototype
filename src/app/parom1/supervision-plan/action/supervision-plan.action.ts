import { Action } from '@ngrx/store';
import { ISupervisionPlan } from '../model/supervision-plan.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_SUPERVISION_PLAN = 'UPDATE_SUPERVISION_PLAN';

export class UpdateSupervisionPlanAction implements Action {
  readonly type = UPDATE_SUPERVISION_PLAN;

  constructor(public payload: ISupervisionPlan) {
    // Empty
  }
}

export type Actions = | UpdateSupervisionPlanAction | ResetStateAction;
