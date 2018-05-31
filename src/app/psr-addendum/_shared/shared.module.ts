import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../../environments/environment';

import { SubNavigationComponent } from './components/sub-navigation/sub-navigation.component';
import { reducers, metaReducers } from './reducer/state.reducers';
import { PhaseBannerComponent } from './components/phase-banner/phase-banner.component';

/**
 * To use the ngrx debugger, install the Redux Devtools extension for either Chrome or Firefox
 *
 * See: https://github.com/zalmoxisus/redux-devtools-extension
 */
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  exports: [
    SubNavigationComponent,
    PhaseBannerComponent
  ],
  declarations: [
    SubNavigationComponent,
    PhaseBannerComponent
  ],
  providers: [
    DatePipe
  ]
})
export class SharedModule {
  // Empty
}
