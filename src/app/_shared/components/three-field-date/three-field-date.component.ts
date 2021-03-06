import { Component, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-three-field-date',
  templateUrl: './three-field-date.component.html'
})
export class ThreeFieldDateComponent {

  /**
   * The control's parent FormGroup to be used as reference
   *
   * **Required**
   */
  @Input() public group: FormGroup;

  /**
   * The label for the radio button Elements
   *
   * **Required**
   */
  @Input() public label: string;

  /**
   * Additional help text to be displayed beneath the label Element
   */
  @Input() public help: string;

  /**
   * The name of the FormGroup which *must* include any of day|month|year FormControls
   *
   * **Required**
   *
   * This is also used to generate attributes like the DOM id where required
   */
  @Input() public name: string;

  /**
   * Is the radio group required
   */
  @Input() public required: boolean;

  /**
   * Flag to specify an error on submission of the parent form
   */
  @Input() public error: boolean;

  /**
   * Error message to be displayed when the field is required
   */
  @Input() public errorMessage = 'This field is required';

  /**
   *
   * @type {number}
   */
  @Input() public maxYear = new Date().getFullYear();

  /**
   * Gain access to the 'hint' set within the child DOM
   */
  @ViewChild('hint') hint;

  hasGroupError = () => {
    const group = this.group.get(this.name);
    let fieldInvalid =  group.get('day') && (group.get('day').touched || this.error) && group.get('day').errors;
    fieldInvalid = fieldInvalid || group.get('month') && (group.get('month').touched || this.error) && group.get('month').errors;
    fieldInvalid = fieldInvalid || group.get('year') && (group.get('year').touched || this.error) && group.get('year').errors;
    return fieldInvalid;
  }

}
