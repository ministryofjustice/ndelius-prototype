import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { UpdateSourcesAction } from './action/sources.action';
import { ISources } from './model/sources.model';

import { getSources } from './reducer/sources.reducer';

@Component({
  selector: 'app-supervision-plan',
  templateUrl: './sources.component.html'
})
export class SourcesComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: ISources;
  reportForm: FormGroup;
  formError: boolean;

  documents: Array<any> = [
    { control: 'probationCaseRecords', label: 'Probation case records' },
    { control: 'previousConvictions', label: 'Previous convictions' },
    { control: 'paroleDossier', label: 'Parole dossier' },
    { control: 'cpsDocuments', label: 'Crown Prosecution Service (CPS) documents' },
    { control: 'preSentenceReport', label: 'Pre-sentence report' },
    { control: 'previousParoleReports', label: 'Previous parole reports' },
    { control: 'judgesComments', label: 'Judges comments' },
    { control: 'other', label: 'Other (please specify below)' }
  ];

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<ISources>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<ISources>) {
    this.stateSubscriber = store.select(getSources).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
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

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1-omic/fail']);
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
   * @param {boolean} valid
   * @param {IPrisonerKnowledge} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: ISources }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid });

    this.store.dispatch(new UpdateSourcesAction(updatedValue));

    if (valid) {
      this.continueJourney();
    } else {
      window.scrollTo(0, 0);
    }
  }

  /**
   *
   */
  ngOnDestroy() {
    this.stateSubscriber.unsubscribe();
  }

}
