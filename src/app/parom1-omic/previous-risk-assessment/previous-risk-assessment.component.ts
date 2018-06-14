import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdatePreviousRiskAssessmentAction } from './action/previous-risk-assessment.action';
import { IPreviousRiskAssessment } from './model/previous-risk-assessment.model';

import { getPreviousRiskAssessment } from './reducer/previous-risk-assessment.reducer';

@Component({
  selector: 'app-previous-risk-assessment',
  templateUrl: './previous-risk-assessment.component.html'
})
export class PreviousRiskAssessmentComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IPreviousRiskAssessment;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerContact>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IPreviousRiskAssessment>) {
    super();
    this.stateSubscriber = store.select(getPreviousRiskAssessment).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   * @param {IPreviousRiskAssessment} value
   */
  saveContent({ value }: { value: IPreviousRiskAssessment }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdatePreviousRiskAssessmentAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['parom1-omic/victim-issues']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      attitude: [this.reportData.attitude, Validators.required],
      previousDate: this.formBuilder.group({
        month: [this.reportData.previousDate.month, Validators.required],
        year: [this.reportData.previousDate.year, Validators.required]
      }),
      riskPublic: [this.reportData.riskPublic, Validators.required],
      riskKnownAdult: [this.reportData.riskKnownAdult, Validators.required],
      riskChildren: [this.reportData.riskChildren, Validators.required],
      riskPrisoners: [this.reportData.riskPrisoners, Validators.required],
      riskStaff: [this.reportData.riskStaff, Validators.required]
    });
  }

}
