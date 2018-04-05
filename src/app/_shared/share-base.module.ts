import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ErrorMessagesComponent } from './components/error-messages/error-messages.component';
import { TextEntryComponent } from './components/text-entry/text-entry.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RadioButtonsComponent } from './components/radio-buttons/radio-buttons.component';
import { ThreeFieldDateComponent } from './components/three-field-date/three-field-date.component';
import { InputComponent } from './components/input/input.component';
import { FormErrorComponent } from './components/form-error/form-error.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    InputComponent,
    ErrorMessagesComponent,
    FormErrorComponent,
    TextEntryComponent,
    RadioButtonsComponent,
    ThreeFieldDateComponent,
    NavigationComponent
  ],
  declarations: [
    InputComponent,
    ErrorMessagesComponent,
    FormErrorComponent,
    TextEntryComponent,
    RadioButtonsComponent,
    ThreeFieldDateComponent,
    NavigationComponent
  ]
})
export class ShareBaseModule {
  // Empty
}
