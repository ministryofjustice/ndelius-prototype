import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-entry',
  template: ''
})
export class MockTextEntryComponent {

  @Input('label') public label: string;
  @Input('name') public name: string;
  @Input('help') public help: string;
  @Input('group') public group: FormGroup;
  @Input('error') public error: boolean;
  @Input('errorMessage') public errorMessage = 'This field is required';
  @Input('required') public required: boolean;
  @Input('limit') public limit: number;

}
