import * as signature from '../action/signature.action';
import { ISignature } from '../model/signature.model';

import { RESET_STATE } from '../../_shared/action/reset-state.action';

export const initialState: ISignature = {
  reportAuthor: '',
  office: '',
  reportDate: void 0,
  saved: false,
  valid: false
};

export function signatureReducer(state = initialState, action: signature.Actions): ISignature {

  switch (action.type) {
    case signature.UPDATE_SIGNATURE: {
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

export const getSignature = (state: ISignature) => state['signature'];
