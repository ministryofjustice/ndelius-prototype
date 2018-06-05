import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../../environments/environment';

import { IPrisonerDetails } from '../../prisoner-details/model/prisoner-details.model';
import { IPrisonerRelationship } from '../../prisoner-relationship/model/prisoner-relationship.model';
import { IPreviousRiskAssessment } from '../../previous-risk-assessment/model/previous-risk-assessment.model';
import { IVictimIssues } from '../../victim-issues/model/victim-issues.model';
import { IOffenderPersonalityDisorderPathway } from '../../opd-pathway/model/opd-pathway.model';
import { IBehaviour } from '../../behaviour/model/behaviour.model';
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
import { IRecommendation } from '../../recommendation/model/recommendation.model';
import { IHearingConsiderations } from '../../hearing-considerations/model/hearing-considerations.model';
import { ISources } from '../../sources/model/sources.model';
import { ISignature } from '../../signature/model/signature.model';

import { logInfo } from '../../../_shared/reducer/meta.reducers';
import { localStorageSyncReducer } from './meta.reducers';

import { prisonerDetailsReducer } from '../../prisoner-details/reducer/prisoner-details.reducer';
import { prisonerRelationshipReducer } from '../../prisoner-relationship/reducer/prisoner-relationship.reducer';
import { previousRiskAssessmentReducer } from '../../previous-risk-assessment/reducer/previous-risk-assessment.reducer';
import { victimIssuesReducer } from '../../victim-issues/reducer/victim-issues.reducer';
import { opdPathwayReducer } from '../../opd-pathway/reducer/opd-pathway.reducer';
import { behaviourReducer } from '../../behaviour/reducer/behaviour.reducer';
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
import { recommendationReducer } from '../../recommendation/reducer/recommendation.reducer';
import { hearingConsiderationsReducer } from '../../hearing-considerations/reducer/hearing-considerations.reducer';
import { sourcesReducer } from '../../sources/reducer/sources.reducer';
import { signatureReducer } from '../../signature/reducer/signature.reducer';

/**
 * Main state interface
 */
export interface IState {
  prisonerDetails: IPrisonerDetails;
  prisonerRelationship: IPrisonerRelationship;
  previousRiskAssessment: IPreviousRiskAssessment;
  victimIssues: IVictimIssues;
  offenderPersonalityDisorderPathway: IOffenderPersonalityDisorderPathway;
  behaviour: IBehaviour;
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
  recommendation: IRecommendation;
  hearingConsiderations: IHearingConsiderations;
  sources: ISources;
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
  offenderPersonalityDisorderPathway: opdPathwayReducer,
  behaviour: behaviourReducer,
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
  recommendation: recommendationReducer,
  hearingConsiderations: hearingConsiderationsReducer,
  sources: sourcesReducer,
  signature: signatureReducer
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [localStorageSyncReducer, logInfo] : [localStorageSyncReducer];
export const getCurrentState = (state: IState) => state;
