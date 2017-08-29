import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { getRiskAssessment } from './reducer/risk-assessment.reducer';

import { IRiskAssessment } from './model/risk-assessment.model';
import { UpdateRiskAssessmentAction } from './action/risk-assessment.action';

@Component({
  selector: 'app-risk-assessment',
  templateUrl: './risk-assessment.component.html'
})
export class RiskAssessmentComponent {

  reportData: IRiskAssessment;
  reportForm: FormGroup;
  formError: Boolean;
  expandContent: Boolean;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IRiskAssessment>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IRiskAssessment>) {
    store.select(getRiskAssessment).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   */
  createForm() {
    this.reportForm = this.formBuilder.group({
      previousSupervisionResponse: this.reportData.previousSupervisionResponse,
      additionalPreviousSupervision: this.reportData.additionalPreviousSupervision,
      likelihoodOfReOffending: this.reportData.likelihoodOfReOffending,
      riskOfSeriousHarm: this.reportData.riskOfSeriousHarm,
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['serious-harm-risk']);
  }

  /**
   *
   * @param {boolean} valid
   * @param {IRiskAssessment} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IRiskAssessment }) {
    this.formError = !valid;
    if (valid) {
      this.store.dispatch(new UpdateRiskAssessmentAction(value));
      this.continueJourney();
    }
  }

}
