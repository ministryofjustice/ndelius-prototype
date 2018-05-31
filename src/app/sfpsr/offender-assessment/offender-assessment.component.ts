import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

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
export class OffenderAssessmentComponent extends BaseComponent {

  /**
   *
   * @type {ISection[]}
   */
  sections: Array<ISection> = [
    {
      checkControl: 'issueAccommodation',
      checkLabel: 'Accommodation',
      detailControl: 'detailsAccommodation',
      detailLabel: 'Provide a brief assessment of accommodation issues'
    },
    {
      checkControl: 'issueEmployment',
      checkLabel: 'Employment, training and education',
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
      checkControl: 'issueSubstance',
      checkLabel: 'Substance misuse',
      detailControl: 'detailsSubstance',
      detailLabel: 'Provide a brief assessment of substance misuse issues'
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
    },
    {
      checkControl: 'issueOther',
      checkLabel: 'Other',
      detailControl: 'detailsOther',
      detailLabel: 'Provide a brief assessment of any other issues'
    }
  ];

  /**
   *
   */
  private reportData: IOffenderAssessment;

  /**
   * @constructor
   * @param router
   * @param formBuilder
   * @param store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IOffenderAssessment>) {
    super();
    this.stateSubscriber = store.select(getOffenderAssessment).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   * @param {IOffenderAssessment} value
   */
  saveContent({ value }: { value: IOffenderAssessment }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateOffenderAssessmentAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['sfpsr/risk-assessment']);
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
      issueSubstance: this.reportData.issueSubstance,
      detailsSubstance: this.reportData.detailsSubstance,
      issueHealth: this.reportData.issueHealth,
      detailsHealth: this.reportData.detailsHealth,
      issueBehaviour: this.reportData.issueBehaviour,
      detailsBehaviour: this.reportData.detailsBehaviour,
      issueOther: this.reportData.issueOther,
      detailsOther: this.reportData.detailsOther,
      trauma: [this.reportData.trauma, Validators.required],
      traumaDetails: this.reportData.traumaDetails,
      caring: [this.reportData.caring, Validators.required],
      caringDetails: this.reportData.caringDetails
    });
  }

}
