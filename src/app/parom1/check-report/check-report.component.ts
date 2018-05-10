import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { getCurrentState, IState } from '../_shared/reducer/state.reducers';

import { ISection, sections } from '../_shared/model/sections';

@Component({
  selector: 'app-check-report',
  templateUrl: './check-report.component.html'
})
export class CheckReportComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  currentState: IState;
  isValid = true;
  sections: Array<ISection> = sections();

  /**
   * @constructor
   * @param {Router} router
   * @param {Store<IState>} store
   */
  constructor(private router: Router, private store: Store<IState>) {
    this.stateSubscriber = store.select(getCurrentState).subscribe(currentState => {
      this.currentState = currentState;
      this.sections.forEach((item) => {
        const model = currentState[item.state];
        Object.assign(item, { saved: model.saved, valid: model.valid });
        if (!model.valid && !item.dataOnly) {
          this.isValid = false;
        }
      });
    });
  }

  /**
   *
   */
  continueJourney() {
    this.router.navigate(['parom1/signature']);
  }

  /**
   *
   */
  ngOnDestroy() {
    this.stateSubscriber.unsubscribe();
  }

}
