import { AfterViewInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { nodeListForEach } from 'govuk-frontend/common';
import Accordion from 'govuk-frontend/components/accordion/accordion';

import { Subscription } from 'rxjs/index';

@Component({
  selector: 'app-offender-summary',
  templateUrl: './offender-summary.component.html'
})
export class OffenderSummaryComponent implements AfterViewInit {

  offenderData: any;
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
          this.offenderData = data['offenders'][params.offender]['_source'] || {};
        });
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const $accordions = document.querySelectorAll('[data-module="accordion"]');
      nodeListForEach($accordions, function ($accordion) {
        new Accordion($accordion).init();
      });
    });
  }
}
