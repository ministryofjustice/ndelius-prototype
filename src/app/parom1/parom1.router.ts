import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from '../_shared/components/navigation/navigation.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { StartReportComponent } from './start-report/start-report.component';
import { SaveDraftComponent } from './save-draft/save-draft.component';
import { PrisonerDetailsComponent } from './prisoner-details/prisoner-details.component';
import { PrisonerRelationshipComponent } from './prisoner-relationship/prisoner-relationship.component';
import { PreviousRiskAssessmentComponent } from './previous-risk-assessment/previous-risk-assessment.component';
import { VictimIssuesComponent } from './victim-issues/victim-issues.component';
import { OpdPathwayComponent } from './opd-pathway/opd-pathway.component';
import { BehaviourComponent } from './behaviour/behaviour.component';
import { InterventionsComponent } from './interventions/interventions.component';
import { SentencePlanComponent } from './sentence-plan/sentence-plan.component';
import { MappaComponent } from './mappa/mappa.component';
import { RiskReoffendingComponent } from './risk-reoffending/risk-reoffending.component';
import { RiskCommunityComponent } from './risk-community/risk-community.component';
import { RiskCustodyComponent } from './risk-custody/risk-custody.component';
import { RiskSeriousHarmComponent } from './risk-serious-harm/risk-serious-harm.component';
import { SourcesComponent } from './sources/sources.component';
import { HearingConsiderationsComponent } from './hearing-considerations/hearing-considerations.component';
import { ResettlementPlanComponent } from './resettlement-plan/resettlement-plan.component';
import { SupervisionPlanComponent } from './supervision-plan/supervision-plan.component';
import { ReleaseRiskManagementComponent } from './release-risk-management/release-risk-management.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { CheckReportComponent } from './check-report/check-report.component';
import { SignatureComponent } from './signature/signature.component';
import { ReportCompleteComponent } from './report-complete/report-complete.component';

const routes: Routes = [
  { path: '', component: NavigationComponent, outlet: 'navigation' },
  { path: 'feedback', data: { title: 'Send feedback' }, component: FeedbackComponent },
  { path: 'save-draft', data: { title: 'Draft saved' }, component: SaveDraftComponent },
  { path: 'start-report', data: { title: 'Start your report' }, component: StartReportComponent },
  { path: 'prisoner-details', data: { title: 'Prisoner details' }, component: PrisonerDetailsComponent },
  { path: 'prisoner-relationship', data: { title: 'Prisoner relationship' }, component: PrisonerRelationshipComponent },
  { path: 'previous-risk-assessment', data: { title: 'Previous risk assessment' }, component: PreviousRiskAssessmentComponent },
  { path: 'victim-issues', data: { title: 'Victims' }, component: VictimIssuesComponent },
  { path: 'personality-disorder-pathway', data: { title: 'Personality disorder pathway' }, component: OpdPathwayComponent },
  { path: 'behaviour', data: { title: 'Behaviour in prison' }, component: BehaviourComponent },
  { path: 'interventions', data: { title: 'Interventions' }, component: InterventionsComponent },
  { path: 'sentence-plan', data: { title: 'Current sentence plan' }, component: SentencePlanComponent },
  { path: 'mappa', data: { title: 'MAPPA' }, component: MappaComponent },
  { path: 'risk-reoffending', data: { title: 'Risk of re-offending' }, component: RiskReoffendingComponent },
  { path: 'risk-community', data: { title: 'Risk within the community' }, component: RiskCommunityComponent },
  { path: 'risk-custody', data: { title: 'Risk whilst in custody' }, component: RiskCustodyComponent },
  { path: 'risk-serious-harm', data: { title: 'Risk of serious harm' }, component: RiskSeriousHarmComponent },
  { path: 'release-risk-management', data: { title: 'Release risk management plan' }, component: ReleaseRiskManagementComponent },
  { path: 'resettlement-plan', data: { title: 'Resettlement plan for release' }, component: ResettlementPlanComponent },
  { path: 'supervision-plan', data: { title: 'Supervision plan for release' }, component: SupervisionPlanComponent },
  { path: 'recommendation', data: { title: 'Your recommendation' }, component: RecommendationComponent },
  { path: 'hearing-considerations', data: { title: 'Oral hearing considerations' }, component: HearingConsiderationsComponent },
  { path: 'sources', data: { title: 'Sources' }, component: SourcesComponent },
  { path: 'check-report', data: { title: 'Check your report' }, component: CheckReportComponent },
  { path: 'signature', data: { title: 'Sign and date your report' }, component: SignatureComponent },
  { path: 'report-complete', data: { title: 'Report complete' }, component: ReportCompleteComponent },
  { path: '', redirectTo: 'start-report', pathMatch: 'full' },
  { path: '**', redirectTo: 'start-report', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Parom1Router {
  // Emptyd
}
