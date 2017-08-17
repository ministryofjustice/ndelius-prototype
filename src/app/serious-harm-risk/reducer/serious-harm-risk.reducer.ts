import * as seriousHarmRisk from '../action/serious-harm-risk.action';
import { ISeriousHarmRisk } from '../model/serious-harm-risk.model';

export const initialState: ISeriousHarmRisk = {
  riskOfSeriousHarm: ''
};

export function seriousHarmRiskReducer(state = initialState, action: seriousHarmRisk.Actions): ISeriousHarmRisk {

  switch (action.type) {
    case seriousHarmRisk.UPDATE_SERIOUS_HARM_RISK: {
      return Object.assign({}, state, action.payload);
    }

    default: {
      return state;
    }
  }
}

export const getSeriousHarmRisk = (state: ISeriousHarmRisk) => state['seriousHarmRisk'];
