import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdateSourcesAction } from './action/sources.action';
import { IControls, ISources } from './model/sources.model';

import { getSources } from './reducer/sources.reducer';

@Component({
  selector: 'app-supervision-plan',
  templateUrl: './sources.component.html'
})
export class SourcesComponent extends BaseComponent {

  /**
   *
   * @type {IControls[]}
   */
  documents: Array<IControls> = [
    { control: 'previousConvictions', label: 'Previous convictions' },
    { control: 'cpsDocuments', label: 'Crown Prosecution Service (CPS) documents' },
    { control: 'preSentenceReport', label: 'Pre-sentence report' },
    { control: 'judgesComments', label: 'Judges comments' },
    { control: 'previousParoleReports', label: 'Previous parole reports' },
    { control: 'paroleDossier', label: 'Parole dossier' },
    { control: 'probationCaseRecords', label: 'Probation case records' },
    { control: 'other', label: 'Other (please specify below)' }
  ];

  /**
   *
   */
  private reportData: ISources;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<ISources>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<ISources>) {
    super();
    this.stateSubscriber = store.select(getSources).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  saveContent({ value }: { value: ISources }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateSourcesAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['parom1/check-report']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      probationCaseRecords: this.reportData.probationCaseRecords,
      previousConvictions: this.reportData.previousConvictions,
      paroleDossier: this.reportData.paroleDossier,
      cpsDocuments: this.reportData.cpsDocuments,
      preSentenceReport: this.reportData.preSentenceReport,
      previousParoleReports: this.reportData.previousParoleReports,
      judgesComments: this.reportData.judgesComments,
      other: this.reportData.other,
      otherDocuments: this.reportData.otherDocuments,
      reportsAssessmentsDirections: [this.reportData.reportsAssessmentsDirections, Validators.required],
      sourceLimitations: [this.reportData.sourceLimitations, Validators.required],
      sourceLimitationExplanation: this.reportData.sourceLimitationExplanation
    });
  }

}
