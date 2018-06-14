import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { getPrisonerDetails } from './reducer/prisoner-details.reducer';

import { IPrisonerDetails } from './model/prisoner-details.model';
import { UpdatePrisonerDetailsAction } from './action/prisoner-details.action';

import { prisonsAndYoungOffenderInstitutions } from '../_shared/model/default-data';

@Component({
  selector: 'app-prisoner-details',
  templateUrl: './prisoner-details.component.html'
})
export class PrisonerDetailsComponent extends BaseComponent {

  /**
   *
   * @type {Array<string>}
   */
  prisonsAndYoungOffenderInstitutions = prisonsAndYoungOffenderInstitutions();

  /**
   *
   */
  private reportData: IPrisonerDetails;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerDetails>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IPrisonerDetails>) {
    super();
    this.stateSubscriber = store.select(getPrisonerDetails).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   * @param {IPrisonerDetails} value
   */
  saveContent({ value }: { value: IPrisonerDetails }) {
    const updatedValue = Object.assign(value, {
      saved: true,
      valid: this.reportForm.valid,
      prison: (<HTMLInputElement>document.getElementById('prison')).value.trim()
    });
    this.store.dispatch(new UpdatePrisonerDetailsAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['parom1/prisoner-contact']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      prison: [this.reportData.prison, Validators.required],
      name: [this.reportData.name, Validators.required],
      prisonNumber: [this.reportData.prisonNumber, Validators.required],
      nomisNumber: [this.reportData.nomisNumber, Validators.required],
      category: [this.reportData.category, Validators.required],
      offence: [this.reportData.offence, Validators.required],
      sentence: [this.reportData.sentence, Validators.required],
      sentenceType: [this.reportData.sentenceType, Validators.required],
      determinateEligibilityDate: this.formBuilder.group({
        day: this.reportData.determinateEligibilityDate.day,
        month: this.reportData.determinateEligibilityDate.month,
        year: this.reportData.determinateEligibilityDate.year
      }),
      determinateReleaseDate: this.formBuilder.group({
        day: this.reportData.determinateReleaseDate.day,
        month: this.reportData.determinateReleaseDate.month,
        year: this.reportData.determinateReleaseDate.year
      }),
      tariffLength: [this.reportData.tariffLength],
      tariffExpiryDate: this.formBuilder.group({
        day: this.reportData.tariffExpiryDate.day,
        month: this.reportData.tariffExpiryDate.month,
        year: this.reportData.tariffExpiryDate.year
      })
    });
  }

}
