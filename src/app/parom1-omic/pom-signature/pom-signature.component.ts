import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { getPomSignature } from './reducer/pom-signature.reducer';
import { prisonsAndYoungOffenderInstitutions } from '../_shared/model/default-data';

import { IPomSignature } from './model/pom-signature.model';
import { UpdatePomSignatureAction } from './action/pom-signature.action';

@Component({
  selector: 'app-signature',
  templateUrl: './pom-signature.component.html'
})
export class PomSignatureComponent extends BaseComponent {

  /**
   *
   * @type {Array<string>}
   */
  prisonsAndYoungOffenderInstitutions = prisonsAndYoungOffenderInstitutions();

  /**
   *
   * @type {IPomSignature}
   */
  private reportData: IPomSignature;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {DatePipe} datePipe
   * @param {Store<IPomSignature>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private datePipe: DatePipe, private store: Store<IPomSignature>) {
    super();
    this.stateSubscriber = store.select(getPomSignature).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   * @param {IPomSignature} value
   */
  saveContent({ value }: { value: IPomSignature }) {
    const updatedValue = Object.assign(value, {
      saved: true,
      valid: this.reportForm.valid,
      reportDate: (<HTMLInputElement>document.getElementById('reportDate')).value,
      prison: (<HTMLInputElement>document.getElementById('prison')).value.trim()
    });
    this.store.dispatch(new UpdatePomSignatureAction(updatedValue));
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
      prison: [this.reportData.prison, Validators.required],
      counterSignature: this.reportData.counterSignature,
      counterSignatureRole: this.reportData.counterSignatureRole,
      reportDate: this.reportData.reportDate || this.datePipe.transform(Date.now(), 'dd/MM/yyyy')
    });
  }

}
