import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface IControl {
  name: string;
  error: string;
}

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html'
})
export class FormErrorComponent {

  /**
   * The control's parent FormGroup to be used as reference
   *
   * **Required**
   */
  @Input() public group: FormGroup;

  /**
   * Additional help text to be displayed beneath the label Element
   */
  @Input() public controls: Array<IControl>;

  /**
   * Flag to specify an error on submission of the parent form
   */
  @Input() public error: boolean;

}
