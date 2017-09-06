import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getCurrentState } from '../_shared/reducer/state.reducers';

interface ISection {
  route: string;
  label: string;
  state: string;
  saved?: boolean;
}

@Component({
  selector: 'app-check-report',
  templateUrl: './check-report.component.html'
})
export class CheckReportComponent {

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
   * @param {Store} store
   */
  constructor(private router: Router, private store: Store<any>) {
    store.select(getCurrentState).subscribe(state => {
      this.sections.forEach((item) => {
        Object.assign(item, { saved: state[item.state].saved });
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
