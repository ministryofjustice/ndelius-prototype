import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { ResetStateAction } from '../../_shared/action/reset-state.action';
import { IState } from '../_shared/reducer/state.reducers';

/**
 * Save draft component
 */
@Component({
  selector: 'app-save-draft',
  templateUrl: './save-draft.component.html'
})
export class SaveDraftComponent {

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
  generatePdf() {

  }

  /**
   *
   */
  startOver() {
    this.router.navigate(['parom1/check-report']);
  }

  /**
   * Dispatch store action to reset the state.
   */
  close() {
    this.store.dispatch(new ResetStateAction());
    this.router.navigate(['/']);
  }
}
