import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { UpdateSupervisionPlanAction } from './action/supervision-plan.action';
import { ISupervisionPlan } from './model/supervision-plan.model';

import { getSupervisionPlan } from './reducer/supervision-plan.reducer';

@Component({
  selector: 'app-supervision-plan',
  templateUrl: './supervision-plan.component.html'
})
export class SupervisionPlanComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: ISupervisionPlan;
  reportForm: FormGroup;
  formError: boolean;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<ISupervisionPlan>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<ISupervisionPlan>) {
    this.stateSubscriber = store.select(getSupervisionPlan).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      supervisionPlanForRelease: [this.reportData.supervisionPlanForRelease, Validators.required]
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1-omic/com-recommendation']);
  }

  /**
   *
   */
  saveContent({ value }: { value: ISupervisionPlan }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateSupervisionPlanAction(updatedValue));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IPrisonerKnowledge} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: ISupervisionPlan }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid });

    this.store.dispatch(new UpdateSupervisionPlanAction(updatedValue));

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
