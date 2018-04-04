import { Action } from '@ngrx/store';

import { IPomPrisonerKnowledge } from '../model/pom-prisoner-knowledge.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_POM_PRISONER_KNOWLEDGE = 'UPDATE_POM_PRISONER_KNOWLEDGE';

export class UpdatePomPrisonerKnowledgeAction implements Action {
  readonly type = UPDATE_POM_PRISONER_KNOWLEDGE;

  constructor(public payload: IPomPrisonerKnowledge) {
    // Empty
  }
}

export type Actions = | UpdatePomPrisonerKnowledgeAction | ResetStateAction;
