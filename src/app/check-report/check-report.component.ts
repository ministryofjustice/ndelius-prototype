import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { getCurrentState, IState } from '../_shared/reducer/state.reducers';

import { Subscription } from 'rxjs/Subscription';

interface ISection {
  route: string;
  label: string;
  state: string;
  saved: boolean;
}

@Component({
  selector: 'app-check-report',
  templateUrl: './check-report.component.html'
})
export class CheckReportComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  sections: Array<ISection> = [
    {
      route: '/offender-details',
      label: 'Offender details',
      state: 'offenderDetails',
      saved: void 0
    },
    {
      route: '/court-details',
      label: 'Sentencing court details',
      state: 'courtDetails',
      saved: void 0
    },
    {
      route: '/information-sources',
      label: 'Sources of information',
      state: 'informationSources',
      saved: void 0
    },
    {
      route: '/offence-details',
      label: 'Offence details',
      state: 'offenceDetails',
      saved: void 0
    },
    {
      route: '/offence-analysis',
      label: 'Offence analysis',
      state: 'offenceAnalysis',
      saved: void 0
    },
    {
      route: '/offender-assessment',
      label: 'Offender assessment',
      state: 'offenderAssessment',
      saved: void 0
    },
    {
      route: '/risk-assessment',
      label: 'Risk assessment',
      state: 'riskAssessment',
      saved: void 0
    },
    {
      route: '/proposed-sentence',
      label: 'Conclusion',
      state: 'proposedSentence',
      saved: void 0
    },
  ];

  /**
   * @constructor
   * @param {Router} router
   * @param {Store<IState>} store
   */
  constructor(private router: Router, private store: Store<IState>) {
    this.stateSubscriber = store.select(getCurrentState).subscribe(state => {
      this.sections.forEach((item) => {
        item.saved = state[item.state].saved;
      });
    });
  }

  /**
   *
   */
  signReport() {
    this.router.navigate(['signature']);
  }

  /**
   *
   */
  ngOnDestroy() {
    this.stateSubscriber.unsubscribe();
  }

}
