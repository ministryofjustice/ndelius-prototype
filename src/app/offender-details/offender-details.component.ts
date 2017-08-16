import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface IReportData {
  name: String;
  dateOfBirth: String;
  age: Number;
  address: String;
  crn: String;
  pnc: String;
}

@Component({
  selector: 'app-offender-details',
  templateUrl: './offender-details.component.html'
})
export class OffenderDetailsComponent {

  /**
   *
   * @type {}
   */
  reportData: IReportData = {
    name: 'Alan Smith',
    dateOfBirth: '06/02/1976',
    age: 41,
    address: '1 Albert Square, Manchester, Greater Manchester, M60 2LA',
    crn: 'B56789',
    pnc: '98793030'
  };

  /**
   *
   * @param {Router} router
   */
  constructor(private router: Router) {
    // Empty
  }

  /**
   *
   */
  continueReport() {
    this.router.navigate(['court-details']);
  }

}
