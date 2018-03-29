import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../../environments/environment';

import { IPrisonerDetails } from '../../prisoner-details/model/prisoner-details.model';
import { IPrisonerKnowledge } from '../../prisoner-knowledge/model/prisoner-knowledge.model';
import { IPreviousRiskAssessment } from '../../previous-risk-assessment/model/previous-risk-assessment.model';
import { IVictimIssues } from '../../victim-issues/model/victim-issues.model';

import { logInfo } from '../../../_shared/reducer/meta.reducers';
import { localStorageSyncReducer } from './meta.reducers';

import { prisonerDetailsReducer } from '../../prisoner-details/reducer/prisoner-details.reducer';
import { prisonerKnowledgeReducer } from '../../prisoner-knowledge/reducer/prisoner-knowledge.reducer';
import { previousRiskAssessmentReducer } from '../../previous-risk-assessment/reducer/previous-risk-assessment.reducer';
import { victimIssuesReducer } from '../../victim-issues/reducer/victim-issues.reducer';

/**
 * Main state interface
 */
export interface IState {
  prisonerDetails: IPrisonerDetails;
  prisonerKnowledge: IPrisonerKnowledge;
  previousRiskAssessment: IPreviousRiskAssessment;
  victimIssues: IVictimIssues;
}

/**
 * Main state reducers
 * @type {ActionReducerMap<IState>}
 */
export const reducers: ActionReducerMap<IState> = {
  prisonerDetails: prisonerDetailsReducer,
  prisonerKnowledge: prisonerKnowledgeReducer,
  previousRiskAssessment: previousRiskAssessmentReducer,
  victimIssues: victimIssuesReducer
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [localStorageSyncReducer, logInfo] : [localStorageSyncReducer];
export const getCurrentState = (state: IState) => state;
