import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { getProposedSentence } from './reducer/proposed-sentence.reducer';

import { IProposedSentence } from './model/proposed-sentence.model';
import { UpdateProposedSentenceAction } from './action/proposed-sentence.action';

@Component({
  selector: 'app-proposed-sentence',
  templateUrl: './proposed-sentence.component.html'
})
export class ProposedSentenceComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IProposedSentence;
  reportForm: FormGroup;
  formError: boolean;
  expandContent: boolean;

  /**
   *
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
      proposal: [this.reportData.proposal, Validators.required]
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['check-report']);
  }

  /**
   *
   */
  saveContent({ value }: { value: IProposedSentence }) {
    this.store.dispatch(new UpdateProposedSentenceAction(value));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IProposedSentence} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IProposedSentence }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid });
    this.store.dispatch(new UpdateProposedSentenceAction(updatedValue));

    if (valid) {
      this.continueJourney();
    }
  }

  /**
   *
   */
  ngOnDestroy() {
    this.stateSubscriber.unsubscribe();
  }

}
