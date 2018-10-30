import { IOffenceDetails } from '../model/offence-details.model';
import * as offenceDetails from '../action/offence-details.action';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

// @TODO: Feed this data
export const initialState: IOffenceDetails = {
  mainOffence: 'Obtaining a money transfer by deception (05331) - 03/09/2018',
  otherOffence: 'Dishonestly retaining a wrongful credit (05332) - 01/08/2018\nDishonest representation for obtaining benefit etc (05333) - 25/08/2018',
  offenceSummary: '',
  saved: false,
  valid: false
};

export function offenceDetailsReducer(state = initialState, action: offenceDetails.Actions): IOffenceDetails {

  switch (action.type) {
    case offenceDetails.UPDATE_OFFENCE_DETAILS: {
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

export const getOffenceDetails = (state: IOffenceDetails) => state['offenceDetails'];
