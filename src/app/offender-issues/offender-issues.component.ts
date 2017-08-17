import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { getOffenderIssues } from './reducer/offender-issues.reducer';

import { IOffenderIssues } from './model/offender-issues.model';
import { UpdateOffenderIssuesAction } from './action/offender-issues.action';

@Component({
  selector: 'app-offender-issues',
  templateUrl: './offender-issues.component.html'
})
export class OffenderIssuesComponent {

  reportData: IOffenderIssues;
  reportForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IOffenderIssues>) {
    store.select(getOffenderIssues).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      issueAccommodation: this.reportData.issueAccommodation,
      issueEmployment: this.reportData.issueEmployment,
      issueFinance: this.reportData.issueFinance,
      issueDrugs: this.reportData.issueDrugs,
      issueAlcohol: this.reportData.issueAlcohol,
      issueHealth: this.reportData.issueHealth,
      issueBehaviour: this.reportData.issueBehaviour
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
  onSubmit({ value: value }) {
    this.store.dispatch(new UpdateOffenderIssuesAction(value));
    this.continueJourney();
  }

}
