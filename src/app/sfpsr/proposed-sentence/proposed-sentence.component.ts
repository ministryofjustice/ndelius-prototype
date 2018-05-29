import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { getProposedSentence } from './reducer/proposed-sentence.reducer';

import { IProposedSentence } from './model/proposed-sentence.model';
import { UpdateProposedSentenceAction } from './action/proposed-sentence.action';

@Component({
  selector: 'app-proposed-sentence',
  templateUrl: './proposed-sentence.component.html'
})
export class ProposedSentenceComponent implements AfterViewInit, OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IProposedSentence;
  reportForm: FormGroup;
  formError: boolean;
  expandContent: boolean;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IProposedSentence>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IProposedSentence>) {
    this.stateSubscriber = store.select(getProposedSentence).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   */
  createForm() {
    this.reportForm = this.formBuilder.group({
      proposal: [this.reportData.proposal, Validators.required],
      diversity: [this.reportData.diversity, Validators.required]
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['sfpsr/check-report']);
  }

  /**
   *
   */
  saveContent({ value }: { value: IProposedSentence }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateProposedSentenceAction(updatedValue));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IProposedSentence} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IProposedSentence }) {
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
