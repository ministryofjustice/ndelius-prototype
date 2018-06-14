import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdateRiskReoffendingAction } from './action/risk-reoffending.action';
import { IRiskReoffending } from './model/risk-reoffending.model';

import { getRiskOfReoffending } from './reducer/risk-reoffending.reducer';

@Component({
  selector: 'app-risk-reoffending',
  templateUrl: './risk-reoffending.component.html'
})
export class RiskReoffendingComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IRiskReoffending;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerContact>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IRiskReoffending>) {
    super();
    this.stateSubscriber = store.select(getRiskOfReoffending).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   * @param {IRiskReoffending} value
   */
  saveContent({ value }: { value: IRiskReoffending }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateRiskReoffendingAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['parom1-omic/risk-community']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      rsrScore: [this.reportData.rsrScore, Validators.required],
      ogrs3Percentage: [this.reportData.ogrs3Percentage, Validators.required],
      ogpProbability: [this.reportData.ogpProbability, Validators.required],
      ovpProbability: [this.reportData.ovpProbability, Validators.required],
      riskMatrix2000: [this.reportData.riskMatrix2000, Validators.required],
      sara: [this.reportData.sara, Validators.required],
      likelihoodOfReoffending: [this.reportData.likelihoodOfReoffending, Validators.required]
    });
  }

}
