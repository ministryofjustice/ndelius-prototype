import { ActionReducer } from '@ngrx/store';

/**
 * MetaReducer to log state and action information to console
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
