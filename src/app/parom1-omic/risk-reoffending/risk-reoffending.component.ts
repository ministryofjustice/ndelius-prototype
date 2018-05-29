import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { UpdateRiskReoffendingAction } from './action/risk-reoffending.action';
import { IRiskReoffending } from './model/risk-reoffending.model';
import { getRiskOfReoffending } from './reducer/risk-reoffending.reducer';

@Component({
  selector: 'app-risk-reoffending',
  templateUrl: './risk-reoffending.component.html'
})
export class RiskReoffendingComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IRiskReoffending;
  reportForm: FormGroup;
  formError: boolean;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerRelationship>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IRiskReoffending>) {
    this.stateSubscriber = store.select(getRiskOfReoffending).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
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

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1-omic/risk-community']);
  }

  /**
   *
   */
  saveContent({ value }: { value: IRiskReoffending }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateRiskReoffendingAction(updatedValue));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IPrisonerRelationship} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IRiskReoffending }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid });

    this.store.dispatch(new UpdateRiskReoffendingAction(updatedValue));

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
