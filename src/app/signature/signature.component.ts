import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';

import { getSignature } from './reducer/signature.reducer';

import { ISignature } from './model/signature.model';
import { UpdateSignatureAction } from './action/signature.action';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html'
})
export class SignatureComponent {

  reportData: ISignature;
  reportForm: FormGroup;
  formError: Boolean;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {DatePipe} datePipe
   * @param {Store<ISignature>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private datePipe: DatePipe, private store: Store<ISignature>) {
    store.select(getSignature).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      reportAuthor: this.reportData.reportAuthor,
      office: this.reportData.office,
      reportDate: this.reportData.reportDate || this.datePipe.transform(Date.now(), 'dd/MM/yyyy')
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['report-complete']);
  }

  /**
   *
   * @param {any} valid
   * @param {any} value
   */
  onSubmit({ valid: valid, value: value }) {
    this.formError = !valid;

    if (valid) {
      // @TODO: Can this be fixed or is this an inherent issue within the jQuery based date picker?
      const submitData: ISignature = {
        reportAuthor: value.reportAuthor,
        office: value.office,
        reportDate: (<HTMLInputElement>document.getElementById('reportDate')).value
      };

      this.store.dispatch(new UpdateSignatureAction(submitData));
      this.continueJourney();
    }
  }

}
