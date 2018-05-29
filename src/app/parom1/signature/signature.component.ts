import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { getSignature } from './reducer/signature.reducer';

import { ISignature } from './model/signature.model';
import { UpdateSignatureAction } from './action/signature.action';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html'
})
export class SignatureComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: ISignature;
  reportForm: FormGroup;
  formError: boolean;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {DatePipe} datePipe
   * @param {Store<ISignature>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private datePipe: DatePipe, private store: Store<ISignature>) {
    this.stateSubscriber = store.select(getSignature).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      reportAuthor: [this.reportData.reportAuthor, Validators.required],
      address: [this.reportData.address, Validators.required],
      email: [this.reportData.email, Validators.required],
      phone: [this.reportData.phone, Validators.required],
      division: [this.reportData.division, Validators.required],
      counterSignature: this.reportData.counterSignature,
      counterSignatureRole: this.reportData.counterSignatureRole,
      startDate: this.reportData.startDate || this.datePipe.transform(Date.now(), 'dd/MM/yyyy'),
      reportDate: [this.reportData.reportDate || this.datePipe.transform(Date.now(), 'dd/MM/yyyy'), Validators.required]
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1/report-complete']);
  }

  /**
   *
   * @param {boolean} valid
   * @param {ISignature} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: ISignature }) {
    this.formError = !valid;

    // @TODO: Can this be fixed or is this an inherent issue within the jQuery based date picker?
    const updatedValue = Object.assign(value, {
      saved: true,
      valid: valid,
      reportDate: (<HTMLInputElement>document.getElementById('reportDate')).value
    });
    this.store.dispatch(new UpdateSignatureAction(updatedValue));

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
