import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { getOffenderAssessmentDetail } from './reducer/offender-assessment.reducer';

import { IOffenderAssessmentDetail } from './model/offender-assessment.model';
import { UpdateOffenderAssessmentDetailAction } from './action/offender-assessment.action';

@Component({
  selector: 'app-offender-assessment',
  templateUrl: './offender-assessment.component.html'
})
export class OffenderAssessmentComponent {

  reportData: IOffenderAssessmentDetail;
  reportForm: FormGroup;
  formError: Boolean;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IOffenderAssessmentDetail>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IOffenderAssessmentDetail>) {
    store.select(getOffenderAssessmentDetail).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      offenderAssessment: this.reportData.offenderAssessment
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['offending-patterns']);
  }

  /**
   *
   */
  onSubmit({ valid: valid, value: value }) {
    this.formError = !valid;
    if (valid) {
      this.store.dispatch(new UpdateOffenderAssessmentDetailAction(value));
      this.continueJourney();
    }
  }

}
