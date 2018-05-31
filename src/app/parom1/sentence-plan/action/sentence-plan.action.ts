import { Action } from '@ngrx/store';
import { ISentencePlan } from '../model/sentence-plan.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_SENTENCE_PLAN = 'UPDATE_SENTENCE_PLAN';

export class UpdateSentencePlanAction implements Action {
  readonly type = UPDATE_SENTENCE_PLAN;

  constructor(public payload: ISentencePlan) {
    // Empty
  }
}

export type Actions = | UpdateSentencePlanAction | ResetStateAction;
