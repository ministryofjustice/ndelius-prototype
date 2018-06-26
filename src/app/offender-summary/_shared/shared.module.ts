import { NgModule } from '@angular/core';

import { ShareBaseModule } from '../../_shared/share-base.module';

import { PhaseBannerComponent } from './components/phase-banner/phase-banner.component';
import { AccordionPanelComponent } from './components/accordion-panel/accordion-panel.component';

/**
 * To use the ngrx debugger, install the Redux Devtools extension for either Chrome or Firefox
 *
 * See: https://github.com/zalmoxisus/redux-devtools-extension
 */
@NgModule({
  imports: [
    ShareBaseModule
  ],
  exports: [
    ShareBaseModule,
    PhaseBannerComponent,
    AccordionPanelComponent
  ],
  declarations: [
    PhaseBannerComponent,
    AccordionPanelComponent
  ]
})
export class SharedModule {
  // Empty
}
