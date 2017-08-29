import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { getOffenderDetails } from './reducer/offender-details.reducer';

import { IDateOfBirth, IOffenderDetails } from './model/offender-details.model';
import { UpdateOffenderDetailsAction } from './action/offender-details.action';

@Component({
  selector: 'app-offender-details',
  templateUrl: './offender-details.component.html'
})
export class OffenderDetailsComponent {

  reportData: IOffenderDetails;
  reportForm: FormGroup;
  formError: Boolean;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IOffenderDetails>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IOffenderDetails>) {
    store.select(getOffenderDetails).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   * @param {IDateOfBirth} dateOfBirth
   * @returns {number}
   */
  private static getAge(dateOfBirth: IDateOfBirth): number {

    const dateString = dateOfBirth.month + '/' + dateOfBirth.day + '/' + dateOfBirth.year;
    const today = new Date();
    const birthDate = new Date(dateString);
    const m = today.getMonth() - birthDate.getMonth();

    let age = today.getFullYear() - birthDate.getFullYear();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      name: this.reportData.name,
      address: this.reportData.address,
      dateOfBirth: this.formBuilder.group({
        day: this.reportData.dateOfBirth.day,
        month: this.reportData.dateOfBirth.month,
        year: this.reportData.dateOfBirth.year,
      }),
      age: this.reportData.age,
      crn: this.reportData.crn,
      pnc: this.reportData.pnc
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['court-details']);
  }

  /**
   *
   * @param {boolean} valid
   * @param {IOffenderDetails} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IOffenderDetails }) {
    this.formError = !valid;
    if (valid) {

      const updatedValue = Object.assign(value, { age: OffenderDetailsComponent.getAge(value.dateOfBirth) });

      this.store.dispatch(new UpdateOffenderDetailsAction(updatedValue));
      this.continueJourney();
    }
  }

}
