import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offender-management',
  templateUrl: './offender-management.component.html'
})
export class OffenderManagementComponent {

  @Input() public data: any;

}
