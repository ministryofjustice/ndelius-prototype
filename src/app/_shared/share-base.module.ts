import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ErrorMessagesComponent } from './components/error-messages/error-messages.component';
import { TextEntryComponent } from './components/text-entry/text-entry.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    ErrorMessagesComponent,
    TextEntryComponent,
    NavigationComponent
  ],
  declarations: [
    ErrorMessagesComponent,
    TextEntryComponent,
    NavigationComponent
  ]
})
export class ShareBaseModule {
  // Empty
}
