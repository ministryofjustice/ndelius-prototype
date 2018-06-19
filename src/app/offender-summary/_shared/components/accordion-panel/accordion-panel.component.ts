import { Component, Input } from '@angular/core';

/**
 * **Shared component**
 *
 * @example
 * <app-accordion-panel></app-accordion-panel>
 */
@Component({
  selector: 'app-accordion-panel',
  templateUrl: './accordion-panel.component.html'
})
export class AccordionPanelComponent {

  @Input() public title: string;
  @Input() public isActive: boolean;

  /**
   *
   */
  constructor() {
    // Empty
  }

}
