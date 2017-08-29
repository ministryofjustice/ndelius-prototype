import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { IOffenceDetails } from './model/offence-details.model';
import { getOffenceDetails } from './reducer/offence-details.reducer';
import { UpdateOffenceDetailsAction } from './action/offence-details.action';

@Component({
  selector: 'app-offence-details',
  templateUrl: './offence-details.component.html'
})
export class OffenceDetailsComponent {

  reportData: IOffenceDetails;
  reportForm: FormGroup;
  formError: Boolean;

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
      mainOffence: this.reportData.mainOffence,
      otherOffence: this.reportData.otherOffence,
      offenceSummary: this.reportData.offenceSummary
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
   * @param {boolean} valid
   * @param {IOffenceDetails} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IOffenceDetails }) {
    this.formError = !valid;
    if (valid) {
      this.store.dispatch(new UpdateOffenceDetailsAction(value));
      this.continueJourney();
    }
  }

}
