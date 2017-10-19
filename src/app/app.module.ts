import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './sfpsr/_shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StartComponent } from './start/start.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    StartComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  // Empty
}
