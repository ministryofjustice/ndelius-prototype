import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offender-contact',
  templateUrl: './offender-contact.component.html'
})
export class OffenderContactComponent {

  @Input() public data: any;

}
