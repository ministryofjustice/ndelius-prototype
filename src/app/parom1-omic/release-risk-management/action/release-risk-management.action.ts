import { Action } from '@ngrx/store';
import { IReleaseRiskManagement } from '../model/release-risk-management.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_RELEASE_MANAGEMENT = 'UPDATE_RELEASE_MANAGEMENT';

export class UpdateReleaseRiskManagementAction implements Action {
  readonly type = UPDATE_RELEASE_MANAGEMENT;

  constructor(public payload: IReleaseRiskManagement) {
    // Empty
  }
}

export type Actions = | UpdateReleaseRiskManagementAction | ResetStateAction;
