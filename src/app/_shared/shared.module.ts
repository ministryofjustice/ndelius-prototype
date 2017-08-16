import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { NavigationComponent } from './navigation.component';
import { ErrorMessagesComponent } from './error-messages.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    NavigationComponent,
    ErrorMessagesComponent
  ],
  declarations: [
    NavigationComponent,
    ErrorMessagesComponent
  ],
  providers: [
    DatePipe
  ]
})
export class SharedModule {
  // Empty
}
