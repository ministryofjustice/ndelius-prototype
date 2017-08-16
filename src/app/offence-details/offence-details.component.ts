import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-offence-details',
  templateUrl: './offence-details.component.html'
})
export class OffenceDetailsComponent {

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
      mainOffence: '',
      otherOffence: '',
      offenceSummary: ''
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['offence-analysis']);
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
