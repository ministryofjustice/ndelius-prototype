import * as personalityDisorderPathway from '../action/personality-disorder-pathway.action';

import { IPersonalityDisorderPathway } from '../model/personality-disorder-pathway.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IPersonalityDisorderPathway = {
  saved: false,
  valid: false
};

export function personalityDisorderPathwayReducer(state = initialState, action: personalityDisorderPathway.Actions): IPersonalityDisorderPathway {

  switch (action.type) {
    case personalityDisorderPathway.UPDATE_PERSONALITY_DISORDER_PATHWAY: {
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
