import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html'
})
export class RadioButtonsComponent implements OnInit {

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
   * The list of options for the radio button group
   *
   * **Required**
   */
  @Input() public options: Array<string>;

  /**
   * Flag to specify an error on submission of the parent form
   */
  @Input() public error: boolean;

  /**
   * Error message to be displayed when the field is required
   */
  @Input() public errorMessage = 'This field is required';

  /**
   * Gain access to the 'hint' set within the child DOM
   */
  @ViewChild('hint') hint;

  showHint: boolean;
  expandContent: boolean;

  /**
   * Determine the presence of hint content to be included with the component
   */
  ngOnInit() {
    this.showHint = this.hint.nativeElement.children.length > 0;
  }


}
