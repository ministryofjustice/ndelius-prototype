import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from '../_shared/components/navigation/navigation.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { StartReportComponent } from './start-report/start-report.component';
import { SaveDraftComponent } from './save-draft/save-draft.component';
import { ReportCompleteComponent } from './report-complete/report-complete.component';

const routes: Routes = [
  { path: '', component: NavigationComponent, outlet: 'navigation' },
  { path: 'feedback', data: { title: 'Send feedback' }, component: FeedbackComponent },
  { path: 'save-draft', data: { title: 'Draft saved' }, component: SaveDraftComponent },
  { path: 'start-report', data: { title: 'Start your report' }, component: StartReportComponent },
  { path: 'report-complete', data: { title: 'Report complete' }, component: ReportCompleteComponent },
  { path: '', redirectTo: 'start-report', pathMatch: 'full' },
  { path: '**', redirectTo: 'start-report', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Parom1Router {
  // Empty
}
