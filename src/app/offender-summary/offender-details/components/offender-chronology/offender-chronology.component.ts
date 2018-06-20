import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offender-chronology',
  templateUrl: './offender-chronology.component.html'
})
export class OffenderChronologyComponent {

  @Input() public data: any;

}
