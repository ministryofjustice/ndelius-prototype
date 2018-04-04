import { Action } from '@ngrx/store';

import { IPersonalityDisorderPathway } from '../model/personality-disorder-pathway.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_PERSONALITY_DISORDER_PATHWAY = 'UPDATE_PERSONALITY_DISORDER_PATHWAY';

export class UpdatePersonalityDisorderPathwayAction implements Action {
  readonly type = UPDATE_PERSONALITY_DISORDER_PATHWAY;

  constructor(public payload: IPersonalityDisorderPathway) {
    // Empty
  }
}

export type Actions = | UpdatePersonalityDisorderPathwayAction | ResetStateAction;
