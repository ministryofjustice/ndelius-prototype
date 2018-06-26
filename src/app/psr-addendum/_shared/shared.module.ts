import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../../environments/environment';
import { ShareBaseModule } from '../../_shared/share-base.module';

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
    ShareBaseModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  exports: [
    ShareBaseModule,
    SubNavigationComponent,
    PhaseBannerComponent
  ],
  declarations: [
    SubNavigationComponent,
    PhaseBannerComponent
  ]
})
export class SharedModule {
  // Empty
}
