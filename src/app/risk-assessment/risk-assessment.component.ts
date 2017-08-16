import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-risk-assessment',
  templateUrl: './risk-assessment.component.html'
})
export class RiskAssessmentComponent {

  reportForm: FormGroup;
  formError: Boolean;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   */
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.createForm();
  }

  /**
   *
   */
  createForm() {
    this.reportForm = this.formBuilder.group({
      previousSupervisionResponse: void 0,
      additionalPreviousSupervision: '',
      likelihoodOfReOffending: ''
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
   * @param {Boolean} valid
   */
  onSubmit(valid: Boolean) {
    this.formError = !valid;
    if (valid) {
      this.continueJourney();
    }
  }

}
