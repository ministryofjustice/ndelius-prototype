import * as offenderDetails from '../action/offender-details.action';
import { IOffenderDetails } from '../model/offender-details.model';

export const initialState: IOffenderDetails = {
    name: 'Alan Smith',
    address: '1 Albert Square, Manchester, Greater Manchester, M60 2LA',
    dateOfBirth: '06/02/1976',
    age: 41,
    crn: 'B56789',
    pnc: ''
};

export function offenderDetailsReducer(state = initialState, action: offenderDetails.Actions): IOffenderDetails {

  switch (action.type) {
    case offenderDetails.UPDATE_OFFENDER_DETAILS: {
      return Object.assign({}, state, action.payload);
    }

    default: {
      return state;
    }
  }
}

export const getOffenderDetails = (state: IOffenderDetails) => state['offenderDetails'];
