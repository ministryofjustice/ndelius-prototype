import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { UpdateResettlementPlanAction } from './action/resettlement-plan.action';
import { IResettlementPlan } from './model/resettlement-plan.model';

import { getResettlementPlan } from './reducer/resettlement-plan.reducer';

@Component({
  selector: 'app-resettlement-plan',
  templateUrl: './resettlement-plan.component.html'
})
export class ResettlementPlanComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IResettlementPlan;
  reportForm: FormGroup;
  formError: boolean;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IResettlementPlan>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IResettlementPlan>) {
    this.stateSubscriber = store.select(getResettlementPlan).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      resettlementPlanForRelease: [this.reportData.resettlementPlanForRelease, Validators.required]
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1-omic/supervision-plan']);
  }

  /**
   *
   */
  saveContent({ value }: { value: IResettlementPlan }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateResettlementPlanAction(updatedValue));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IPrisonerKnowledge} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IResettlementPlan }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid });

    this.store.dispatch(new UpdateResettlementPlanAction(updatedValue));

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
