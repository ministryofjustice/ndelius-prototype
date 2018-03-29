import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { UpdateCurrentRiskAssessmentAction } from './action/current-risk-assessment.action';
import { ICurrentRiskAssessment } from './model/current-risk-assessment.model';
import { getPreviousRiskAssessment } from './reducer/current-risk-assessment.reducer';


@Component({
  selector: 'app-current-risk-assessment',
  templateUrl: './current-risk-assessment.component.html'
})
export class CurrentRiskAssessmentComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: ICurrentRiskAssessment;
  reportForm: FormGroup;
  formError: boolean;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerKnowledge>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<ICurrentRiskAssessment>) {
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
      riskToThem: [this.reportData.riskToThem, Validators.required],
      riskToOthers: [this.reportData.riskToOthers, Validators.required],
      seriousHarmOthers: [this.reportData.seriousHarmOthers, Validators.required],
      increaseFactors: [this.reportData.increaseFactors, Validators.required],
      reductionFactors: [this.reportData.reductionFactors, Validators.required],
      furtherOffending: [this.reportData.furtherOffending, Validators.required]
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1-omic/fail']);
  }

  /**
   *
   */
  saveContent({ value }: { value: ICurrentRiskAssessment }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateCurrentRiskAssessmentAction(updatedValue));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IPrisonerKnowledge} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: ICurrentRiskAssessment }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid });

    this.store.dispatch(new UpdateCurrentRiskAssessmentAction(updatedValue));

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
