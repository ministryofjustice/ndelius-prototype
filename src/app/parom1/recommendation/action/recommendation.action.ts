import { Action } from '@ngrx/store';
import { IRecommendation } from '../model/recommendation.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_RECOMMENDATION = 'UPDATE_RECOMMENDATION';

export class UpdateRecommendationAction implements Action {
  readonly type = UPDATE_RECOMMENDATION;

  constructor(public payload: IRecommendation) {
    // Empty
  }
}

export type Actions = | UpdateRecommendationAction | ResetStateAction;
