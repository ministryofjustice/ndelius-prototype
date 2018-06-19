import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offender-details',
  templateUrl: './offender-details.component.html'
})
export class OffenderDetailsComponent {

  @Input() public data: any;
  @Input() public risk: string;

}
