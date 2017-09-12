import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ErrorMessagesComponent } from './error-messages.component';
import { TextEntryComponent } from './text-entry.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    ErrorMessagesComponent,
    TextEntryComponent
  ],
  declarations: [
    ErrorMessagesComponent,
    TextEntryComponent
  ]
})
export class ShareBaseModule {
  // Empty
}
