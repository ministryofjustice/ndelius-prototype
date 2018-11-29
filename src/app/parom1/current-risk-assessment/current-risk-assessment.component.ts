import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdateRiskAssessmentAction } from './action/current-risk-assessment.action';
import { IRiskAssessment } from './model/current-risk-assessment.model';

import { getRiskAssessment } from './reducer/current-risk-assessment.reducer';

@Component({
  selector: 'app-current-risk-assessment',
  templateUrl: './current-risk-assessment.component.html'
})
export class CurrentRiskAssessmentComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IRiskAssessment;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerContact>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IRiskAssessment>) {
    super();
    this.stateSubscriber = store.pipe(select(getRiskAssessment)).subscribe(data => {
      this.reportData = data;
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
    this.router.navigate(['parom1/risk-community']);
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
      riskMatrix2000Completed: [this.reportData.riskMatrix2000Completed, Validators.required],
      riskMatrix2000: this.reportData.riskMatrix2000Completed,
      saraCompleted: [this.reportData.saraCompleted, Validators.required],
      sara: this.reportData.saraCompleted
    });
  }

}
