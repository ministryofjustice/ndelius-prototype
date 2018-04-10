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

  currentSelection = '';

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
   * @param {string} role
   */
  select(role: string) {
    window.scrollTo(0, 0);
    this.currentSelection = role;
  }

  /**
   *
   */
  startReport() {
    this.router.navigate([this.currentSelection === 'com' ? 'parom1-omic/prisoner-details' : 'parom1-omic/pom-prisoner-knowledge']);
  }

  /**
   *
   */
  ngOnInit() {
    // Update state with passed parameters
    this.routeSubscriber = this.activatedRoute.queryParams.subscribe(params => {
      if (params && Object.keys(params).length) {
        console['info']('Received data:', params);

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
          tariffLength: params['tariffLength'],
          tariffExpiryDate: {
            day: params['tariffExpiryDateDate'],
            month: params['tariffExpiryDateMonth'],
            year: params['tariffExpiryDateYear']
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
