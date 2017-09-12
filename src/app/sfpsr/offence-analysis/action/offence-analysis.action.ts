import { Action } from '@ngrx/store';
import { IOffenceAnalysis } from '../model/offence-analysis.model';
import { ResetStateAction } from '../../../_shared/action/reset-state.action';

export const UPDATE_OFFENCE_ANALYSIS = 'UPDATE_OFFENCE_ANALYSIS';

export class UpdateOffenceAnalysisAction implements Action {
  readonly type = UPDATE_OFFENCE_ANALYSIS;

  constructor(public payload: IOffenceAnalysis) {
    // Empty
  }
}

export type Actions = | UpdateOffenceAnalysisAction | ResetStateAction;
