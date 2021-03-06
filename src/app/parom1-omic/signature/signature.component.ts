import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';

import { getSignature } from './reducer/signature.reducer';

import { ISignature } from './model/signature.model';
import { UpdateSignatureAction } from './action/signature.action';
import { BaseComponent } from '../../_shared/components/base.component';

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
   * @param {ISignature} value
   */
  saveContent({ value }: { value: ISignature }) {
    const updatedValue = Object.assign(value, {
      saved: true,
      valid: this.reportForm.valid,
      reportDate: (<HTMLInputElement>document.getElementById('reportDate')).value
    });
    this.store.dispatch(new UpdateSignatureAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['parom1-omic/report-complete']);
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
      reportDate: [this.reportData.reportDate || this.datePipe.transform(Date.now(), 'dd/MM/yyyy'), Validators.required]
    });
  }

}
