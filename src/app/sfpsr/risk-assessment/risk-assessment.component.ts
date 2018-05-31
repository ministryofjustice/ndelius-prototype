import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { getRiskAssessment } from './reducer/risk-assessment.reducer';

import { IRiskAssessment } from './model/risk-assessment.model';
import { UpdateRiskAssessmentAction } from './action/risk-assessment.action';

@Component({
  selector: 'app-risk-assessment',
  templateUrl: './risk-assessment.component.html'
})
export class RiskAssessmentComponent extends BaseComponent {

  /**
   *
   */
  expandContent: boolean;

  /**
   *
   */
  private reportData: IRiskAssessment;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IRiskAssessment>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IRiskAssessment>) {
    super();
    this.stateSubscriber = store.select(getRiskAssessment).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   */
  saveContent({ value }: { value: IRiskAssessment }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateRiskAssessmentAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['sfpsr/proposed-sentence']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      likelihoodOfReOffending: [this.reportData.likelihoodOfReOffending, Validators.required],
      riskOfSeriousHarm: [this.reportData.riskOfSeriousHarm, Validators.required],
      previousSupervisionResponse: [this.reportData.previousSupervisionResponse, Validators.required],
      additionalPreviousSupervision: this.reportData.additionalPreviousSupervision
    });
  }

}
