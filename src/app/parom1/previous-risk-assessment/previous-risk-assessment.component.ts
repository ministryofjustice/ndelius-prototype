import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { UpdatePreviousRiskAssessmentAction } from './action/previous-risk-assessment.action';
import { IPreviousRiskAssessment } from './model/previous-risk-assessment.model';
import { getPreviousRiskAssessment } from './reducer/previous-risk-assessment.reducer';


@Component({
  selector: 'app-previous-risk-assessment',
  templateUrl: './previous-risk-assessment.component.html'
})
export class PreviousRiskAssessmentComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IPreviousRiskAssessment;
  reportForm: FormGroup;
  formError: boolean;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerRelationship>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IPreviousRiskAssessment>) {
    this.stateSubscriber = store.select(getPreviousRiskAssessment).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
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

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1/victim-issues']);
  }

  /**
   *
   */
  saveContent({ value }: { value: IPreviousRiskAssessment }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdatePreviousRiskAssessmentAction(updatedValue));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IPrisonerRelationship} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IPreviousRiskAssessment }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid });

    this.store.dispatch(new UpdatePreviousRiskAssessmentAction(updatedValue));

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
