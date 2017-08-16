import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-offending-patterns',
  templateUrl: './offending-patterns.component.html'
})
export class OffendingPatternsComponent {

  reportForm: FormGroup;

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
      patternOfOffending: ''
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['risk-assessment']);
  }

  /**
   *
   */
  onSubmit() {
    this.continueJourney();
  }

}
