import { ICourtDetails } from '../model/court-details.model';
import * as courtDetails from '../action/court-details.action';

export const initialState: ICourtDetails = {
  court: 'Manchester and Salford Magistrates Court',
  localJusticeArea: 'Greater Manchester',
  hearingDate: void 0
};

export function courtDetailsReducer(state = initialState, action: courtDetails.Actions): ICourtDetails {

  switch (action.type) {
    case courtDetails.UPDATE_COURT_DETAILS: {
      return Object.assign({}, state, action.payload);
    }

    default: {
      return state;
    }
  }
}

export const getCourtDetails = (state: ICourtDetails) => state['courtDetails'];
