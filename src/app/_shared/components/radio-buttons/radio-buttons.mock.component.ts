import { Component, OnInit } from '@angular/core';
import { RadioButtonsComponent } from './radio-buttons.component';

@Component({
  selector: 'app-radio-buttons',
  template: ''
})
export class MockRadioButtonsComponent extends RadioButtonsComponent implements OnInit {
  ngOnInit() {
    // OVERRIDE
  }
}
