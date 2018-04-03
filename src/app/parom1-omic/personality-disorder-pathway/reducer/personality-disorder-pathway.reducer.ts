import * as actionClass from '../action/personality-disorder-pathway.action';

import { IPersonalityDisorderPathway } from '../model/personality-disorder-pathway.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IPersonalityDisorderPathway = {
  opdPathway: '',
  saved: false,
  valid: false
};

export function personalityDisorderPathwayReducer(state = initialState, action: actionClass.Actions): IPersonalityDisorderPathway {

  switch (action.type) {
    case actionClass.UPDATE_PERSONALITY_DISORDER_PATHWAY: {
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

export const getPersonalityDisorderPathway = (state: IPersonalityDisorderPathway) => state['personalityDisorderPathway'];
