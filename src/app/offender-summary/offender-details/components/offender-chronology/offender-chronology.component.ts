import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offender-chronology',
  templateUrl: './offender-chronology.component.html'
})
export class OffenderChronologyComponent {

  @Input() public data: any;

  /**
   *
   * @param {Router} router
   */
  constructor(private router: Router) {
    // Empty
  }

  startSFPSR() {
    this.router.navigate(['/sfpsr']);
  }

}
