import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdateRiskSeriousHarmAction } from './action/risk-serious-harm.action';
import { IRiskSeriousHarm } from './model/risk-serious-harm.model';

import { getRiskSeriousHarm } from './reducer/risk-serious-harm.reducer';

@Component({
  selector: 'app-risk-serious-harm',
  templateUrl: './risk-serious-harm.component.html'
})
export class RiskSeriousHarmComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IRiskSeriousHarm;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerContact>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IRiskSeriousHarm>) {
    super();
    this.stateSubscriber = store.select(getRiskSeriousHarm).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   * @param {IRiskSeriousHarm} value
   */
  saveContent({ value }: { value: IRiskSeriousHarm }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateRiskSeriousHarmAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['parom1-omic/release-risk-management']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      seriousHarmOthers: [this.reportData.seriousHarmOthers, Validators.required],
      increaseFactors: [this.reportData.increaseFactors, Validators.required],
      reductionFactors: [this.reportData.reductionFactors, Validators.required]
    });
  }

}
