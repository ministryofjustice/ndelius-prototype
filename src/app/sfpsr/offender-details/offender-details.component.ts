import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AgePipe } from '../../_shared/pipe/age.pipe';
import { BaseComponent } from '../../_shared/components/base.component';

import { getOffenderDetails } from './reducer/offender-details.reducer';

import { IOffenderDetails } from './model/offender-details.model';
import { UpdateOffenderDetailsAction } from './action/offender-details.action';

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
    this.router.navigate(['sfpsr/court-details']);
  }

  /**
   *
   */
  private createForm() {

    function zero(num: number): string {
      return ('0' + num).slice(-2);
    }

    this.reportForm = this.formBuilder.group({
      name: this.reportData.name,
      address: this.reportData.address,
      phone: this.reportData.phone,
      dateOfBirth: zero(this.reportData.dateOfBirth.day) + '/' +
        zero(this.reportData.dateOfBirth.month) + '/' +
        this.reportData.dateOfBirth.year,
      age: this.reportData.age,
      crn: this.reportData.crn,
      pnc: this.reportData.pnc
    });
  }

}
