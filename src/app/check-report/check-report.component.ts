import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { getCurrentState, IState } from '../_shared/reducer/state.reducers';

import { CheckReportService } from './check-report.service';

interface ISection {
  route: string;
  label: string;
  state: string;
  interactions?: Array<Object>;
  saved?: boolean;
  valid?: boolean;
}

@Component({
  selector: 'app-check-report',
  templateUrl: './check-report.component.html'
})
export class CheckReportComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  currentState: IState;
  isValid = true;

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
   * @param {CheckReportService} service
   */
  constructor(private router: Router, private store: Store<IState>, private service: CheckReportService) {
    this.stateSubscriber = store.select(getCurrentState).subscribe(currentState => {
      this.currentState = currentState;
      this.sections.forEach((item) => {
        const model = currentState[item.state];
        Object.assign(item, { interactions: service.configureItems(item.state, model), saved: model.saved, valid: model.valid });
        if (!model.valid) {
          this.isValid = false;
        }
      });
    });
  }

  /**
   *
   */
  signReport() {
    if (this.isValid) {
      this.router.navigate(['signature']);
    }
  }

  /**
   *
   */
  ngOnDestroy() {
    this.stateSubscriber.unsubscribe();
  }

}
