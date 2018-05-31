import * as actionClass from '../action/recommendation.action';
import { IRecommendation } from '../model/recommendation.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IRecommendation = {
  yourRecommendation: '',
  saved: false,
  valid: false
};

export function recommendationReducer(state = initialState, action: actionClass.Actions): IRecommendation {

  switch (action.type) {
    case actionClass.UPDATE_RECOMMENDATION: {
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

export const getRecommendation = (state: IRecommendation) => state['recommendation'];
