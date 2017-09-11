import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SfpsrAddendumRouter } from './sfpsr-addendum.router';
import { SharedModule } from '../sfpsr/_shared/shared.module';
import { StartReportComponent } from './start-report/start-report.component';

@NgModule({
  imports: [
    CommonModule,
    SfpsrAddendumRouter,
    SharedModule
  ],
  declarations: [

  StartReportComponent]
})
export class SfpsrAddendumModule {
  // Empty
}
