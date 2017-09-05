import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { getCurrentState, IState } from '../_shared/reducer/state.reducers';

import { Subscription } from 'rxjs/Subscription';

interface ISection {
  route: string;
  label: string;
  state: string;
  saved?: boolean;
  valid?: boolean;
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
      state: 'offenderDetails'
    },
    {
      route: '/court-details',
      label: 'Sentencing court details',
      state: 'courtDetails'
    },
    {
      route: '/information-sources',
      label: 'Sources of information',
      state: 'informationSources'
    },
    {
      route: '/offence-details',
      label: 'Offence details',
      state: 'offenceDetails'
    },
    {
      route: '/offence-analysis',
      label: 'Offence analysis',
      state: 'offenceAnalysis'
    },
    {
      route: '/offender-assessment',
      label: 'Offender assessment',
      state: 'offenderAssessment'
    },
    {
      route: '/risk-assessment',
      label: 'Risk assessment',
      state: 'riskAssessment'
    },
    {
      route: '/proposed-sentence',
      label: 'Conclusion',
      state: 'proposedSentence'
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
        Object.assign(item, { saved: state[item.state].saved, valid: state[item.state].valid });
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
