import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { getCurrentState, IState } from '../_shared/reducer/state.reducers';
import { UpdatePrisonerDetailsAction } from '../prisoner-details/action/prisoner-details.action';

@Component({
  selector: 'app-start-report',
  templateUrl: './start-report.component.html'
})
export class StartReportComponent implements OnInit, OnDestroy {

  private stateSubscriber: Subscription;
  private routeSubscriber: Subscription;

  public reportData: IState;

  /**
   *
   * @param {ActivatedRoute} activatedRoute
   * @param {Router} router
   * @param {Store<IPrisonerDetails>} store
   */
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private store: Store<IState>) {
    this.stateSubscriber = store.select(getCurrentState).subscribe(data => {
      this.reportData = data;
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1/prisoner-details']);
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

    // Get current state
    const data = this.reportData.prisonerDetails;

    // Update state with passed parameters if no data in the current state
    this.routeSubscriber = this.activatedRoute.queryParams.subscribe(params => {
      if (params && Object.keys(params).length) {
        console['info']('Received data:', params);

        this.store.dispatch(new UpdatePrisonerDetailsAction({
          prisonImage: params['prisonImage'],
          prison: params['prison'] || data.prison,
          name: params['name'] || data.name,
          prisonNumber: params['prisonNumber'] || data.prisonNumber,
          nomisNumber: params['nomisNumber'],
          gender: params['gender'] || data.gender,
          category: params['category'] || data.category,
          offence: params['offence'] || data.offence,
          sentence: params['sentence'] || data.sentence,
          sentenceType: params['sentenceType'] || data.sentenceType,
          determinateEligibilityDate: {
            day: params['determinateEligibilityDateDay'] || data.determinateEligibilityDate.day,
            month: params['determinateEligibilityDateMonth'] || data.determinateEligibilityDate.month,
            year: params['determinateEligibilityDateYear'] || data.determinateEligibilityDate.year
          },
          determinateReleaseDate: {
            day: params['determinateReleaseDateDay'] || data.determinateReleaseDate.day,
            month: params['determinateReleaseDateMonth'] || data.determinateReleaseDate.month,
            year: params['determinateReleaseDateYear'] || data.determinateReleaseDate.year
          },
          tariffLength: data.tariffLength || params['tariffLength'],
          tariffExpiryDate: {
            day: params['tariffExpiryDateDate'] || data.tariffExpiryDate.day,
            month: params['tariffExpiryDateMonth'] || data.tariffExpiryDate.month,
            year: params['tariffExpiryDateYear'] || data.tariffExpiryDate.year
          },
          saved: true,
          valid: false
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
