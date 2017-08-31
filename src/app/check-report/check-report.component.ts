import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-report',
  templateUrl: './check-report.component.html'
})
export class CheckReportComponent {

  /**
   * @constructor
   * @param {Router} router
   */
  constructor(private router: Router) {
    // Empty
  }

  /**
   *
   */
  signReport() {
    this.router.navigate(['signature']);
  }

}
