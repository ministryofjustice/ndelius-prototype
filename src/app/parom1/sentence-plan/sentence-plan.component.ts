import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdateSentencePlanAction } from './action/sentence-plan.action';
import { ISentencePlan } from './model/sentence-plan.model';

import { getSentencePlan } from './reducer/sentence-plan.reducer';

@Component({
  selector: 'app-sentence-plan',
  templateUrl: './sentence-plan.component.html'
})
export class SentencePlanComponent extends BaseComponent {

  /**
   *
   */
  private reportData: ISentencePlan;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<ISentencePlan>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<ISentencePlan>) {
    super();
    this.stateSubscriber = store.select(getSentencePlan).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
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
   */
  protected continueJourney() {
    this.router.navigate(['parom1/mappa']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      sentencePlanObjectives: [this.reportData.sentencePlanObjectives, Validators.required]
    });
  }

}
