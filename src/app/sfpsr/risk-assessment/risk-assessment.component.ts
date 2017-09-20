import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { getRiskAssessment } from './reducer/risk-assessment.reducer';

import { IRiskAssessment } from './model/risk-assessment.model';
import { UpdateRiskAssessmentAction } from './action/risk-assessment.action';

@Component({
  selector: 'app-risk-assessment',
  templateUrl: './risk-assessment.component.html'
})
export class RiskAssessmentComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IRiskAssessment;
  reportForm: FormGroup;
  formError: boolean;
  expandContent: boolean;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IRiskAssessment>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IRiskAssessment>) {
    this.stateSubscriber = store.select(getRiskAssessment).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   */
  createForm() {
    this.reportForm = this.formBuilder.group({
      likelihoodOfReOffending: [this.reportData.likelihoodOfReOffending, Validators.required],
      riskOfSeriousHarm: [this.reportData.riskOfSeriousHarm, Validators.required],
      previousSupervisionResponse: this.reportData.previousSupervisionResponse,
      additionalPreviousSupervision: this.reportData.additionalPreviousSupervision,
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['sfpsr/proposed-sentence']);
  }

  /**
   *
   */
  saveContent({ value }: { value: IRiskAssessment }) {
    this.store.dispatch(new UpdateRiskAssessmentAction(value));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IRiskAssessment} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IRiskAssessment }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid });
    this.store.dispatch(new UpdateRiskAssessmentAction(updatedValue));

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
