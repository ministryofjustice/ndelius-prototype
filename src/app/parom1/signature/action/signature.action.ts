import { Action } from '@ngrx/store';
import { ISignature } from '../model/signature.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_SIGNATURE = 'UPDATE_SIGNATURE';

export class UpdateSignatureAction implements Action {
  readonly type = UPDATE_SIGNATURE;

  constructor(public payload: ISignature) {
    // Empty
  }
}

export type Actions = | UpdateSignatureAction | ResetStateAction;
