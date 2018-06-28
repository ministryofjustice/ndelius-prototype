import { Component, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkboxes',
  template: ''
})
export class MockCheckboxesComponent {

  /**
   * The control's parent FormGroup to be used as reference
   *
   * **Required**
   */
  @Input() public group: FormGroup;

  /**
   * The legend for the checkbox group
   *
   * **Required**
   */
  @Input() public legend: string;

  /**
   * Additional help text to be displayed beneath the label Element
   */
  @Input() public help: string;

  /**
   * The list of options for the radio button group
   *
   * **Required**
   */
  @Input() public options: Array<string>;

  /**
   * Gain access to the 'hint' set within the child DOM
   */
  @ViewChild('hint') hint;

  showHint: boolean;
  expandContent: boolean;


}
