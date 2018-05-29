import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { getOffenceDetails } from './reducer/offence-details.reducer';

import { IOffenceDetails } from './model/offence-details.model';
import { UpdateOffenceDetailsAction } from './action/offence-details.action';

@Component({
  selector: 'app-offence-details',
  templateUrl: './offence-details.component.html'
})
export class OffenceDetailsComponent implements AfterViewInit, OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IOffenceDetails;
  reportForm: FormGroup;
  formError: boolean;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IOffenceDetails>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IOffenceDetails>) {
    this.stateSubscriber = store.select(getOffenceDetails).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      mainOffence: [this.reportData.mainOffence, Validators.required],
      otherOffence: this.reportData.otherOffence,
      offenceSummary: [this.reportData.offenceSummary, Validators.required]
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['sfpsr/offence-analysis']);
  }

  /**
   *
   */
  saveContent({ value }: { value: IOffenceDetails }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateOffenceDetailsAction(updatedValue));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IOffenceDetails} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IOffenceDetails }) {
    this.formError = !valid;

    this.saveContent({ value: value });

    if (valid) {
      this.continueJourney();
    } else {
      window.scrollTo(0, 0);
    }
  }

  /**
   *
   */
  ngAfterViewInit() {
    if (this.stateSubscriber) {
      this.stateSubscriber.unsubscribe();
    }
    this.saveContent({ value: this.reportData });
  }

  /**
   *
   */
  ngOnDestroy() {
    this.stateSubscriber.unsubscribe();
  }

}
