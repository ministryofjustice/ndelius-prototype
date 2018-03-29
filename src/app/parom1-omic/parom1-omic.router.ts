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
  { path: '**', redirectTo: 'start-report', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Parom1OmicRouter {
  // Empty
}
