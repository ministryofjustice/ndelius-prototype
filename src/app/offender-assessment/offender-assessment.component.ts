import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { getOffenderAssessment } from './reducer/offender-assessment.reducer';

import { IOffenderAssessment } from './model/offender-assessment.model';
import { UpdateOffenderAssessmentAction } from './action/offender-assessment.action';

interface IExpandContent {
  accommodation: boolean;
  employment: boolean;
  finance: boolean;
  relationships: boolean;
  drugs: boolean;
  alcohol: boolean;
  health: boolean;
  behaviour: boolean;
}

@Component({
  selector: 'app-offender-assessment',
  templateUrl: './offender-assessment.component.html'
})
export class OffenderAssessmentComponent {

  reportData: IOffenderAssessment;
  reportForm: FormGroup;
  formError: boolean;
  expand: IExpandContent = {
    accommodation: false,
    employment: false,
    finance: false,
    relationships: false,
    drugs: false,
    alcohol: false,
    health: false,
    behaviour: false
  };

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IOffenderAssessment>) {
    store.select(getOffenderAssessment).subscribe(state => {
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
      detailsAccommodation: this.reportData.detailsAccommodation,
      issueEmployment: this.reportData.issueEmployment,
      detailsEmployment: this.reportData.detailsEmployment,
      issueFinance: this.reportData.issueFinance,
      detailsFinance: this.reportData.detailsFinance,
      issueRelationships: this.reportData.issueRelationships,
      detailsRelationships: this.reportData.detailsRelationships,
      issueDrugs: this.reportData.issueDrugs,
      detailsDrugs: this.reportData.detailsDrugs,
      issueAlcohol: this.reportData.issueAlcohol,
      detailsAlcohol: this.reportData.detailsAlcohol,
      issueHealth: this.reportData.issueHealth,
      detailsHealth: this.reportData.detailsHealth,
      issueBehaviour: this.reportData.issueBehaviour,
      detailsBehaviour: this.reportData.detailsBehaviour
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
   * @param {boolean} valid
   * @param {IOffenderAssessment} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IOffenderAssessment }) {
    this.formError = !valid;
    if (valid) {
      this.store.dispatch(new UpdateOffenderAssessmentAction(value));
      this.continueJourney();
    }
  }

}
