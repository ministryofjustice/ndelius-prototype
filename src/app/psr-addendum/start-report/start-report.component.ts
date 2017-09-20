import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { IOffenderDetails } from '../../sfpsr/offender-details/model/offender-details.model';
import { ICourtDetails } from '../../sfpsr/court-details/model/court-details.model';
import { UpdateOffenderDetailsAction } from '../../sfpsr/offender-details/action/offender-details.action';
import { UpdateCourtDetailsAction } from '../../sfpsr/court-details/action/court-details.action';

@Component({
  selector: 'app-start-report',
  templateUrl: './start-report.component.html'
})
export class StartReportComponent implements OnInit, OnDestroy {

  private routeSubscriber: Subscription;

  /**
   *
   * @param {ActivatedRoute} activatedRoute
   * @param {Router} router
   * @param {Store} store
   */
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private store: Store<IOffenderDetails | ICourtDetails>) {
    // Empty
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['psr-addendum/offender-details']);
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

    // Update state with passed parameters
    this.routeSubscriber = this.activatedRoute.queryParams.subscribe(params => {
      if (params && Object.keys(params).length) {
        console['info']('Received data:', params);

        // @TODO: Error checking around this
        this.store.dispatch(new UpdateOffenderDetailsAction({
          name: params['name'],
          address: params['address'],
          dateOfBirth: params['dateOfBirth'],
          age: params['age'],
          crn: params['crn'],
          pnc: params['pnc'] || void 0,
          saved: true,
          valid: true
        }));

        // @TODO: Error checking around this
        this.store.dispatch(new UpdateCourtDetailsAction({
          court: params['court'],
          localJusticeArea: params['localJusticeArea'],
          hearingDate: params['hearingDate'],
          saved: true,
          valid: true
        }));
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
