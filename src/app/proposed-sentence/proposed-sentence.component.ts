import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-proposed-sentence',
  templateUrl: './proposed-sentence.component.html'
})
export class ProposedSentenceComponent {

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
      proposal: ''
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['signature']);
  }

  /**
   *
   * @param valid
   */
  onSubmit(valid) {
    this.formError = !valid;
    if (valid) {
      this.continueJourney();
    }
  }

}
