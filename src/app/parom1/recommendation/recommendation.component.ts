import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdateRecommendationAction } from './action/recommendation.action';
import { IRecommendation } from './model/recommendation.model';

import { getRecommendation } from './reducer/recommendation.reducer';

@Component({
  selector: 'app-com-recommendation',
  templateUrl: './recommendation.component.html'
})
export class RecommendationComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IRecommendation;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IRecommendation>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IRecommendation>) {
    super();
    this.stateSubscriber = store.select(getRecommendation).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  saveContent({ value }: { value: IRecommendation }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateRecommendationAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['parom1/hearing-considerations']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      yourRecommendation: [this.reportData.yourRecommendation, Validators.required]
    });
  }

}
