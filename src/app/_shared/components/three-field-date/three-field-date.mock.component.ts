import { Component, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-three-field-date',
  template: ''
})
export class MockThreeFieldDateComponent {

  @Input('group') public group: FormGroup;
  @Input('label') public label: string;
  @Input('help') public help: string;
  @Input('name') public name: string;
  @Input('required') public required: boolean;
  @Input('error') public error: boolean;
  @Input('errorMessage') public errorMessage = 'This field is required';
  @ViewChild('hint') hint;
  @Input('maxYear') public maxYear = new Date().getFullYear();

}
