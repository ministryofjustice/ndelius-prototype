import { ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { sections } from '../model/sections';

/**
 * MetaReducer for storing state into browser web storage
 * @param {ActionReducer<any>} reducer
 * @returns {ActionReducer<any>}
 */
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {

  const allSections = sections();

  return localStorageSync({
    storage: sessionStorage,
    rehydrate: true,
    storageKeySerializer: (key) => 'omic_' + key,
    keys: allSections.map(section => {
      return section.state;
    })
  })(reducer);
}
