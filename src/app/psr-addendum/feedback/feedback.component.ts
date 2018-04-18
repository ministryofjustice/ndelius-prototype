import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html'
})
export class FeedbackComponent {

  reportForm: FormGroup;
  formError: boolean;

  /**
   * @constructor
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
    this.router.navigate(['/psr-addendum/']);
  }

  /**
   *
   * @param {any} value
   */
  private emailFeedback(value: any) {
    window.location.href = 'mailto:nick.gallon@digital.justice.gov.uk?subject=' +
      'Short%20Format%20Pre-sentence%20Addendum%20-%20feedback' +
      '&body=Overall,%20how%20did%20you%20feel%20about%20the%20Short%20Format%20' +
      'Pre-sentence%20Report%20service%20you%20used%20today%3F%0D%0A%0D%0A' +
      value.rating +
      '%0D%0A%0D%0A%0D%0A%0D%0A' +
      'How%20could%20we%20improve%20this%20service%3F%0D%0A%0D%0A' +
      encodeURIComponent(value.feedback);
  }

  /**
   *
   * @param {any} form
   */
  onSubmit(form: any) {
    this.formError = !form.valid;
    if (form.valid) {
      if (location.port !== '9876' && location.port !== '49152') {
        this.emailFeedback(form.value);
      }
      this.continueJourney();
    }
  }

}
