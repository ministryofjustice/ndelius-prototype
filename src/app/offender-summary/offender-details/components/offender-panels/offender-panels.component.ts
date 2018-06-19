import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offender-panels',
  templateUrl: './offender-panels.component.html'
})
export class OffenderPanelsComponent {

  @Input() public data: any;

}
