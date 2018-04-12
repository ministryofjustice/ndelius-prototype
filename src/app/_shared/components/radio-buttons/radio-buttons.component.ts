import { Component, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html'
})
export class RadioButtonsComponent {

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
   * The name of the FormControl
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
   * The list of options for the radio button group
   *
   * **Required**
   */
  @Input('options') public options: Array<string>;

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

}