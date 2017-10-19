import { NgModule } from '@angular/core';

import { SharedModule } from './_shared/shared.module';
import { SfpsrRouter } from './sfpsr.router';

import { StartReportComponent } from './start-report/start-report.component';
import { OffenderDetailsComponent } from './offender-details/offender-details.component';
import { CommonModule } from '@angular/common';
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

@NgModule({
  imports: [
    CommonModule,
    SfpsrRouter,
    SharedModule
  ],
  declarations: [
    StartReportComponent,
    OffenderDetailsComponent,
    CourtDetailsComponent,
    InformationSourcesComponent,
    OffenceDetailsComponent,
    OffenceAnalysisComponent,
    OffenderAssessmentComponent,
    RiskAssessmentComponent,
    ProposedSentenceComponent,
    CheckReportComponent,
    SignatureComponent,
    ReportCompleteComponent,
    SaveDraftComponent,
    FeedbackComponent
  ]
})
export class SfpsrModule {
  // Empty
}
