import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { UpdateComRecommendationAction } from './action/com-recommendation.action';
import { IComRecommendation } from './model/com-recommendation.model';

import { getComRecommendation } from './reducer/com-recommendation.reducer';

@Component({
  selector: 'app-com-recommendation',
  templateUrl: './com-recommendation.component.html'
})
export class ComRecommendationComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IComRecommendation;
  reportForm: FormGroup;
  formError: boolean;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IComRecommendation>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IComRecommendation>) {
    this.stateSubscriber = store.select(getComRecommendation).subscribe(data => {
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
    this.router.navigate(['parom1-omic/hearing-considerations']);
  }

  /**
   *
   */
  saveContent({ value }: { value: IComRecommendation }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateComRecommendationAction(updatedValue));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IPrisonerKnowledge} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IComRecommendation }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid });

    this.store.dispatch(new UpdateComRecommendationAction(updatedValue));

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
