import { Action } from '@ngrx/store';
import { IPrisonerRelationship } from '../model/prisoner-relationship.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_PRISONER_RELATIONSHIP = 'UPDATE_PRISONER_RELATIONSHIP';

export class UpdatePrisonerRelationshipAction implements Action {
  readonly type = UPDATE_PRISONER_RELATIONSHIP;

  constructor(public payload: IPrisonerRelationship) {
    // Empty
  }
}

export type Actions = | UpdatePrisonerRelationshipAction | ResetStateAction;
