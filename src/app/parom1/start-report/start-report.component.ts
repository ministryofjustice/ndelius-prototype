import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { getCurrentState, IState } from '../../parom1-omic/_shared/reducer/state.reducers';
import { UpdatePrisonerDetailsAction } from '../../parom1-omic/prisoner-details/action/prisoner-details.action';

@Component({
  selector: 'app-start-report',
  templateUrl: './start-report.component.html'
})
export class StartReportComponent implements OnInit, OnDestroy {

  private stateSubscriber: Subscription;
  private routeSubscriber: Subscription;
  private reportData: IState;

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
          prison: data.prison || params['prison'],
          name: data.name || params['name'],
          prisonNumber: data.prisonNumber || params['prisonNumber'],
          nomisNumber: data.nomisNumber || params['nomisNumber'],
          gender: data.gender || params['gender'],
          category: data.category || params['category'],
          sentence: data.sentence || params['sentence'],
          sentenceType: data.sentenceType || params['sentenceType'],
          determinateReleaseDate: {
            day: data.determinateReleaseDate.day || params['determinateReleaseDateDay'],
            month: data.determinateReleaseDate.month || params['determinateReleaseDateMonth'],
            year: data.determinateReleaseDate.year || params['determinateReleaseDateYear']
          },
          tariffLength: data.tariffLength || params['tariffLength'],
          tariffExpiryDate: {
            day: data.tariffExpiryDate.day || params['tariffExpiryDateDate'],
            month: data.tariffExpiryDate.month || params['tariffExpiryDateMonth'],
            year: data.tariffExpiryDate.year || params['tariffExpiryDateYear']
          },
          saved: true,
          valid: data.valid || false
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
