import { Component, Input } from '@angular/core';

/**
 * The **phase-banner** component is designed to simply display the phase banner Elements and feedback link
 *
 * **Shared component**
 *
 * @example
 * <app-phase-banner></app-phase-banner>
 */
@Component({
  selector: 'app-phase-banner',
  templateUrl: './phase-banner.component.html'
})
export class PhaseBannerComponent {

  @Input() public isFeedbackRoute: boolean;

  /**
   *
   */
  constructor() {
    // Empty
  }

}
