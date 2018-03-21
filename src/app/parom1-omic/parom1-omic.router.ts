import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartReportComponent } from './start-report/start-report.component';

import { NavigationComponent } from '../_shared/components/navigation/navigation.component';

const routes: Routes = [
  { path: '', component: NavigationComponent, outlet: 'navigation' },
  { path: '', redirectTo: 'start-report', pathMatch: 'full' },
  { path: 'start-report', data: { title: 'Start your report' }, component: StartReportComponent },
  { path: '**', redirectTo: 'start-report', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Parom1OmicRouter {
  // Empty
}
