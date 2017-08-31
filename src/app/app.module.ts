import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './_shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OffenderDetailsComponent } from './offender-details/offender-details.component';
import { InformationSourcesComponent } from './information-sources/information-sources.component';
import { OffenceDetailsComponent } from './offence-details/offence-details.component';
import { CourtDetailsComponent } from './court-details/court-details.component';
import { StartReportComponent } from './start-report/start-report.component';
import { OffenderAssessmentComponent } from './offender-assessment/offender-assessment.component';
import { RiskAssessmentComponent } from './risk-assessment/risk-assessment.component';
import { ProposedSentenceComponent } from './proposed-sentence/proposed-sentence.component';
import { SignatureComponent } from './signature/signature.component';
import { SaveDraftComponent } from './save-draft/save-draft.component';
import { ReportCompleteComponent } from './report-complete/report-complete.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { OffenceAnalysisComponent } from './offence-analysis/offence-analysis.component';
import { CheckReportComponent } from './check-report/check-report.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    OffenderDetailsComponent,
    InformationSourcesComponent,
    OffenceDetailsComponent,
    CourtDetailsComponent,
    StartReportComponent,
    OffenderAssessmentComponent,
    RiskAssessmentComponent,
    ProposedSentenceComponent,
    SignatureComponent,
    SaveDraftComponent,
    ReportCompleteComponent,
    FeedbackComponent,
    OffenceAnalysisComponent,
    CheckReportComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  // Empty
}
