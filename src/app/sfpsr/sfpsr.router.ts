import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartReportComponent } from './start-report/start-report.component';
import { OffenderDetailsComponent } from './offender-details/offender-details.component';
import { CourtDetailsComponent } from './court-details/court-details.component';
import { InformationSourcesComponent } from './information-sources/information-sources.component';
import { OffenceDetailsComponent } from './offence-details/offence-details.component';
import { OffenceAnalysisComponent } from './offence-analysis/offence-analysis.component';
import { OffenderAssessmentComponent } from './offender-assessment/offender-assessment.component';
import { RiskAssessmentComponent } from './risk-assessment/risk-assessment.component';
import { ProposedSentenceComponent } from './proposed-sentence/proposed-sentence.component';
import { CheckReportComponent } from './check-report/check-report.component';
import { SignatureComponent } from './signature/signature.component';
import { ReportCompleteComponent } from './report-complete/report-complete.component';
import { SaveDraftComponent } from './save-draft/save-draft.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { path: '', redirectTo: 'start-report', pathMatch: 'full' },
  { path: 'start-report', data: { title: 'Start your report' }, component: StartReportComponent },
  { path: 'offender-details', data: { title: 'Offender details' }, component: OffenderDetailsComponent },
  { path: 'court-details', data: { title: 'Sentencing court details' }, component: CourtDetailsComponent },
  { path: 'information-sources', data: { title: 'Sources of information' }, component: InformationSourcesComponent },
  { path: 'offence-details', data: { title: 'Offence details' }, component: OffenceDetailsComponent },
  { path: 'offence-analysis', data: { title: 'Offence analysis' }, component: OffenceAnalysisComponent },
  { path: 'offender-assessment', data: { title: 'Offender assessment detail' }, component: OffenderAssessmentComponent },
  { path: 'risk-assessment', data: { title: 'Risk assessment' }, component: RiskAssessmentComponent },
  { path: 'proposed-sentence', data: { title: 'Conclusion' }, component: ProposedSentenceComponent },
  { path: 'check-report', data: { title: 'Check your report' }, component: CheckReportComponent },
  { path: 'signature', data: { title: 'Signature' }, component: SignatureComponent },
  { path: 'report-complete', data: { title: 'Report complete' }, component: ReportCompleteComponent },
  { path: 'save-draft', data: { title: 'Draft Saved' }, component: SaveDraftComponent },
  { path: 'feedback', data: { title: 'Give feedback' }, component: FeedbackComponent },
  { path: '**', redirectTo: 'start-report', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SfpsrRouter {
  // Empty
}
