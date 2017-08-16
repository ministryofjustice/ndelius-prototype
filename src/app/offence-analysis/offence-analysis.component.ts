import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-offence-analysis',
  templateUrl: './offence-analysis.component.html'
})
export class OffenceAnalysisComponent {

  reportForm: FormGroup;
  formError: Boolean;
  expandContent: Boolean;

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
      offenceAnalysis: ''
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['offender-issues']);
  }

  /**
   *
   */
  onSubmit(valid: Boolean) {
    this.formError = !valid;
    if (valid) {
      this.continueJourney();
    }
  }

}
