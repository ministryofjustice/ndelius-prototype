import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './_shared/shared.module';
import { Parom1Router } from './parom1.router';

import { SaveDraftComponent } from './save-draft/save-draft.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { StartReportComponent } from './start-report/start-report.component';
import { PrisonerDetailsComponent } from './prisoner-details/prisoner-details.component';
import { CheckReportComponent } from './check-report/check-report.component';
import { SignatureComponent } from './signature/signature.component';
import { ReportCompleteComponent } from './report-complete/report-complete.component';
import { PrisonerRelationshipComponent } from './prisoner-relationship/prisoner-relationship.component';

@NgModule({
  imports: [
    CommonModule,
    Parom1Router,
    SharedModule
  ],
  declarations: [
    SaveDraftComponent,
    FeedbackComponent,
    StartReportComponent,
    PrisonerDetailsComponent,
    PrisonerRelationshipComponent,
    CheckReportComponent,
    SignatureComponent,
    ReportCompleteComponent
  ]
})
export class Parom1Module {
  // Empty
}
