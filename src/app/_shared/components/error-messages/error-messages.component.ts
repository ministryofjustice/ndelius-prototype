import { Component, Input } from '@angular/core';

/**
 * The **error-messages** component is designed to simplify the display of form validation error messages
 *
 * **Shared component**
 *
 * @example
 * <app-error-messages control="myFormControl" [active]="myFormGroup.get('myFormControl').errors"></app-error-messages>
 */
@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html'
})
export class ErrorMessagesComponent {

  /**
   * Name of the formControl to be used when creating the DOM id of the error message
   *
   * For example; "myFormControl" will be used to create the component with the DOM id: "myFormControl_error"
   *
   * **Required**
   */
  @Input() public control: string;

  /**
   * Flag to set the active/displayed state of the error-messages component
   *
   * **Required**
   */
  @Input() public active: boolean;

  /**
   * Error message to be displayed when the field is required
   */
  @Input() public message = 'This field is required';

}
