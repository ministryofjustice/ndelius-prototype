import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offender-header',
  templateUrl: './offender-header.component.html'
})
export class OffenderHeaderComponent {

  @Input() public data: any;
  @Input() public risk: string;

}
