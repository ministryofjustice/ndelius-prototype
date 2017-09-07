import { Action } from '@ngrx/store';

export const RESET_STATE: string = 'RESET_STATE';

export class ResetStateAction implements Action {
  readonly type = RESET_STATE;
}
