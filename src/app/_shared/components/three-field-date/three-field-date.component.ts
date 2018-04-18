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
  @Input('group') public group: FormGroup;

  /**
   * The label for the radio button Elements
   *
   * **Required**
   */
  @Input('label') public label: string;

  /**
   * Additional help text to be displayed beneath the label Element
   */
  @Input('help') public help: string;

  /**
   * The name of the FormGroup which *must* include any of day|month|year FormControls
   *
   * **Required**
   *
   * This is also used to generate attributes like the DOM id where required
   */
  @Input('name') public name: string;

  /**
   * Is the radio group required
   */
  @Input('required') public required: boolean;

  /**
   * Flag to specify an error on submission of the parent form
   */
  @Input('error') public error: boolean;

  /**
   * Error message to be displayed when the field is required
   */
  @Input('errorMessage') public errorMessage = 'This field is required';

  /**
   * Gain access to the 'hint' set within the child DOM
   */
  @ViewChild('hint') hint;

  /**
   *
   * @type {number}
   */
  @Input('maxYear') public maxYear = new Date().getFullYear();

  hasGroupError = () => {
    const group = this.group.get(this.name);
    let fieldInvalid =  group.get('day') && group.get('day').touched && group.get('day').errors;
    fieldInvalid = fieldInvalid || group.get('month') && group.get('month').touched && group.get('month').errors;
    fieldInvalid = fieldInvalid || group.get('year') && group.get('year').touched && group.get('year').errors;
    return fieldInvalid || this.error;
  }

}
