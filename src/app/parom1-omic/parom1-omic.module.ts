import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './_shared/shared.module';
import { Parom1OmicRouter } from './parom1-omic.router';

import { FeedbackComponent } from './feedback/feedback.component';
import { SaveDraftComponent } from './save-draft/save-draft.component';
import { StartReportComponent } from './start-report/start-report.component';
import { PrisonerDetailsComponent } from './prisoner-details/prisoner-details.component';

@NgModule({
  imports: [
    CommonModule,
    Parom1OmicRouter,
    SharedModule
  ],
  declarations: [
    FeedbackComponent,
    SaveDraftComponent,
    StartReportComponent,
    PrisonerDetailsComponent
  ]
})
export class Parom1OmicModule {
  // Empty
}
