import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdatePomRecommendationAction } from './action/pom-recommendation.action';
import { IPomRecommendation } from './model/pom-recommendation.model';

import { getPomRecommendation } from './reducer/pom-recommendation.reducer';

@Component({
  selector: 'app-pom-recommendation',
  templateUrl: './pom-recommendation.component.html'
})
export class PomRecommendationComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IPomRecommendation;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPomRecommendation>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IPomRecommendation>) {
    super();
    this.stateSubscriber = store.select(getPomRecommendation).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   * @param {IPomRecommendation} value
   */
  saveContent({ value }: { value: IPomRecommendation }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdatePomRecommendationAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['parom1-omic/pom-signature']);
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
