import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../../environments/environment';

import { IOffenderDetails } from '../../offender-details/model/offender-details.model';

import { logInfo } from '../../../_shared/reducer/meta.reducers';
import { localStorageSyncReducer } from './meta.reducers';

import { offenderDetailsReducer } from '../../offender-details/reducer/offender-details.reducer';

/**
 * Main state interface
 */
export interface IState {
  offenderDetails: IOffenderDetails;
}

/**
 * Main state reducers
 * @type {ActionReducerMap<IState>}
 */
export const reducers: ActionReducerMap<IState> = {
  offenderDetails: offenderDetailsReducer
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [localStorageSyncReducer, logInfo] : [localStorageSyncReducer];
export const getCurrentState = (state: IState) => state;
