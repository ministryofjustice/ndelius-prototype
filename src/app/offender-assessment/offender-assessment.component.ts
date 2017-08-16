import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-offender-assessment',
  templateUrl: './offender-assessment.component.html'
})
export class OffenderAssessmentComponent {

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
  private createForm() {
    this.reportForm = this.formBuilder.group({
      offenderAssessment: ''
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
  onSubmit(valid) {
    this.formError = !valid;
    if (valid) {
      this.continueJourney();
    }
  }

}
