import { Action } from '@ngrx/store';
import { IPomRecommendation } from '../model/pom-recommendation.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_POM_RECOMMENDATION = 'UPDATE_POM_RECOMMENDATION';

export class UpdatePomRecommendationAction implements Action {
  readonly type = UPDATE_POM_RECOMMENDATION;

  constructor(public payload: IPomRecommendation) {
    // Empty
  }
}

export type Actions = | UpdatePomRecommendationAction | ResetStateAction;
