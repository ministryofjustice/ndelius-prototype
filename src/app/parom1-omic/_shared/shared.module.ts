import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { metaReducers, reducers } from './reducer/state.reducers';

import { environment } from '../../../environments/environment';
import { ShareBaseModule } from '../../_shared/share-base.module';

import { SubNavigationComponent } from './components/sub-navigation/sub-navigation.component';
import { PhaseBannerComponent } from './components/phase-banner/phase-banner.component';
import { FooterComponent } from './components/footer/footer.component';

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
    FooterComponent,
    ShareBaseModule,
    SubNavigationComponent
  ],
  declarations: [
    PhaseBannerComponent,
    FooterComponent,
    SubNavigationComponent
  ],
  providers: [
    DatePipe
  ]
})
export class SharedModule {
  // Empty
}
