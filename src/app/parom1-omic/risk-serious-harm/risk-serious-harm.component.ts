import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { UpdateRiskSeriousHarmAction } from './action/risk-serious-harm.action';
import { IRiskSeriousHarm } from './model/risk-serious-harm.model';
import { getRiskSeriousHarm } from './reducer/risk-serious-harm.reducer';

@Component({
  selector: 'app-risk-serious-harm',
  templateUrl: './risk-serious-harm.component.html'
})
export class RiskSeriousHarmComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IRiskSeriousHarm;
  reportForm: FormGroup;
  formError: boolean;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerRelationship>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IRiskSeriousHarm>) {
    this.stateSubscriber = store.select(getRiskSeriousHarm).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
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

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1-omic/release-risk-management']);
  }

  /**
   *
   */
  saveContent({ value }: { value: IRiskSeriousHarm }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateRiskSeriousHarmAction(updatedValue));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IPrisonerRelationship} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IRiskSeriousHarm }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid });

    this.store.dispatch(new UpdateRiskSeriousHarmAction(updatedValue));

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
