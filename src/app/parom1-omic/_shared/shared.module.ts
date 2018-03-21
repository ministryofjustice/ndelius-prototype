import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../../environments/environment';
import { ShareBaseModule } from '../../_shared/share-base.module';

import { PhaseBannerComponent } from './components/phase-banner/phase-banner.component';

/**
 * To use the ngrx debugger, install the Redux Devtools extension for either Chrome or Firefox
 *
 * See: https://github.com/zalmoxisus/redux-devtools-extension
 */
@NgModule({
  imports: [
    CommonModule,
    ShareBaseModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  exports: [
    ShareBaseModule,
    PhaseBannerComponent
  ],
  declarations: [
    PhaseBannerComponent
  ],
  providers: [
    DatePipe
  ]
})
export class SharedModule {
  // Empty
}
