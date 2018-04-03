import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { IPrisonerDetails } from '../prisoner-details/model/prisoner-details.model';
import { UpdatePrisonerDetailsAction } from '../prisoner-details/action/prisoner-details.action';

@Component({
  selector: 'app-start-report',
  templateUrl: './start-report.component.html'
})
export class StartReportComponent implements OnInit, OnDestroy {

  private routeSubscriber: Subscription;

  /**
   * @constructor
   * @param {ActivatedRoute} activatedRoute
   * @param {Router} router
   * @param {Store<IPrisonerDetails>} store
   */
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private store: Store<IPrisonerDetails>) {
    // Empty
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1-omic/prisoner-details']);
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
        this.store.dispatch(new UpdatePrisonerDetailsAction({
          prison: params['prison'],
          name: params['name'],
          prisonNumber: params['prisonNumber'],
          nomisNumber: params['nomisNumber'],
          gender: params['gender'],
          category: params['category'],
          sentence: params['sentence'],
          sentenceType: params['sentenceType'],
          determinateReleaseDate: {
            day: params['determinateReleaseDateDay'],
            month: params['determinateReleaseDateMonth'],
            year: params['determinateReleaseDateYear']
          },
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
