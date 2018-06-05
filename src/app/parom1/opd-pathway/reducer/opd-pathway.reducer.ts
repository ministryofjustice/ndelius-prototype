import * as actionClass from '../action/opd-pathway.action';

import { IOffenderPersonalityDisorderPathway } from '../model/opd-pathway.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IOffenderPersonalityDisorderPathway = {
  opdPathway: '',
  saved: false,
  valid: false
};

export function opdPathwayReducer(state = initialState, action: actionClass.Actions): IOffenderPersonalityDisorderPathway {

  switch (action.type) {
    case actionClass.UPDATE_OPD_DISORDER_PATHWAY: {
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

export const getOffenderPersonalityDisorderPathway = (state: IOffenderPersonalityDisorderPathway) => state['offenderPersonalityDisorderPathway'];
