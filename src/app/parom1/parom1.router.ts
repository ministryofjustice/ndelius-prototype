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
import { PersonalityDisorderPathwayComponent } from './personality-disorder-pathway/personality-disorder-pathway.component';
import { BehaviourComponent } from './behaviour/behaviour.component';

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
  { path: 'personality-disorder-pathway', data: { title: 'Personality disorder pathway' }, component: PersonalityDisorderPathwayComponent },
  { path: 'behaviour', data: { title: 'Behaviour in prison' }, component: BehaviourComponent },
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
