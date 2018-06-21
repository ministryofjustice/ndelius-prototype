import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offender-risk',
  templateUrl: './offender-risk.component.html'
})
export class OffenderRiskComponent {

  @Input() public data = [];

}
