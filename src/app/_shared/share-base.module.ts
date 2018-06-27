import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AgePipe } from './pipe/age.pipe';

import { ErrorMessagesComponent } from './components/error-messages/error-messages.component';
import { TextEntryComponent } from './components/text-entry/text-entry.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RadioButtonsComponent } from './components/radio-buttons/radio-buttons.component';
import { ThreeFieldDateComponent } from './components/three-field-date/three-field-date.component';
import { InputComponent } from './components/input/input.component';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoticeComponent } from './components/notice/notice.component';
import { DetailsComponent } from './components/details/details.component';
import { CheckboxesComponent } from './components/checkboxes/checkboxes.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    InputComponent,
    NoticeComponent,
    ErrorMessagesComponent,
    FormErrorComponent,
    TextEntryComponent,
    RadioButtonsComponent,
    ThreeFieldDateComponent,
    CheckboxesComponent,
    DetailsComponent,
    NavigationComponent,
    FooterComponent
  ],
  declarations: [
    AgePipe,
    InputComponent,
    NoticeComponent,
    ErrorMessagesComponent,
    FormErrorComponent,
    TextEntryComponent,
    RadioButtonsComponent,
    ThreeFieldDateComponent,
    CheckboxesComponent,
    DetailsComponent,
    NavigationComponent,
    FooterComponent
  ],
  providers: [
    DatePipe,
    AgePipe
  ]
})
export class ShareBaseModule {
  // Empty
}
