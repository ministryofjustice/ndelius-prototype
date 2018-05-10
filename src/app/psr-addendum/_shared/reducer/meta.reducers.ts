import { ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

/**
 * MetaReducer for storing state into browser web storage
 * @param {ActionReducer<any>} reducer
 * @returns {ActionReducer<any>}
 */
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    storage: sessionStorage,
    rehydrate: true,
    storageKeySerializer: (key) => 'psra_' + key,
    keys: [
      'offenderDetails',
      'courtDetails',
      'addendumDetail',
      'signature'
    ]
  })(reducer);
}
