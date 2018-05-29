import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { UpdateSentencePlanAction } from './action/sentence-plan.action';
import { ISentencePlan } from './model/sentence-plan.model';

import { getSentencePlan } from './reducer/sentence-plan.reducer';

@Component({
  selector: 'app-sentence-plan',
  templateUrl: './sentence-plan.component.html'
})
export class SentencePlanComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: ISentencePlan;
  reportForm: FormGroup;
  formError: boolean;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<ISentencePlan>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<ISentencePlan>) {
    this.stateSubscriber = store.select(getSentencePlan).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      sentencePlanObjectives: [this.reportData.sentencePlanObjectives, Validators.required]
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1-omic/mappa']);
  }

  /**
   *
   */
  saveContent({ value }: { value: ISentencePlan }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateSentencePlanAction(updatedValue));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IPrisonerRelationship} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: ISentencePlan }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid });

    this.store.dispatch(new UpdateSentencePlanAction(updatedValue));

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
