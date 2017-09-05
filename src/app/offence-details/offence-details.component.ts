import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { getOffenceDetails } from './reducer/offence-details.reducer';

import { IOffenceDetails } from './model/offence-details.model';
import { UpdateOffenceDetailsAction } from './action/offence-details.action';

@Component({
  selector: 'app-offence-details',
  templateUrl: './offence-details.component.html'
})
export class OffenceDetailsComponent {

  reportData: IOffenceDetails;
  reportForm: FormGroup;
  formError: boolean;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IOffenceDetails>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IOffenceDetails>) {
    store.select(getOffenceDetails).subscribe(data => {
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
    this.router.navigate(['offence-analysis']);
  }

  /**
   *
   */
  saveContent({ value }: { value: IOffenceDetails }) {
    this.store.dispatch(new UpdateOffenceDetailsAction(value));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IOffenceDetails} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IOffenceDetails }) {
    this.formError = !valid;
    if (valid) {
      value.saved = true;
      this.store.dispatch(new UpdateOffenceDetailsAction(value));
      this.continueJourney();
    }
  }

}
