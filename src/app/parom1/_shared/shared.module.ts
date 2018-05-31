import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { metaReducers, reducers } from './reducer/state.reducers';

import { environment } from '../../../environments/environment';
import { ShareBaseModule } from '../../_shared/share-base.module';

import { SubNavigationComponent } from './components/sub-navigation/sub-navigation.component';
import { PhaseBannerComponent } from './components/phase-banner/phase-banner.component';
import { AgePipe } from '../../_shared/pipe/age.pipe';

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
    PhaseBannerComponent,
    ShareBaseModule,
    SubNavigationComponent
  ],
  declarations: [
    PhaseBannerComponent,
    SubNavigationComponent
  ],
  providers: [
    AgePipe
  ]
})
export class SharedModule {
  // Empty
}
