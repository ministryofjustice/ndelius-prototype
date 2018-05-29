import { Action } from '@ngrx/store';
import { IPrisonerRelationship } from '../model/prisoner-relationship.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_PRISONER_KNOWLEDGE = 'UPDATE_PRISONER_KNOWLEDGE';

export class UpdatePrisonerKnowledgeAction implements Action {
  readonly type = UPDATE_PRISONER_KNOWLEDGE;

  constructor(public payload: IPrisonerRelationship) {
    // Empty
  }
}

export type Actions = | UpdatePrisonerKnowledgeAction | ResetStateAction;
