import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NavigationComponent } from './navigation.component';
import { ErrorMessagesComponent } from './error-messages.component';
import { TextEntryComponent } from './text-entry.component';

import { environment } from '../../environments/environment';

import { reducers, metaReducers } from './reducer/state.reducers';

import { CheckReportService } from '../check-report/check-report.service';

/**
 * To use the ngrx debugger, install the Redux Devtools extension for either Chrome or Firefox
 *
 * See: https://github.com/zalmoxisus/redux-devtools-extension
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    NavigationComponent,
    ErrorMessagesComponent,
    TextEntryComponent
  ],
  declarations: [
    NavigationComponent,
    ErrorMessagesComponent,
    TextEntryComponent
  ],
  providers: [
    DatePipe,
    CheckReportService
  ]
})
export class SharedModule {
  // Empty
}
