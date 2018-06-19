import { NgModule } from '@angular/core';

import { SharedModule } from './_shared/shared.module';

import { OffenderSummaryRouter } from './offender-summary.router';
import { FeedbackComponent } from './feedback/feedback.component';

import { OffenderSummaryComponent } from './offender-details/offender-summary.component';
import { OffenderHeaderComponent } from './offender-details/components/offender-header/offender-header.component';
import { OffenderPanelsComponent } from './offender-details/components/offender-panels/offender-panels.component';
import { OffenderDetailsComponent } from './offender-details/components/offender-details/offender-details.component';
import { OffenderContactComponent } from './offender-details/components/offender-contact/offender-contact.component';
import { OffenderManagementComponent } from './offender-details/components/offender-management/offender-management.component';

@NgModule({
  imports: [
    OffenderSummaryRouter,
    SharedModule
  ],
  declarations: [
    FeedbackComponent,
    OffenderSummaryComponent,
    OffenderHeaderComponent,
    OffenderPanelsComponent,
    OffenderDetailsComponent,
    OffenderContactComponent,
    OffenderManagementComponent
  ]
})
export class OffenderSummaryModule {
  // Empty
}
