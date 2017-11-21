import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { getOffenceAnalysis } from './reducer/offence-analysis.reducer';

import { IOffenceAnalysis } from './model/offence-analysis.model';
import { UpdateOffenceAnalysisAction } from './action/offence-analysis.action';

@Component({
  selector: 'app-offence-analysis',
  templateUrl: './offence-analysis.component.html'
})
export class OffenceAnalysisComponent implements AfterViewInit, OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IOffenceAnalysis;
  reportForm: FormGroup;
  formError: boolean;
  expandContent: boolean;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IOffenceAnalysis>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IOffenceAnalysis>) {
    this.stateSubscriber = store.select(getOffenceAnalysis).subscribe(state => {
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
      patternOfOffending: this.reportData.patternOfOffending
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['sfpsr/offender-assessment']);
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
   * @param {boolean} valid
   * @param {IOffenceAnalysis} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IOffenceAnalysis }) {
    this.formError = !valid;

    this.saveContent({ value: value });

    if (valid) {
      this.continueJourney();
    } else {
      window.scrollTo(0, 0);
    }
  }

  /**
   *
   */
  ngAfterViewInit() {
    if (this.stateSubscriber) {
      this.stateSubscriber.unsubscribe();
    }
    this.saveContent({ value: this.reportData });
  }

  /**
   *
   */
  ngOnDestroy() {
    this.stateSubscriber.unsubscribe();
  }

}
