import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start/start.component';
import { FeedbackComponent } from './feedback/feedback.component';

/**
 * Configure the main application routes
 * @type {Array<Object>}
 */
const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', data: { title: '' }, component: StartComponent },
  { path: 'feedback', data: { title: 'Feedback' }, component: FeedbackComponent }
];

/**
 * Main application router
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // Empty
}
