import { Component, Input, OnInit } from '@angular/core';

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
export class AccordionPanelComponent implements OnInit {

  @Input() public id: number;
  @Input() public title: string;
  @Input() public hint: string;
  @Input() public isActive: boolean;
  @Input() public startOpen: boolean;

  /**
   *
   */
  constructor() {
    // Empty
  }

  ngOnInit() {
    this.isActive = this.startOpen;
  }

}
