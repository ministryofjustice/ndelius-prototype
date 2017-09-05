import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html'
})
export class FeedbackComponent {

  reportForm: FormGroup;
  formError: boolean;

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
      rating: void 0,
      feedback: ''
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['start-report']);
  }

  /**
   *
   * @param {boolean} valid
   */
  onSubmit({ valid }: { valid: boolean }) {
    this.formError = !valid;
    if (valid) {
      this.continueJourney();
    }
  }

}
