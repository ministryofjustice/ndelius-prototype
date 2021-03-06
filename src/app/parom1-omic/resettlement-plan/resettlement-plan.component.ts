import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

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
    this.stateSubscriber = store.select(getResettlementPlan).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   * @param {IResettlementPlan} value
   */
  saveContent({ value }: { value: IResettlementPlan }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateResettlementPlanAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['parom1-omic/supervision-plan']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      resettlementPlanForRelease: [this.reportData.resettlementPlanForRelease, Validators.required]
    });
  }

}
