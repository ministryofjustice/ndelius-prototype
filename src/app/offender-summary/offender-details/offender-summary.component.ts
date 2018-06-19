import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/index';

@Component({
  selector: 'app-offender-summary',
  templateUrl: './offender-summary.component.html'
})
export class OffenderSummaryComponent implements OnInit, OnDestroy {

  offenderData: object;
  private routeSubscriber: Subscription;

  /**
   * @constructor
   * @param {ActivatedRoute} activatedRoute
   */
  constructor(private activatedRoute: ActivatedRoute) {
    // Empty
  }

  /**
   *
   */
  ngOnInit() {
    this.routeSubscriber = this.activatedRoute.queryParams.subscribe(params => {
      if (params && Object.keys(params).length) {
        this.offenderData = params;
      }
    });
  }

  /**
   *
   */
  ngOnDestroy() {
    this.routeSubscriber.unsubscribe();
  }

}
