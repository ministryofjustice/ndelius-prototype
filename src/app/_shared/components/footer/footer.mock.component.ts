import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ''
})
export class MockFooterComponent {
  @Input('continueEnabled') public continueEnabled = true;
  @Input('draftEnabled') public draftEnabled = true;
  @Input('label') public label = 'Continue';
  @Input('hint') public hint = 'Continue your report';
  @Input('continue') public continue = () => {};
}
