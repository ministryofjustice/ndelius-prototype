import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartReportComponent } from './start-report/start-report.component';

const routes: Routes = [
  { path: '', redirectTo: 'sfpsr-addendum/start-report', pathMatch: 'full' },
  { path: 'sfpsr-addendum/start-report', data: { title: 'Start your report' }, component: StartReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SfpsrAddendumRouter {
  // Empty
}
