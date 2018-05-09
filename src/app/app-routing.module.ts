import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start/start.component';

/**
 * Configure the main application routes
 * @type {Array<Object>}
 */
const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', data: { title: 'Demonstration' }, component: StartComponent },
  { path: 'sfpsr', loadChildren: './sfpsr/sfpsr.module#SfpsrModule' },
  { path: 'psr-addendum', loadChildren: './psr-addendum/psr-addendum.module#PsrAddendumModule' },
  { path: 'parom1-omic', loadChildren: './parom1-omic/parom1-omic.module#Parom1OmicModule' },
  { path: '**', redirectTo: 'start', pathMatch: 'full' }

];

/**
 * Main application router
 */
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // Empty
}
