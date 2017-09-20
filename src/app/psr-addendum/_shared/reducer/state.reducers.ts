import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../../environments/environment';

import { IOffenderDetails } from '../../offender-details/model/offender-details.model';
import { ICourtDetails } from '../../court-details/model/court-details.model';
import { IAddendumDetail } from '../../addendum-detail/model/addendum-detail.model';
import { ISignature } from '../../signature/model/signature.model';

import { logInfo } from '../../../_shared/reducer/meta.reducers';
import { localStorageSyncReducer } from './meta.reducers';

import { courtDetailsReducer } from '../../court-details/reducer/court-details.reducer';
import { addendumDetailReducer } from '../../addendum-detail/reducer/addendum-detail.reducer';
import { offenderDetailsReducer } from '../../offender-details/reducer/offender-details.reducer';
import { signatureReducer } from '../../signature/reducer/signature.reducer';

/**
 * Main state interface
 */
export interface IState {
  offenderDetails: IOffenderDetails;
  courtDetails: ICourtDetails;
  addendumDetail: IAddendumDetail;
  signature: ISignature;
}

/**
 * Main state reducers
 * @type {ActionReducerMap<IState>}
 */
export const reducers: ActionReducerMap<IState> = {
  offenderDetails: offenderDetailsReducer,
  courtDetails: courtDetailsReducer,
  addendumDetail: addendumDetailReducer,
  signature: signatureReducer
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [localStorageSyncReducer, logInfo] : [localStorageSyncReducer];
