import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './_shared/shared.module';
import { Parom1OmicRouter } from './parom1-omic.router';
import { StartReportComponent } from './start-report/start-report.component';

@NgModule({
  imports: [
    CommonModule,
    Parom1OmicRouter,
    SharedModule
  ],
  declarations: [
    StartReportComponent
  ]
})
export class Parom1OmicModule {
  // Empty
}
