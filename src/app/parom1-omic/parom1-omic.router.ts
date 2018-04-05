import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from '../_shared/components/navigation/navigation.component';

import { FeedbackComponent } from './feedback/feedback.component';
import { SaveDraftComponent } from './save-draft/save-draft.component';
import { StartReportComponent } from './start-report/start-report.component';
import { PrisonerDetailsComponent } from './prisoner-details/prisoner-details.component';
import { PrisonerKnowledgeComponent } from './prisoner-knowledge/prisoner-knowledge.component';
import { PreviousRiskAssessmentComponent } from './previous-risk-assessment/previous-risk-assessment.component';
import { VictimIssuesComponent } from './victim-issues/victim-issues.component';
import { PersonalityDisorderPathwayComponent } from './personality-disorder-pathway/personality-disorder-pathway.component';
import { InterventionsComponent } from './interventions/interventions.component';
import { SentencePlanComponent } from './sentence-plan/sentence-plan.component';
import { MappaComponent } from './mappa/mappa.component';
import { CurrentRiskAssessmentComponent } from './current-risk-assessment/current-risk-assessment.component';
import { ReleaseRiskManagementComponent } from './release-risk-management/release-risk-management.component';
import { ResettlementPlanComponent } from './resettlement-plan/resettlement-plan.component';
import { SupervisionPlanComponent } from './supervision-plan/supervision-plan.component';
import { ComRecommendationComponent } from './com-recommendation/com-recommendation.component';
import { HearingConsiderationsComponent } from './hearing-considerations/hearing-considerations.component';
import { SourcesComponent } from './sources/sources.component';
import { SignatureComponent } from './signature/signature.component';
import { CheckReportComponent } from './check-report/check-report.component';
import { ReportCompleteComponent } from './report-complete/report-complete.component';

import { PomPrisonerKnowledgeComponent } from './pom-prisoner-knowledge/pom-prisoner-knowledge.component';
import { PomRecommendationComponent } from './pom-recommendation/pom-recommendation.component';
import { PomSignatureComponent } from './pom-signature/pom-signature.component';

const routes: Routes = [
  { path: '', component: NavigationComponent, outlet: 'navigation' },
  { path: '', redirectTo: 'start-report', pathMatch: 'full' },
  { path: 'feedback', data: { title: 'Send feedback' }, component: FeedbackComponent },
  { path: 'save-draft', data: { title: 'Draft saved' }, component: SaveDraftComponent },
  { path: 'start-report', data: { title: 'Start your report' }, component: StartReportComponent },
  { path: 'prisoner-details', data: { title: 'Prisoner details' }, component: PrisonerDetailsComponent },
  { path: 'prisoner-knowledge', data: { title: 'Prisoner knowledge' }, component: PrisonerKnowledgeComponent },
  { path: 'previous-risk-assessment', data: { title: 'Previous risk assessment' }, component: PreviousRiskAssessmentComponent },
  { path: 'victim-issues', data: { title: 'Victim issues' }, component: VictimIssuesComponent },
  { path: 'personality-disorder-pathway', data: { title: 'Personality disorder pathway' }, component: PersonalityDisorderPathwayComponent },
  { path: 'interventions', data: { title: 'Interventions' }, component: InterventionsComponent },
  { path: 'sentence-plan', data: { title: 'Sentence plan' }, component: SentencePlanComponent },
  { path: 'mappa', data: { title: 'Multi Agency Public Protection Arrangements (MAPPA)' }, component: MappaComponent },
  { path: 'current-risk-assessment', data: { title: 'Current risk assessment' }, component: CurrentRiskAssessmentComponent },
  { path: 'release-risk-management', data: { title: 'Release risk management plan' }, component: ReleaseRiskManagementComponent },
  { path: 'resettlement-plan', data: { title: 'Resettlement plan for release' }, component: ResettlementPlanComponent },
  { path: 'supervision-plan', data: { title: 'Supervision plan for release' }, component: SupervisionPlanComponent },
  { path: 'com-recommendation', data: { title: 'Your recommendation' }, component: ComRecommendationComponent },
  { path: 'hearing-considerations', data: { title: 'Oral hearing considerations' }, component: HearingConsiderationsComponent },
  { path: 'sources', data: { title: 'Sources' }, component: SourcesComponent },
  { path: 'check-report', data: { title: 'Check your report' }, component: CheckReportComponent },
  { path: 'signature', data: { title: 'Sign and date your report' }, component: SignatureComponent },
  { path: 'report-complete', data: { title: 'Report complete' }, component: ReportCompleteComponent },

  { path: 'pom-prisoner-knowledge', data: { title: 'Prisoner knowledge and contact' }, component: PomPrisonerKnowledgeComponent },
  { path: 'pom-recommendation', data: { title: 'Prisoner knowledge and contact' }, component: PomRecommendationComponent },
  { path: 'pom-signature', data: { title: 'Sign and date your report' }, component: PomSignatureComponent },
  { path: '**', redirectTo: 'start-report', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Parom1OmicRouter {
  // Empty
}
