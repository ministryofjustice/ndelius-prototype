import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { IState } from '../../sfpsr/_shared/reducer/state.reducers';
import { ResetStateAction } from '../../_shared/action/reset-state.action';

/**
 * Report complete component
 */
@Component({
  selector: 'app-report-complete',
  templateUrl: './report-complete.component.html'
})
export class ReportCompleteComponent {

  /**
   * @constructor
   * @param {Router} router
   * @param {Store<IState>} store
   */
  constructor(private router: Router, private store: Store<IState>) {
    // Empty
  }

  /**
   *
   */
  startOver() {
    this.router.navigate(['psr-addendum/offender-details']);
  }

  /**
   * Dispatch store action to reset the state.
   */
  close() {
    this.store.dispatch(new ResetStateAction());
    this.router.navigate(['/']);
  }
}
