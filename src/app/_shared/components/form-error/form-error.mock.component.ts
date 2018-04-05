import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  template: ''
})
export class MockFormErrorComponent {

  @Input('group') public group: FormGroup;
  @Input('controls') public controls: Array<any>;
  @Input('error') public error: boolean;

}
