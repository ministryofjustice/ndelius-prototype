import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/index';

@Component({
  selector: 'app-offender-summary',
  templateUrl: './offender-summary.component.html'
})
export class OffenderSummaryComponent {

  offenderData = {};
  private routeSubscriber: Subscription;

  /**
   *
   * @param {ActivatedRoute} activatedRoute
   * @param {HttpClient} http
   */
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
    // Update state with passed parameters
    this.routeSubscriber = this.activatedRoute.queryParams.subscribe(params => {

      if (params && Object.keys(params).length) {
        this.http.get('/assets/data/stub.json').subscribe((data) => {
          this.offenderData = data['offenders'][params.offender]['_source'];
        });
      }
    });
  }

}
