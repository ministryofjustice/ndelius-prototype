import { Component, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  template: '<input [id]="name" />'
})
export class MockInputComponent {

  @Input('group') public group: FormGroup;
  @Input('label') public label: string;
  @Input('help') public help: string;
  @Input('name') public name: string;
  @Input('required') public required: boolean;
  @Input('date') public date: boolean;
  @Input('error') public error: boolean;
  @ViewChild('hint') hint;

}
