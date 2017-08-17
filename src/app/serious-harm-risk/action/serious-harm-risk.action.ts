import { Action } from '@ngrx/store';
import { ISeriousHarmRisk } from '../model/serious-harm-risk.model';

export const UPDATE_SERIOUS_HARM_RISK = 'UPDATE_SERIOUS_HARM_RISK';

export class UpdateSeriousHarmRiskAction implements Action {
  readonly type = UPDATE_SERIOUS_HARM_RISK;

  constructor(public payload: ISeriousHarmRisk) {
    // Empty
  }
}

export type Actions = | UpdateSeriousHarmRiskAction;
