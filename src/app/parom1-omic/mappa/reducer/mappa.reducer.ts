import * as mappa from '../action/mappa.action';
import { IMappa } from '../model/mappa.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IMappa = {
  screenedDate: '',
  mappaCategory: void 0,
  mappaLevel: void 0,
  saved: false,
  valid: false
};

export function mappaReducer(state = initialState, action: mappa.Actions): IMappa {

  switch (action.type) {
    case mappa.UPDATE_MAPPA: {
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

export const getMappa = (state: IMappa) => state['mappa'];
