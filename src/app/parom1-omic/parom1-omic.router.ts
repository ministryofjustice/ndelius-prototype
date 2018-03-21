import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from '../_shared/components/navigation/navigation.component';

import { SaveDraftComponent } from './save-draft/save-draft.component';
import { StartReportComponent } from './start-report/start-report.component';
import { OffenderDetailsComponent } from './offender-details/offender-details.component';

const routes: Routes = [
  { path: '', component: NavigationComponent, outlet: 'navigation' },
  { path: '', redirectTo: 'start-report', pathMatch: 'full' },
  { path: 'save-draft', data: { title: 'Draft saved' }, component: SaveDraftComponent },
  { path: 'start-report', data: { title: 'Start your report' }, component: StartReportComponent },
  { path: 'offender-details', data: { title: 'Offender details' }, component: OffenderDetailsComponent },
  { path: '**', redirectTo: 'start-report', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Parom1OmicRouter {
  // Empty
}
