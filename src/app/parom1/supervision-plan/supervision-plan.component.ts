import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdateSupervisionPlanAction } from './action/supervision-plan.action';
import { ISupervisionPlan } from './model/supervision-plan.model';

import { getSupervisionPlan } from './reducer/supervision-plan.reducer';

@Component({
  selector: 'app-supervision-plan',
  templateUrl: './supervision-plan.component.html'
})
export class SupervisionPlanComponent extends BaseComponent {

  /**
   *
   */
  private reportData: ISupervisionPlan;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<ISupervisionPlan>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<ISupervisionPlan>) {
    super();
    this.stateSubscriber = store.select(getSupervisionPlan).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
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
   */
  protected continueJourney() {
    this.router.navigate(['parom1/recommendation']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      supervisionPlanForRelease: [this.reportData.supervisionPlanForRelease, Validators.required]
    });
  }

}
