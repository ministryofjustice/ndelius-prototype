import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-start-report',
  templateUrl: './start-report.component.html'
})
export class StartReportComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  /**
   *
   * @param {ActivatedRoute} activatedRoute
   * @param {Router} router
   */
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    // Empty
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['offender-details']);
  }

  /**
   *
   */
  startReport() {
    this.continueJourney();
  }

  /**
   *
   */
  ngOnInit() {
    this.sub = this.activatedRoute.queryParams.subscribe(params => {
      if (params && Object.keys(params).length) {
        console['info']('Received data:', params);
      }
    });
  }

  /**
   *
   */
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
