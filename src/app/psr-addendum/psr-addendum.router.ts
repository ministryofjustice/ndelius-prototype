import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartReportComponent } from './start-report/start-report.component';
import { OffenderDetailsComponent } from './offender-details/offender-details.component';
import { CourtDetailsComponent } from './court-details/court-details.component';
import { AddendumDetailComponent } from './addendum-detail/addendum-detail.component';
import { SignatureComponent } from './signature/signature.component';
import { ReportCompleteComponent } from './report-complete/report-complete.component';
import { SaveDraftComponent } from './save-draft/save-draft.component';

const routes: Routes = [
  { path: '', redirectTo: 'start-report', pathMatch: 'full' },
  { path: 'start-report', data: { title: 'Start your report' }, component: StartReportComponent },
  { path: 'offender-details', data: { title: 'Offender details' }, component: OffenderDetailsComponent },
  { path: 'court-details', data: { title: 'Sentencing court details' }, component: CourtDetailsComponent },
  { path: 'addendum-detail', data: { title: 'Addendum detail' }, component: AddendumDetailComponent },
  { path: 'signature', data: { title: 'Signature' }, component: SignatureComponent },
  { path: 'report-complete', data: { title: 'Report complete' }, component: ReportCompleteComponent },
  { path: 'save-draft', data: { title: 'Draft saved' }, component: SaveDraftComponent },
  { path: '**', redirectTo: 'start-report', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsrAddendumRouter {
  // Empty
}
