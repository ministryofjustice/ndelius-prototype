import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { IOffenderDetails } from '../offender-details/model/offender-details.model';
import { ICourtDetails } from '../court-details/model/court-details.model';
import { UpdateOffenderDetailsAction } from '../offender-details/action/offender-details.action';
import { UpdateCourtDetailsAction } from '../court-details/action/court-details.action';

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
   * @returns {string}
   */
  private today(): string {
    function zero(num): string {
      return num < 10 ? '0' + num : num.toString();
    }
    const date: Date = new Date();
    return zero(date.getDate()) + '/' + zero(date.getMonth() + 1) + '/' + date.getFullYear();
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
          phone: params['phone'],
          dateOfBirth: {
            day: params['dobDay'],
            month: params['dobMonth'],
            year: params['dobYear']
          },
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
          hearingDate: this.today(),
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
