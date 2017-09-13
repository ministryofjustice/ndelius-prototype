import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../../environments/environment';
import { ShareBaseModule } from '../../_shared/share-base.module';

import { NavigationComponent } from './components/navigation.component';
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
    ShareBaseModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  exports: [
    ShareBaseModule,
    NavigationComponent
  ],
  declarations: [
    NavigationComponent
  ],
  providers: [
    DatePipe,
    CheckReportService
  ]
})
export class SharedModule {
  // Empty
}
