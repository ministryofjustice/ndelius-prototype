import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  formError: Boolean;
  expandContent: Boolean;

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
      offenceAnalysisEntry: this.reportData.offenceAnalysisEntry
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['offender-issues']);
  }

  /**
   *
   */
  onSubmit({ valid: valid, value: value }) {
    this.formError = !valid;
    if (valid) {
      this.store.dispatch(new UpdateOffenceAnalysisAction(value));
      this.continueJourney();
    }
  }

}
