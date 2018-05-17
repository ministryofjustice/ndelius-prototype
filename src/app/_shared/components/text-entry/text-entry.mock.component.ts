import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-entry',
  template: ''
})
export class MockTextEntryComponent {

  @Input() public label: string;
  @Input() public name: string;
  @Input() public help: string;
  @Input() public group: FormGroup;
  @Input() public error: boolean;
  @Input() public errorMessage = 'This field is required';
  @Input() public required: boolean;
  @Input() public classic: boolean;
  @Input() public limit: number;

}
