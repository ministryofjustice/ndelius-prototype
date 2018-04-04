import { Action } from '@ngrx/store';
import { IPomSignature } from '../model/pom-signature.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_POM_SIGNATURE = 'UPDATE_POM_SIGNATURE';

export class UpdatePomSignatureAction implements Action {
  readonly type = UPDATE_POM_SIGNATURE;

  constructor(public payload: IPomSignature) {
    // Empty
  }
}

export type Actions = | UpdatePomSignatureAction | ResetStateAction;
