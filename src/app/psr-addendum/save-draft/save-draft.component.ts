import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IState } from '../../sfpsr/_shared/reducer/state.reducers';
import { ResetStateAction } from '../../_shared/action/reset-state.action';

/**
 * Save draft component
 */
@Component({
  selector: 'app-save-draft',
  templateUrl: './save-draft.component.html'
})
export class SaveDraftComponent implements OnInit {

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
