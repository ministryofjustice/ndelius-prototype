import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdateResettlementPlanAction } from './action/resettlement-plan.action';
import { IResettlementPlan } from './model/resettlement-plan.model';

import { getResettlementPlan } from './reducer/resettlement-plan.reducer';

@Component({
  selector: 'app-resettlement-plan',
  templateUrl: './resettlement-plan.component.html'
})
export class ResettlementPlanComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IResettlementPlan;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IResettlementPlan>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IResettlementPlan>) {
    super();
    this.stateSubscriber = store.pipe(select(getResettlementPlan)).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
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
   */
  protected continueJourney() {
    this.router.navigate(['parom1/supervision-plan']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      resettlementPlanRequired: [this.reportData.resettlementPlanRequired, Validators.required],
      resettlementPlanForRelease: this.reportData.resettlementPlanForRelease
    });
  }

}
