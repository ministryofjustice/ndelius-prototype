import { OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Subscription } from 'rxjs/index';

export class BaseComponent implements OnDestroy {

  /**
   *
   */
  reportForm: FormGroup;

  /**
   *
   */
  formError: boolean;
  /**
   *
   */
  protected stateSubscriber: Subscription;

  /**
   *
   */
  saveContent({ value }: { value: any }) {
    throw new Error('Component must override saveContent function.');
  }

  /**
   *
   * @param {boolean} valid
   * @param {any} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: any }) {
    this.formError = !valid;
    this.saveContent({ value });
    if (valid) {
      this.continueJourney();
    } else {
      window.scrollTo(0, 0);
    }
  }

  /**
   *
   */
  ngOnDestroy() {
    this.stateSubscriber.unsubscribe();
  }

  /**
   *
   */
  protected continueJourney() {
    throw new Error('Component must override continueJourney function.');
  }
}
