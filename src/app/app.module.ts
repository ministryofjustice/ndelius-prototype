import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './sfpsr/_shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FeedbackComponent } from './feedback/feedback.component';

import { SfpsrModule } from './sfpsr/sfpsr.module';
import { StartComponent } from './start/start.component';
import { SfpsrAddendumModule } from './sfpsr-addendum/sfpsr-addendum.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SfpsrModule,
    SfpsrAddendumModule
  ],
  declarations: [
    AppComponent,
    FeedbackComponent,
    StartComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  // Empty
}
