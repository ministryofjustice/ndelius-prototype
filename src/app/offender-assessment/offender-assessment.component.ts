import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { getOffenderAssessment } from './reducer/offender-assessment.reducer';

import { IOffenderAssessment } from './model/offender-assessment.model';
import { UpdateOffenderAssessmentAction } from './action/offender-assessment.action';

interface ISection {
  checkControl: string;
  checkLabel: string;
  detailControl: string;
  detailLabel: string;
}

@Component({
  selector: 'app-offender-assessment',
  templateUrl: './offender-assessment.component.html'
})
export class OffenderAssessmentComponent {

  reportData: IOffenderAssessment;
  reportForm: FormGroup;
  formError: boolean;
  sections: Array<ISection> = [
    {
      checkControl: 'issueAccommodation',
      checkLabel: 'Accommodation',
      detailControl: 'detailsAccommodation',
      detailLabel: 'Provide a brief assessment of accommodation issues'
    },
    {
      checkControl: 'issueEmployment',
      checkLabel: 'Employment',
      detailControl: 'detailsEmployment',
      detailLabel: 'Provide a brief assessment of employment issues'
    },
    {
      checkControl: 'issueFinance',
      checkLabel: 'Finance',
      detailControl: 'detailsFinance',
      detailLabel: 'Provide a brief assessment of finance issues'
    },
    {
      checkControl: 'issueRelationships',
      checkLabel: 'Relationships',
      detailControl: 'detailsRelationships',
      detailLabel: 'Provide a brief assessment of relationship issues'
    },
    {
      checkControl: 'issueDrugs',
      checkLabel: 'Drugs',
      detailControl: 'detailsDrugs',
      detailLabel: 'Provide a brief assessment of drug issues'
    },
    {
      checkControl: 'issueAlcohol',
      checkLabel: 'Alcohol',
      detailControl: 'detailsAlcohol',
      detailLabel: 'Provide a brief assessment of alcohol issues'
    },
    {
      checkControl: 'issueHealth',
      checkLabel: 'Physical & mental health',
      detailControl: 'detailsHealth',
      detailLabel: 'Provide a brief assessment of physical & mental health issues'
    },
    {
      checkControl: 'issueBehaviour',
      checkLabel: 'Thinking & behaviour',
      detailControl: 'detailsBehaviour',
      detailLabel: 'Provide a brief assessment of thinking & behaviour issues'
    }
  ];

  /**
   * @constructor
   * @param router
   * @param formBuilder
   * @param store
   */
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
   * @param {IOffenderAssessment} value
   */
  saveContent({ value }: { value: IOffenderAssessment }) {
    this.store.dispatch(new UpdateOffenderAssessmentAction(value));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IOffenderAssessment} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IOffenderAssessment }) {
    this.formError = !valid;
    if (valid) {
      value.saved = true;
      this.store.dispatch(new UpdateOffenderAssessmentAction(value));
      this.continueJourney();
    }
  }

}
