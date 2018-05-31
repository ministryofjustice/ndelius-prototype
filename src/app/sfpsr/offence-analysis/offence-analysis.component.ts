import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { getOffenceAnalysis } from './reducer/offence-analysis.reducer';

import { IOffenceAnalysis } from './model/offence-analysis.model';
import { UpdateOffenceAnalysisAction } from './action/offence-analysis.action';

@Component({
  selector: 'app-offence-analysis',
  templateUrl: './offence-analysis.component.html'
})
export class OffenceAnalysisComponent extends BaseComponent {

  /**
   *
   */
  expandContent: boolean;
  /**
   *
   */
  private reportData: IOffenceAnalysis;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IOffenceAnalysis>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IOffenceAnalysis>) {
    super();
    this.stateSubscriber = store.select(getOffenceAnalysis).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   */
  saveContent({ value }: { value: IOffenceAnalysis }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateOffenceAnalysisAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['sfpsr/offender-assessment']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      offenceAnalysisEntry: [this.reportData.offenceAnalysisEntry, Validators.required],
      patternOfOffending: this.reportData.patternOfOffending
    });
  }

}
