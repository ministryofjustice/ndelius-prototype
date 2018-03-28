import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { getPrisonerDetails } from './reducer/prisoner-details.reducer';

import { IPrisonerDetails } from './model/prisoner-details.model';
import { UpdatePrisonerDetailsAction } from './action/prisoner-details.action';

import { prisonsAndYoungOffenderInstitutions } from '../_shared/model/default-data';

@Component({
  selector: 'app-prisoner-details',
  templateUrl: './prisoner-details.component.html'
})
export class PrisonerDetailsComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IPrisonerDetails;
  reportForm: FormGroup;
  formError: boolean;
  prisonsAndYoungOffenderInstitutions = prisonsAndYoungOffenderInstitutions();

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerDetails>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IPrisonerDetails>) {
    this.stateSubscriber = store.select(getPrisonerDetails).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
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
      sentence: [this.reportData.sentence, Validators.required],
      sentenceType: [this.reportData.sentenceType, Validators.required],
      determinateReleaseDate: this.formBuilder.group({
        day: [this.reportData.determinateReleaseDate.day, Validators.required],
        month: [this.reportData.determinateReleaseDate.month, Validators.required],
        year: [this.reportData.determinateReleaseDate.year, Validators.required],
      })
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1-omic/court-details']);
  }

  /**
   *
   */
  saveDraft() {
    this.router.navigate(['parom1-omic/save-draft']);
  }

  /**
   *
   * @param {boolean} valid
   * @param {IPrisonerDetails} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IPrisonerDetails }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid,
      prison: (<HTMLInputElement>document.getElementById('prison')).value, });

    this.store.dispatch(new UpdatePrisonerDetailsAction(updatedValue));

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
