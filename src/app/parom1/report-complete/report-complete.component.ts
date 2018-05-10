import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { ResetStateAction } from '../../_shared/action/reset-state.action';

import { getCurrentState, IState } from '../_shared/reducer/state.reducers';

/**
 * Save draft component
 */
@Component({
  selector: 'app-report-complete',
  templateUrl: './report-complete.component.html'
})
export class ReportCompleteComponent implements OnDestroy {

  private stateSubscriber: Subscription;
  private reportData: IState;

  /**
   * @constructor
   * @param {Router} router
   * @param {Store<IState>} store
   */
  constructor(private router: Router, private store: Store<IState>) {
    this.stateSubscriber = store.select(getCurrentState).subscribe(data => {
      this.reportData = data;
    });
  }

  /**
   *
   */
  generateReport() {
    console['info']('Generate PDF report from:', this.reportData);
  }

  /**
   *
   */
  startOver() {
    this.router.navigate(['parom1/check-report']);
  }

  /**
   *
   */
  close() {
    this.store.dispatch(new ResetStateAction());
    this.router.navigate(['/']);
  }

  /**
   *
   */
  ngOnDestroy() {
    this.stateSubscriber.unsubscribe();
  }
}
