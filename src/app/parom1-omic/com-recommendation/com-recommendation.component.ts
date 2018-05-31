import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdateComRecommendationAction } from './action/com-recommendation.action';
import { IComRecommendation } from './model/com-recommendation.model';

import { getComRecommendation } from './reducer/com-recommendation.reducer';

@Component({
  selector: 'app-com-recommendation',
  templateUrl: './com-recommendation.component.html'
})
export class ComRecommendationComponent extends BaseComponent {

  /**
   *
   */
  reportData: IComRecommendation;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IComRecommendation>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IComRecommendation>) {
    super();
    this.stateSubscriber = store.select(getComRecommendation).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   * @param {IComRecommendation} value
   */
  saveContent({ value }: { value: IComRecommendation }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateComRecommendationAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['parom1-omic/hearing-considerations']);
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
