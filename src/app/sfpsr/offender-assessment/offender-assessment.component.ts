import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';
import { IOption } from '../../_shared/components/checkboxes/checkboxes.component';

import { getOffenderAssessment } from './reducer/offender-assessment.reducer';

import { IOffenderAssessment } from './model/offender-assessment.model';
import { UpdateOffenderAssessmentAction } from './action/offender-assessment.action';

@Component({
  selector: 'app-offender-assessment',
  templateUrl: './offender-assessment.component.html'
})
export class OffenderAssessmentComponent extends BaseComponent {

  /**
   *
   * @type {ISection[]}
   */
  sections: Array<IOption> = [
    {
      control: 'issueAccommodation',
      label: 'Accommodation',
      conditional: {
        control: 'detailsAccommodation',
        label: 'Provide a brief assessment of accommodation issues'
      }
    },
    {
      control: 'issueEmployment',
      label: 'Employment, training and education',
      conditional: {
        control: 'detailsEmployment',
        label: 'Provide a brief assessment of employment issues'
      }
    },
    {
      control: 'issueFinance',
      label: 'Finance',
      conditional: {
        control: 'detailsFinance',
        label: 'Provide a brief assessment of finance issues'
      }
    },
    {
      control: 'issueRelationships',
      label: 'Relationships',
      conditional: {
        control: 'detailsRelationships',
        label: 'Provide a brief assessment of relationship issues'
      }
    },
    {
      control: 'issueSubstance',
      label: 'Substance misuse',
      conditional: {
        control: 'detailsSubstance',
        label: 'Provide a brief assessment of substance misuse issues'
      }
    },
    {
      control: 'issueHealth',
      label: 'Physical & mental health',
      conditional: {
        control: 'detailsHealth',
        label: 'Provide a brief assessment of physical & mental health issues'
      }
    },
    {
      control: 'issueBehaviour',
      label: 'Thinking & behaviour',
      conditional: {
        control: 'detailsBehaviour',
        label: 'Provide a brief assessment of thinking & behaviour issues'
      }
    },
    {
      control: 'issueOther',
      label: 'Other',
      conditional: {
        control: 'detailsOther',
        label: 'Provide a brief assessment of any other issues'
      }
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
    this.stateSubscriber = store.pipe(select(getOffenderAssessment)).subscribe(state => {
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
