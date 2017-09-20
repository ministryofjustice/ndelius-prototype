import { Action } from '@ngrx/store';
import { IProposedSentence } from '../model/proposed-sentence.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_PROPOSED_SENTENCE = 'UPDATE_PROPOSED_SENTENCE';

export class UpdateProposedSentenceAction implements Action {
  readonly type = UPDATE_PROPOSED_SENTENCE;

  constructor(public payload: IProposedSentence) {
    // Empty
  }
}

export type Actions = | UpdateProposedSentenceAction | ResetStateAction;
