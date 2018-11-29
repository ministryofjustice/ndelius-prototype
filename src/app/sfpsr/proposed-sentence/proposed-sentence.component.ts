import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { getProposedSentence } from './reducer/proposed-sentence.reducer';

import { IProposedSentence } from './model/proposed-sentence.model';
import { UpdateProposedSentenceAction } from './action/proposed-sentence.action';

@Component({
  selector: 'app-proposed-sentence',
  templateUrl: './proposed-sentence.component.html'
})
export class ProposedSentenceComponent extends BaseComponent {

  /**
   *
   */
  expandContent: boolean;

  /**
   *
   */
  private reportData: IProposedSentence;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IProposedSentence>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IProposedSentence>) {
    super();
    this.stateSubscriber = store.pipe(select(getProposedSentence)).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
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
   */
  protected continueJourney() {
    this.router.navigate(['sfpsr/information-sources']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      proposal: [this.reportData.proposal, Validators.required]
    });
  }

}
