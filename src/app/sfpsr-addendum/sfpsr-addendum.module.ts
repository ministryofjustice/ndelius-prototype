import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './_shared/shared.module';
import { SfpsrAddendumRouter } from './sfpsr-addendum.router';

import { StartReportComponent } from './start-report/start-report.component';
import { OffenderDetailsComponent } from './offender-details/offender-details.component';
import { CourtDetailsComponent } from './court-details/court-details.component';
import { AddendumDetailComponent } from './addendum-detail/addendum-detail.component';
import { SignatureComponent } from './signature/signature.component';
import { ReportCompleteComponent } from './report-complete/report-complete.component';
import { SaveDraftComponent } from './save-draft/save-draft.component';

@NgModule({
  imports: [
    CommonModule,
    SfpsrAddendumRouter,
    SharedModule
  ],
  declarations: [
    StartReportComponent,
    OffenderDetailsComponent,
    CourtDetailsComponent,
    AddendumDetailComponent,
    SignatureComponent,
    ReportCompleteComponent,
    SaveDraftComponent
  ]
})
export class SfpsrAddendumModule {
  // Empty
}
