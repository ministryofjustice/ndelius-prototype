import { Action } from '@ngrx/store';
import { IComRecommendation } from '../model/com-recommendation.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_COM_RECOMMENDATION = 'UPDATE_COM_RECOMMENDATION';

export class UpdateComRecommendationAction implements Action {
  readonly type = UPDATE_COM_RECOMMENDATION;

  constructor(public payload: IComRecommendation) {
    // Empty
  }
}

export type Actions = | UpdateComRecommendationAction | ResetStateAction;
