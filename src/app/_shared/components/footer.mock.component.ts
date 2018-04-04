import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parom1-footer',
  template: ''
})
export class MockFooterComponent {
  @Input('continueEnabled') public continueEnabled = true;
}
