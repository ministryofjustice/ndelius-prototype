import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { getPomSignature } from './reducer/pom-signature.reducer';

import { IPomSignature } from './model/pom-signature.model';
import { UpdatePomSignatureAction } from './action/pom-signature.action';
import { prisonsAndYoungOffenderInstitutions } from '../_shared/model/default-data';

@Component({
  selector: 'app-signature',
  templateUrl: './pom-signature.component.html'
})
export class PomSignatureComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IPomSignature;
  reportForm: FormGroup;
  formError: boolean;
  prisonsAndYoungOffenderInstitutions = prisonsAndYoungOffenderInstitutions();

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {DatePipe} datePipe
   * @param {Store<IPomSignature>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private datePipe: DatePipe, private store: Store<IPomSignature>) {
    this.stateSubscriber = store.select(getPomSignature).subscribe(state => {
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
      prison: [this.reportData.prison, Validators.required],
      counterSignature: this.reportData.counterSignature,
      counterSignatureRole: this.reportData.counterSignatureRole,
      startDate: this.reportData.startDate || this.datePipe.transform(Date.now(), 'dd/MM/yyyy'),
      reportDate: this.reportData.reportDate || this.datePipe.transform(Date.now(), 'dd/MM/yyyy')
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1-omic/report-complete']);
  }

  /**
   *
   * @param {boolean} valid
   * @param {IPomSignature} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IPomSignature }) {
    this.formError = !valid;

    // @TODO: Can this be fixed or is this an inherent issue within the jQuery based date picker?
    const updatedValue = Object.assign(value, {
      saved: true,
      valid: valid,
      reportDate: (<HTMLInputElement>document.getElementById('reportDate')).value,
      prison: (<HTMLInputElement>document.getElementById('prison')).value.trim()
    });
    this.store.dispatch(new UpdatePomSignatureAction(updatedValue));

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
