import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { getProposedSentence } from './reducer/proposed-sentence.reducer';

import { IProposedSentence } from './model/proposed-sentence.model';
import { UpdateProposedSentenceAction } from './action/proposed-sentence.action';

@Component({
  selector: 'app-proposed-sentence',
  templateUrl: './proposed-sentence.component.html'
})
export class ProposedSentenceComponent {

  reportData: IProposedSentence;
  reportForm: FormGroup;
  formError: Boolean;
  expandContent: Boolean;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IProposedSentence>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IProposedSentence>) {
    store.select(getProposedSentence).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   */
  createForm() {
    this.reportForm = this.formBuilder.group({
      proposal: this.reportData.proposal
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['signature']);
  }

  /**
   *
   * @param {boolean} valid
   * @param {IProposedSentence} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IProposedSentence }) {
    this.formError = !valid;
    if (valid) {
      this.store.dispatch(new UpdateProposedSentenceAction(value));
      this.continueJourney();
    }
  }

}
