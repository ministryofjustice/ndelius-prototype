import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './_shared/shared.module';
import { Parom1Router } from './parom1.router';

import { StartReportComponent } from './start-report/start-report.component';
import { SaveDraftComponent } from './save-draft/save-draft.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ReportCompleteComponent } from './report-complete/report-complete.component';

@NgModule({
  imports: [
    CommonModule,
    Parom1Router,
    SharedModule
  ],
  declarations: [
    FeedbackComponent,
    SaveDraftComponent,
    StartReportComponent,
    ReportCompleteComponent
  ]
})
export class Parom1Module {
  // Empty
}
