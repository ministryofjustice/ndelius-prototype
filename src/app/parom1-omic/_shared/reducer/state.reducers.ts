import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../../environments/environment';

import { IPrisonerDetails } from '../../prisoner-details/model/prisoner-details.model';
import { IPrisonerKnowledge } from '../../prisoner-knowledge/model/prisoner-knowledge.model';
import { IPreviousRiskAssessment } from '../../previous-risk-assessment/model/previous-risk-assessment.model';
import { IVictimIssues } from '../../victim-issues/model/victim-issues.model';
import { IPersonalityDisorderPathway } from '../../personality-disorder-pathway/model/personality-disorder-pathway.model';
import { IInterventions } from '../../interventions/model/interventions.model';
import { ISentencePlan } from '../../sentence-plan/model/sentence-plan.model';
import { IMappa } from '../../mappa/model/mappa.model';
import { ICurrentRiskAssessment } from '../../current-risk-assessment/model/current-risk-assessment.model';
import { IReleaseRiskManagement } from '../../release-risk-management/model/release-risk-management.model';
import { IResettlementPlan } from '../../resettlement-plan/model/resettlement-plan.model';
import { ISupervisionPlan } from '../../supervision-plan/model/supervision-plan.model';

import { logInfo } from '../../../_shared/reducer/meta.reducers';
import { localStorageSyncReducer } from './meta.reducers';

import { prisonerDetailsReducer } from '../../prisoner-details/reducer/prisoner-details.reducer';
import { prisonerKnowledgeReducer } from '../../prisoner-knowledge/reducer/prisoner-knowledge.reducer';
import { previousRiskAssessmentReducer } from '../../previous-risk-assessment/reducer/previous-risk-assessment.reducer';
import { victimIssuesReducer } from '../../victim-issues/reducer/victim-issues.reducer';
import { personalityDisorderPathwayReducer } from '../../personality-disorder-pathway/reducer/personality-disorder-pathway.reducer';
import { interventionsReducer } from '../../interventions/reducer/interventions.reducer';
import { sentencePlanReducer } from '../../sentence-plan/reducer/sentence-plan.reducer';
import { mappaReducer } from '../../mappa/reducer/mappa.reducer';
import { currentRiskAssessmentReducer } from '../../current-risk-assessment/reducer/current-risk-assessment.reducer';
import { releaseRiskManagementReducer } from '../../release-risk-management/reducer/release-risk-management.reducer';
import { resettlementPlanReducer } from '../../resettlement-plan/reducer/resettlement-plan.reducer';
import { supervisionPlanReducer } from '../../supervision-plan/reducer/supervision-plan.reducer';

/**
 * Main state interface
 */
export interface IState {
  prisonerDetails: IPrisonerDetails;
  prisonerKnowledge: IPrisonerKnowledge;
  previousRiskAssessment: IPreviousRiskAssessment;
  victimIssues: IVictimIssues;
  personalityDisorderPathway: IPersonalityDisorderPathway;
  interventions: IInterventions;
  sentencePlan: ISentencePlan;
  mappa: IMappa;
  currentRiskAssessment: ICurrentRiskAssessment;
  releaseRiskManagement: IReleaseRiskManagement;
  resettlementPlan: IResettlementPlan;
  supervisionPlan: ISupervisionPlan;
}

/**
 * Main state reducers
 * @type {ActionReducerMap<IState>}
 */
export const reducers: ActionReducerMap<IState> = {
  prisonerDetails: prisonerDetailsReducer,
  prisonerKnowledge: prisonerKnowledgeReducer,
  previousRiskAssessment: previousRiskAssessmentReducer,
  victimIssues: victimIssuesReducer,
  personalityDisorderPathway: personalityDisorderPathwayReducer,
  interventions: interventionsReducer,
  sentencePlan: sentencePlanReducer,
  mappa: mappaReducer,
  currentRiskAssessment: currentRiskAssessmentReducer,
  releaseRiskManagement: releaseRiskManagementReducer,
  resettlementPlan: resettlementPlanReducer,
  supervisionPlan: supervisionPlanReducer
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [localStorageSyncReducer, logInfo] : [localStorageSyncReducer];
export const getCurrentState = (state: IState) => state;
