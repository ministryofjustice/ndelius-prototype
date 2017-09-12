import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { environment } from '../../../../environments/environment';

import { IOffenderDetails } from '../../offender-details/model/offender-details.model';
import { ICourtDetails } from '../../court-details/model/court-details.model';
import { IAddendumDetail } from '../../addendum-detail/model/addendum-detail.model';
import { ISignature } from '../../signature/model/signature.model';

import { courtDetailsReducer } from '../../court-details/reducer/court-details.reducer';
import { addendumDetailReducer } from '../../addendum-detail/reducer/addendum-detail.reducer';
import { offenderDetailsReducer } from '../../offender-details/reducer/offender-details.reducer';
import { signatureReducer } from '../../signature/reducer/signature.reducer';

/**
 * MetaReducer
 * @param {ActionReducer<any>} reducer
 * @returns {ActionReducer<any>}
 */
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    storage: sessionStorage,
    rehydrate: true,
    keys: [
      'offenderDetails',
      'courtDetails',
      'addendumDetail',
      'signature'
    ]
  })(reducer);
}

/**
 * MetaReducer
 * @param {ActionReducer<any>} reducer
 * @returns {ActionReducer<any>}
 */
export function logInfo(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console['info']('State:', state);
    console['info']('Action:', action);
    return reducer(state, action);
  };
}

export interface IState {
  offenderDetails: IOffenderDetails;
  courtDetails: ICourtDetails;
  addendumDetail: IAddendumDetail;
  signature: ISignature;
}

export const reducers: ActionReducerMap<IState> = {
  offenderDetails: offenderDetailsReducer,
  courtDetails: courtDetailsReducer,
  addendumDetail: addendumDetailReducer,
  signature: signatureReducer
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [localStorageSyncReducer, logInfo] : [localStorageSyncReducer];
export const getCurrentState = (state: IState) => state;
