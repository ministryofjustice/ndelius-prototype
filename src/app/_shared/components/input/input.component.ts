import { Component, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent {

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
   * Input type
   */
  @Input() public type = 'text';

  /**
   * The name of the FormControl
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
   * Is the input capturing the date
   */
  @Input() public date: boolean;

  /**
   * Flag to specify an error on submission of the parent form
   */
  @Input() public error: boolean;

  /**
   * Error message to be displayed when the field is required
   */
  @Input() public errorMessage = 'This field is required';

  /**
   * Readonly field
   */
  @Input() public readonly: boolean; // @TODO: Include this in template

  /**
   * Full width field
   */
  @Input() public wide: boolean;

  /**
   * Gain access to the 'hint' set within the child DOM
   */
  @ViewChild('hint') hint;

}
