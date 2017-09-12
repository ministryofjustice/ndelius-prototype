import * as addendumDetail from '../action/addendum-detail.action';
import { IAddendumDetail } from '../model/addendum-detail.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IAddendumDetail = {
  detail: '',
  saved: false,
  valid: false
};

export function addendumDetailReducer(state = initialState, action: addendumDetail.Actions): IAddendumDetail {

  switch (action.type) {
    case addendumDetail.UPDATE_ADDENDUM_DETAIL: {
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

export const getAddendumDetail = (state: IAddendumDetail) => state['addendumDetail'];
