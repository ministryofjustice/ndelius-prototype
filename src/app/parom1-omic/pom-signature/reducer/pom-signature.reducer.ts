import * as signature from '../action/pom-signature.action';
import { IPomSignature } from '../model/pom-signature.model';

import { RESET_STATE } from '../../../_shared/action/reset-state.action';

export const initialState: IPomSignature = {
  reportAuthor: '',
  prison: '',
  counterSignature: '',
  counterSignatureRole: '',
  reportDate: '',
  saved: false,
  valid: false
};

export function pomSignatureReducer(state = initialState, action: signature.Actions): IPomSignature {

  switch (action.type) {
    case signature.UPDATE_POM_SIGNATURE: {
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

export const getPomSignature = (state: IPomSignature) => state['pomSignature'];
