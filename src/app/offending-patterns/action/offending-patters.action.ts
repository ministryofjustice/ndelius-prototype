import { Action } from '@ngrx/store';
import { IOffendingPattern } from '../model/offending-pattern.model';

export const UPDATE_OFFENDING_PATTERN = 'UPDATE_OFFENDING_PATTERN';

export class UpdateOffendingPatternAction implements Action {
  readonly type = UPDATE_OFFENDING_PATTERN;

  constructor(public payload: IOffendingPattern) {
    // Empty
  }
}

export type Actions = | UpdateOffendingPatternAction;
