import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { ResetStateAction } from '../../_shared/action/reset-state.action';

import { IState } from '../_shared/reducer/state.reducers';

/**
 * Save draft component
 */
@Component({
  selector: 'app-report-complete',
  templateUrl: './report-complete.component.html'
})
export class ReportCompleteComponent {

  constructor(private router: Router, private store: Store<IState>) {
    // Empty
  }

  startOver() {
    this.router.navigate(['parom1-omic/check-report']);
  }

  /**
   * Dispatch store action to reset the state.
   */
  ngOnInit() {
    this.store.dispatch(new ResetStateAction());
  }
}
