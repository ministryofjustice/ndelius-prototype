import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { IDateOfBirth, IOffenderDetails } from './model/offender-details.model';
import { UpdateOffenderDetailsAction } from './action/offender-details.action';

import { getOffenderDetails } from './reducer/offender-details.reducer';

@Component({
  selector: 'app-offender-details',
  templateUrl: './offender-details.component.html'
})
export class OffenderDetailsComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IOffenderDetails;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IOffenderDetails>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IOffenderDetails>) {
    super();
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
   * @param {IOffenderDetails} value
   */
  saveContent({ value }: { value: IOffenderDetails }) {
    const updatedValue = Object.assign(value, {
      saved: true,
      valid: this.reportForm.valid,
      age: OffenderDetailsComponent.getAge(value.dateOfBirth)
    });
    this.store.dispatch(new UpdateOffenderDetailsAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['psr-addendum/court-details']);
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
        year: [this.reportData.dateOfBirth.year, Validators.required]
      }),
      age: this.reportData.age,
      crn: this.reportData.crn,
      pnc: this.reportData.pnc
    });
  }

}
