import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { UpdatePomRecommendationAction } from './action/pom-recommendation.action';
import { IPomRecommendation } from './model/pom-recommendation.model';

import { getPomRecommendation } from './reducer/pom-recommendation.reducer';

@Component({
  selector: 'app-pom-recommendation',
  templateUrl: './pom-recommendation.component.html'
})
export class PomRecommendationComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IPomRecommendation;
  reportForm: FormGroup;
  formError: boolean;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPomRecommendation>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IPomRecommendation>) {
    this.stateSubscriber = store.select(getPomRecommendation).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      yourRecommendation: [this.reportData.yourRecommendation, Validators.required]
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1-omic/pom-signature']);
  }

  /**
   *
   */
  saveContent({ value }: { value: IPomRecommendation }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdatePomRecommendationAction(updatedValue));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IPrisonerKnowledge} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IPomRecommendation }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid });

    this.store.dispatch(new UpdatePomRecommendationAction(updatedValue));

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
