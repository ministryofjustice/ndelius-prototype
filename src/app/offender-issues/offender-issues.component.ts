import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-offender-issues',
  templateUrl: './offender-issues.component.html'
})
export class OffenderIssuesComponent {

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
      issueAccommodation: void 0,
      issueEmployment: void 0,
      issueFinance: void 0,
      issueDrugs: void 0,
      issueAlcohol: void 0,
      issueHealth: void 0,
      issueBehaviour: void 0
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['offender-assessment']);
  }

  /**
   *
   */
  onSubmit() {
    this.continueJourney();
  }

}
