import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getCurrentState } from '../_shared/reducer/state.reducers';

@Component({
  selector: 'app-check-report',
  templateUrl: './check-report.component.html'
})
export class CheckReportComponent {

  sections = [
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
   * @param {Store} store
   */
  constructor(private router: Router, private store: Store<any>) {
    store.select(getCurrentState).subscribe(state => {
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

}
