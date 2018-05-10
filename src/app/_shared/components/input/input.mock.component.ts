import { Component } from '@angular/core';
import { InputComponent } from './input.component';

@Component({
  selector: 'app-input',
  template: '<input [id]="name" />'
})
export class MockInputComponent extends InputComponent {
  // Empty
}
