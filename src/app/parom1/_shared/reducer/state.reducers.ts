import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../../environments/environment';

import { IPrisonerDetails } from '../../prisoner-details/model/prisoner-details.model';
import { ISignature } from '../../signature/model/signature.model';

import { prisonerDetailsReducer } from '../../prisoner-details/reducer/prisoner-details.reducer';
import { signatureReducer } from '../../signature/reducer/signature.reducer';

import { logInfo } from '../../../_shared/reducer/meta.reducers';
import { localStorageSyncReducer } from './meta.reducers';

/**
 * Main state interface
 */
export interface IState {
  prisonerDetails: IPrisonerDetails;
  signature: ISignature;
}

/**
 * Main state reducers
 * @type {ActionReducerMap<IState>}
 */
export const reducers: ActionReducerMap<IState> = {
  prisonerDetails: prisonerDetailsReducer,
  signature: signatureReducer
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [localStorageSyncReducer, logInfo] : [localStorageSyncReducer];
export const getCurrentState = (state: IState) => state;
