import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { getOffenderDetails } from './reducer/offender-details.reducer';

import { IDateOfBirth, IOffenderDetails } from './model/offender-details.model';
import { UpdateOffenderDetailsAction } from './action/offender-details.action';

@Component({
  selector: 'app-offender-details',
  templateUrl: './offender-details.component.html'
})
export class OffenderDetailsComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IOffenderDetails;
  reportForm: FormGroup;
  formError: boolean;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IOffenderDetails>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IOffenderDetails>) {
    this.stateSubscriber = store.select(getOffenderDetails).subscribe(data => {
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
      name: [this.reportData.name, Validators.required],
      address: [this.reportData.address, Validators.required],
      phone: [this.reportData.phone, Validators.required],
      dateOfBirth: this.formBuilder.group({
        day: [this.reportData.dateOfBirth.day, Validators.required],
        month: [this.reportData.dateOfBirth.month, Validators.required],
        year: [this.reportData.dateOfBirth.year, Validators.required],
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
    this.router.navigate(['sfpsr/court-details']);
  }

  /**
   *
   * @param {boolean} valid
   * @param {IOffenderDetails} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IOffenderDetails }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid, age: OffenderDetailsComponent.getAge(value.dateOfBirth) });
    this.store.dispatch(new UpdateOffenderDetailsAction(updatedValue));

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

}
