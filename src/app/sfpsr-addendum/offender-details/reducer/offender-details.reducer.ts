import * as offenderDetails from '../action/offender-details.action';
import { IOffenderDetails } from '../model/offender-details.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';
import { defaultOffenderDetails } from '../../../_shared/model/default-data';

export const initialState: IOffenderDetails = defaultOffenderDetails();

export function offenderDetailsReducer(state = initialState, action: offenderDetails.Actions): IOffenderDetails {

  switch (action.type) {
    case offenderDetails.UPDATE_OFFENDER_DETAILS: {
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

export const getOffenderDetails = (state: IOffenderDetails) => state['offenderDetails'];
