import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AgePipe } from '../../_shared/pipe/age.pipe';
import { BaseComponent } from '../../_shared/components/base.component';

import { IOffenderDetails } from './model/offender-details.model';
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
   * @param {AgePipe} agePipe
   * @param {Store<IOffenderDetails>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private agePipe: AgePipe, private store: Store<IOffenderDetails>) {
    super();
    this.stateSubscriber = store.select(getOffenderDetails).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   * @param {IOffenderDetails} value
   */
  saveContent({ value }: { value: IOffenderDetails }) {
    const updatedValue = Object.assign(value, {
      saved: true,
      valid: this.reportForm.valid,
      age: this.agePipe.transform(value.dateOfBirth)
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
