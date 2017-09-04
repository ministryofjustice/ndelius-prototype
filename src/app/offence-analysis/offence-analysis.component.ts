import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { getOffenceAnalysis } from './reducer/offence-analysis.reducer';

import { IOffenceAnalysis } from './model/offence-analysis.model';
import { UpdateOffenceAnalysisAction } from './action/offence-analysis.action';

@Component({
  selector: 'app-offence-analysis',
  templateUrl: './offence-analysis.component.html'
})
export class OffenceAnalysisComponent {

  reportData: IOffenceAnalysis;
  reportForm: FormGroup;
  formError: boolean;
  expandContent: boolean;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IOffenceAnalysis>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IOffenceAnalysis>) {
    store.select(getOffenceAnalysis).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      offenceAnalysisEntry: [this.reportData.offenceAnalysisEntry, Validators.required],
      patternOfOffending: this.reportData.patternOfOffending,
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
  saveContent({ value }: { value: IOffenceAnalysis }) {
    this.store.dispatch(new UpdateOffenceAnalysisAction(value));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IOffenceAnalysis} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IOffenceAnalysis }) {
    this.formError = !valid;
    if (valid) {
      value.saved = true;
      this.store.dispatch(new UpdateOffenceAnalysisAction(value));
      this.continueJourney();
    }
  }

}
