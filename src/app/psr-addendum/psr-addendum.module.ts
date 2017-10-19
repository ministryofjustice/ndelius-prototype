import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './_shared/shared.module';
import { PsrAddendumRouter } from './psr-addendum.router';

import { StartReportComponent } from './start-report/start-report.component';
import { OffenderDetailsComponent } from './offender-details/offender-details.component';
import { CourtDetailsComponent } from './court-details/court-details.component';
import { AddendumDetailComponent } from './addendum-detail/addendum-detail.component';
import { SignatureComponent } from './signature/signature.component';
import { ReportCompleteComponent } from './report-complete/report-complete.component';
import { SaveDraftComponent } from './save-draft/save-draft.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  imports: [
    CommonModule,
    PsrAddendumRouter,
    SharedModule
  ],
  declarations: [
    StartReportComponent,
    OffenderDetailsComponent,
    CourtDetailsComponent,
    AddendumDetailComponent,
    SignatureComponent,
    ReportCompleteComponent,
    SaveDraftComponent,
    FeedbackComponent
  ]
})
export class PsrAddendumModule {
  // Empty
}
