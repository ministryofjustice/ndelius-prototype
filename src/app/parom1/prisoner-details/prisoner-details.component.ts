import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { select, Store } from '@ngrx/store';

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
    this.stateSubscriber = store.pipe(select(getPrisonerDetails)).subscribe(data => {
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
      name: this.reportData.name,
      nomisNumber: this.reportData.nomisNumber,
      prison: this.reportData.prison,
      prisonNumber: this.reportData.prisonNumber,
      category: this.reportData.category,
      offence: this.reportData.offence,
      sentence: this.reportData.sentence,
      indeterminateSentence: this.reportData.indeterminateSentence,
      sentenceType: this.reportData.sentenceType,
      determinateEligibilityDate: this.formBuilder.group({
        day: this.reportData.determinateEligibilityDate.day,
        month: this.reportData.determinateEligibilityDate.month,
        year: this.reportData.determinateEligibilityDate.year
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
