import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedbackComponent } from './feedback/feedback.component';
import { OffenderSummaryComponent } from './offender-details/offender-summary.component';

const routes: Routes = [
  { path: '', data: { title: 'Offender summary' }, component: OffenderSummaryComponent },
  { path: 'feedback', data: { title: 'Feedback' }, component: FeedbackComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffenderSummaryRouter {
  // Empty
}
