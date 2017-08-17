import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NavigationComponent } from './navigation.component';
import { ErrorMessagesComponent } from './error-messages.component';

import { environment } from '../../environments/environment';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducer/state.reducers';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    StoreModule.forRoot(reducers),

    /**
     * To use the debugger, install the Redux Devtools extension for either Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    !environment.production ? StoreDevtoolsModule.instrument() : [],

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
