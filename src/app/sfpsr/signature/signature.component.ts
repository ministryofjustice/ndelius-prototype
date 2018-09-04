import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { getSignature } from './reducer/signature.reducer';

import { ISignature } from './model/signature.model';
import { UpdateSignatureAction } from './action/signature.action';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html'
})
export class SignatureComponent extends BaseComponent {

  /**
   *
   */
  private reportData: ISignature;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {DatePipe} datePipe
   * @param {Store<ISignature>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private datePipe: DatePipe, private store: Store<ISignature>) {
    super();
    this.stateSubscriber = store.select(getSignature).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   */
  saveContent({ value }: { value: ISignature }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateSignatureAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['sfpsr/report-complete']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      reportAuthor: [this.reportData.reportAuthor, Validators.required],
      office: [this.reportData.office, Validators.required],
      phone: [this.reportData.phone, Validators.required],
      counterSignature: this.reportData.counterSignature,
      startDate: this.reportData.startDate || this.datePipe.transform(Date.now(), 'dd/MM/yyyy'),
      reportDate: this.formBuilder.group({
        day: [this.reportData.reportDate.day || new Date().getDate(), Validators.required],
        month: [this.reportData.reportDate.month || new Date().getMonth() + 1, Validators.required],
        year: [this.reportData.reportDate.year || new Date().getFullYear(), Validators.required]
      })
    });
  }

}
