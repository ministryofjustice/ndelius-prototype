import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-serious-harm-risk',
  templateUrl: './serious-harm-risk.component.html'
})
export class SeriousHarmRiskComponent {

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
      riskOfSeriousHarm: ''
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['proposed-sentence']);
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
