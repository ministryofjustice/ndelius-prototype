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
import { IRiskReoffending } from '../../risk-reoffending/model/risk-reoffending.model';
import { IRiskCommunity } from '../../risk-community/model/risk-community.model';
import { IRiskCustody } from '../../risk-custody/model/risk-custody.model';
import { IRiskSeriousHarm } from '../../risk-serious-harm/model/risk-serious-harm.model';
import { IReleaseRiskManagement } from '../../release-risk-management/model/release-risk-management.model';
import { IResettlementPlan } from '../../resettlement-plan/model/resettlement-plan.model';
import { ISupervisionPlan } from '../../supervision-plan/model/supervision-plan.model';
import { IComRecommendation } from '../../com-recommendation/model/com-recommendation.model';
import { IHearingConsiderations } from '../../hearing-considerations/model/hearing-considerations.model';
import { ISources } from '../../sources/model/sources.model';
import { ISignature } from '../../signature/model/signature.model';

import { IPomPrisonerKnowledge } from '../../pom-prisoner-knowledge/model/pom-prisoner-knowledge.model';
import { IPomRecommendation } from '../../pom-recommendation/model/pom-recommendation.model';
import { IPomSignature } from '../../pom-signature/model/pom-signature.model';

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
import { riskReoffendingReducer } from '../../risk-reoffending/reducer/risk-reoffending.reducer';
import { riskCommunityReducer } from '../../risk-community/reducer/risk-community.reducer';
import { riskCustodyReducer } from '../../risk-custody/reducer/risk-custody.reducer';
import { riskSeriousHarmReducer } from '../../risk-serious-harm/reducer/risk-serious-harm.reducer';
import { releaseRiskManagementReducer } from '../../release-risk-management/reducer/release-risk-management.reducer';
import { resettlementPlanReducer } from '../../resettlement-plan/reducer/resettlement-plan.reducer';
import { supervisionPlanReducer } from '../../supervision-plan/reducer/supervision-plan.reducer';
import { comRecommendationReducer } from '../../com-recommendation/reducer/com-recommendation.reducer';
import { hearingConsiderationsReducer } from '../../hearing-considerations/reducer/hearing-considerations.reducer';
import { sourcesReducer } from '../../sources/reducer/sources.reducer';
import { signatureReducer } from '../../signature/reducer/signature.reducer';

import { pomPrisonerKnowledgeReducer } from '../../pom-prisoner-knowledge/reducer/pom-prisoner-knowledge.reducer';
import { pomSignatureReducer } from '../../pom-signature/reducer/pom-signature.reducer';
import { pomRecommendationReducer } from '../../pom-recommendation/reducer/pom-recommendation.reducer';

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
  riskReoffending: IRiskReoffending;
  riskCommunity: IRiskCommunity;
  riskCustody: IRiskCustody;
  riskSeriousHarm: IRiskSeriousHarm;
  releaseRiskManagement: IReleaseRiskManagement;
  resettlementPlan: IResettlementPlan;
  supervisionPlan: ISupervisionPlan;
  comRecommendation: IComRecommendation;
  hearingConsiderations: IHearingConsiderations;
  sources: ISources;
  signature: ISignature;

  pomPrisonerKnowledge: IPomPrisonerKnowledge;
  pomRecommendation: IPomRecommendation;
  pomSignature: IPomSignature;
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
  riskReoffending: riskReoffendingReducer,
  riskCommunity: riskCommunityReducer,
  riskCustody: riskCustodyReducer,
  riskSeriousHarm: riskSeriousHarmReducer,
  releaseRiskManagement: releaseRiskManagementReducer,
  resettlementPlan: resettlementPlanReducer,
  supervisionPlan: supervisionPlanReducer,
  comRecommendation: comRecommendationReducer,
  hearingConsiderations: hearingConsiderationsReducer,
  sources: sourcesReducer,
  signature: signatureReducer,

  pomPrisonerKnowledge: pomPrisonerKnowledgeReducer,
  pomRecommendation: pomRecommendationReducer,
  pomSignature: pomSignatureReducer
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [localStorageSyncReducer, logInfo] : [localStorageSyncReducer];
export const getCurrentState = (state: IState) => state;
