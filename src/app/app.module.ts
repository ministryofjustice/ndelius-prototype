import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShareBaseModule } from './_shared/share-base.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StartComponent } from './start/start.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareBaseModule
  ],
  exports: [
    ShareBaseModule
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
