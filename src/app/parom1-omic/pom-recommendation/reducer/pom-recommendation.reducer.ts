import * as actionClass from '../action/pom-recommendation.action';
import { IPomRecommendation } from '../model/pom-recommendation.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IPomRecommendation = {
  yourRecommendation: '',
  saved: false,
  valid: false
};

export function pomRecommendationReducer(state = initialState, action: actionClass.Actions): IPomRecommendation {

  switch (action.type) {
    case actionClass.UPDATE_POM_RECOMMENDATION: {
      return Object.assign({}, state, action.payload);
    }
    case RESET_STATE: {
      return Object.assign({}, initialState);
    }

    default: {
      return state;
    }
  }
}

export const getPomRecommendation = (state: IPomRecommendation) => state['pomRecommendation'];
