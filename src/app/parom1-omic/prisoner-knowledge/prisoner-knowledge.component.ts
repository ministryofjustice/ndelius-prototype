import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { UpdatePrisonerKnowledgeAction } from './action/prisoner-knowledge.action';
import { IPrisonerKnowledge } from './model/prisoner-knowledge.model';
import { getPrisonerKnowledge } from './reducer/prisoner-knowledge.reducer';

@Component({
  selector: 'app-prisoner-knowledge',
  templateUrl: './prisoner-knowledge.component.html'
})
export class PrisonerKnowledgeComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IPrisonerKnowledge;
  reportForm: FormGroup;
  formError: boolean;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerKnowledge>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IPrisonerKnowledge>) {
    this.stateSubscriber = store.select(getPrisonerKnowledge).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      prisonerContact: [this.reportData.prisonerContact, Validators.required],
      prisonerFamilyContact: [this.reportData.prisonerFamilyContact, Validators.required],
      prisonerStaffContact: [this.reportData.prisonerStaffContact, Validators.required]
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1-omic/previous-risk-assessment']);
  }

  /**
   *
   */
  saveContent({ value }: { value: IPrisonerKnowledge }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdatePrisonerKnowledgeAction(updatedValue));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IPrisonerKnowledge} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IPrisonerKnowledge }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid });

    this.store.dispatch(new UpdatePrisonerKnowledgeAction(updatedValue));

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
