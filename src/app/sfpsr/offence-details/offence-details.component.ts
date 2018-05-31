import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { getOffenceDetails } from './reducer/offence-details.reducer';

import { IOffenceDetails } from './model/offence-details.model';
import { UpdateOffenceDetailsAction } from './action/offence-details.action';

@Component({
  selector: 'app-offence-details',
  templateUrl: './offence-details.component.html'
})
export class OffenceDetailsComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IOffenceDetails;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IOffenceDetails>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IOffenceDetails>) {
    super();
    this.stateSubscriber = store.select(getOffenceDetails).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   * @param {IOffenceDetails} value
   */
  saveContent({ value }: { value: IOffenceDetails }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateOffenceDetailsAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['sfpsr/offence-analysis']);
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
}
