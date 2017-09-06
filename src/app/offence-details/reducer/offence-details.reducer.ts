import { IOffenceDetails } from '../model/offence-details.model';
import * as offenceDetails from '../action/offence-details.action';

export const initialState: IOffenceDetails = {
  mainOffence: '',
  otherOffence: '',
  offenceSummary: '',
  saved: false,
  valid: false
};

export function offenceDetailsReducer(state = initialState, action: offenceDetails.Actions): IOffenceDetails {

  switch (action.type) {
    case offenceDetails.UPDATE_OFFENCE_DETAILS: {
      return Object.assign({}, state, action.payload);
    }

    default: {
      return state;
    }
  }
}

export const getOffenceDetails = (state: IOffenceDetails) => state['offenceDetails'];
