import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './_shared/shared.module';
import { Parom1OmicRouter } from './parom1-omic.router';

import { SaveDraftComponent } from './save-draft/save-draft.component';
import { StartReportComponent } from './start-report/start-report.component';
import { OffenderDetailsComponent } from './offender-details/offender-details.component';

@NgModule({
  imports: [
    CommonModule,
    Parom1OmicRouter,
    SharedModule
  ],
  declarations: [
    SaveDraftComponent,
    StartReportComponent,
    OffenderDetailsComponent
  ]
})
export class Parom1OmicModule {
  // Empty
}
