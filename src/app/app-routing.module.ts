import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartReportComponent } from './start-report/start-report.component';
import { OffenderDetailsComponent } from './offender-details/offender-details.component';
import { CourtDetailsComponent } from './court-details/court-details.component';
import { InformationSourcesComponent } from './information-sources/information-sources.component';
import { OffenceDetailsComponent } from './offence-details/offence-details.component';
import { OffenceAnalysisComponent } from './offence-analysis/offence-analysis.component';
import { OffenderIssuesComponent } from './offender-issues/offender-issues.component';
import { OffenderAssessmentComponent } from './offender-assessment/offender-assessment.component';
import { RiskAssessmentComponent } from './risk-assessment/risk-assessment.component';
import { SeriousHarmRiskComponent } from './serious-harm-risk/serious-harm-risk.component';
import { ProposedSentenceComponent } from './proposed-sentence/proposed-sentence.component';
import { SignatureComponent } from './signature/signature.component';
import { SaveDraftComponent } from './save-draft/save-draft.component';
import { ReportCompleteComponent } from './report-complete/report-complete.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { path: '', redirectTo: 'start-report', pathMatch: 'full' },
  { path: 'start-report', data: { title: 'Start your report' }, component: StartReportComponent },
  { path: 'offender-details', data: { title: 'Offender details' }, component: OffenderDetailsComponent },
  { path: 'court-details', data: { title: 'Sentencing court details' }, component: CourtDetailsComponent },
  { path: 'information-sources', data: { title: 'Sources of information' }, component: InformationSourcesComponent },
  { path: 'offence-details', data: { title: 'Offence details' }, component: OffenceDetailsComponent },
  { path: 'offence-analysis', data: { title: 'Offence analysis' }, component: OffenceAnalysisComponent },
  { path: 'offender-issues', data: { title: 'Offender assessment issues' }, component: OffenderIssuesComponent },
  { path: 'offender-assessment', data: { title: 'Offender assessment detail' }, component: OffenderAssessmentComponent },
  { path: 'risk-assessment', data: { title: 'Risk assessment' }, component: RiskAssessmentComponent },
  { path: 'serious-harm-risk', data: { title: 'Risk of serious harm' }, component: SeriousHarmRiskComponent },
  { path: 'proposed-sentence', data: { title: 'Conclusion' }, component: ProposedSentenceComponent },
  { path: 'signature', data: { title: 'Signature' }, component: SignatureComponent },
  { path: 'save-draft', data: { title: 'Draft Saved' }, component: SaveDraftComponent },
  { path: 'report-complete', data: { title: 'Report complete' }, component: ReportCompleteComponent },
  { path: 'feedback', data: { title: 'Feedback' }, component: FeedbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // Empty
}
