import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IState } from '../_shared/reducer/state.reducers';
import { ResetStateAction } from '../../_shared/action/reset-state.action';

/**
 * Report complete component
 */
@Component({
  selector: 'app-report-complete',
  templateUrl: './report-complete.component.html'
})
export class ReportCompleteComponent implements OnInit {

  /**
   * @constructor
   * @param {Store<IState>} store Main ngrx/store
   */
  constructor(private store: Store<IState>) {
    // Empty
  }

  /**
   * Dispatch store action to reset the state.
   */
  ngOnInit() {
    this.store.dispatch(new ResetStateAction());
  }

}
