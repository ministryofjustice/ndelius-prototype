import * as actionClass from '../action/com-recommendation.action';
import { IComRecommendation } from '../model/com-recommendation.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IComRecommendation = {
  yourRecommendation: '',
  saved: false,
  valid: false
};

export function comRecommendationReducer(state = initialState, action: actionClass.Actions): IComRecommendation {

  switch (action.type) {
    case actionClass.UPDATE_COM_RECOMMENDATION: {
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

export const getComRecommendation = (state: IComRecommendation) => state['comRecommendation'];
