import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offender-summary',
  templateUrl: './offender-summary.component.html'
})
export class OffenderSummaryComponent {

  offenderData = {};

  /**
   * @constructor
   * @param {HttpClient} http
   */
  constructor(private http: HttpClient) {
    this.http.get('/assets/data/stub.json').subscribe((data) => {
      this.offenderData = data['offenders'][0]['_source'];
      console.info(this.offenderData);
    });
  }

}
