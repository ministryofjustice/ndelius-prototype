import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../../environments/environment';

import { IPrisonerDetails } from '../../prisoner-details/model/prisoner-details.model';
import { IPrisonerRelationship } from '../../prisoner-relationship/model/prisoner-relationship.model';
import { IPreviousRiskAssessment } from '../../previous-risk-assessment/model/previous-risk-assessment.model';
import { IVictimIssues } from '../../victim-issues/model/victim-issues.model';
import { IPersonalityDisorderPathway } from '../../personality-disorder-pathway/model/personality-disorder-pathway.model';
import { IBehaviour } from '../../behaviour/model/behaviour.model';
import { ISignature } from '../../signature/model/signature.model';

import { logInfo } from '../../../_shared/reducer/meta.reducers';
import { localStorageSyncReducer } from './meta.reducers';

import { prisonerDetailsReducer } from '../../prisoner-details/reducer/prisoner-details.reducer';
import { prisonerRelationshipReducer } from '../../prisoner-relationship/reducer/prisoner-relationship.reducer';
import { previousRiskAssessmentReducer } from '../../previous-risk-assessment/reducer/previous-risk-assessment.reducer';
import { victimIssuesReducer } from '../../victim-issues/reducer/victim-issues.reducer';
import { personalityDisorderPathwayReducer } from '../../personality-disorder-pathway/reducer/personality-disorder-pathway.reducer';
import { behaviourReducer } from '../../behaviour/reducer/behaviour.reducer';
import { signatureReducer } from '../../signature/reducer/signature.reducer';

/**
 * Main state interface
 */
export interface IState {
  prisonerDetails: IPrisonerDetails;
  prisonerRelationship: IPrisonerRelationship;
  previousRiskAssessment: IPreviousRiskAssessment;
  victimIssues: IVictimIssues;
  personalityDisorderPathway: IPersonalityDisorderPathway;
  behaviour: IBehaviour;
  signature: ISignature;
}

/**
 * Main state reducers
 * @type {ActionReducerMap<IState>}
 */
export const reducers: ActionReducerMap<IState> = {
  prisonerDetails: prisonerDetailsReducer,
  prisonerRelationship: prisonerRelationshipReducer,
  previousRiskAssessment: previousRiskAssessmentReducer,
  victimIssues: victimIssuesReducer,
  personalityDisorderPathway: personalityDisorderPathwayReducer,
  behaviour: behaviourReducer,
  signature: signatureReducer
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [localStorageSyncReducer, logInfo] : [localStorageSyncReducer];
export const getCurrentState = (state: IState) => state;
