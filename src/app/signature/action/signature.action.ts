import { Action } from '@ngrx/store';
import { ISignature } from '../model/signature.model';

export const UPDATE_SIGNATURE = 'UPDATE_SIGNATURE';

export class UpdateSignatureAction implements Action {
  readonly type = UPDATE_SIGNATURE;

  constructor(public payload: ISignature) {
    // Empty
  }
}

export type Actions = | UpdateSignatureAction;
