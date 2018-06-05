import { Action } from '@ngrx/store';

import { IOffenderPersonalityDisorderPathway } from '../model/opd-pathway.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_OPD_DISORDER_PATHWAY = 'UPDATE_OPD_DISORDER_PATHWAY';

export class UpdatePersonalityDisorderPathwayAction implements Action {
  readonly type = UPDATE_OPD_DISORDER_PATHWAY;

  constructor(public payload: IOffenderPersonalityDisorderPathway) {
    // Empty
  }
}

export type Actions = | UpdatePersonalityDisorderPathwayAction | ResetStateAction;
