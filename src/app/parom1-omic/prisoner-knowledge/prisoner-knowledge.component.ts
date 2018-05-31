import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdatePrisonerKnowledgeAction } from './action/prisoner-knowledge.action';
import { IPrisonerKnowledge } from './model/prisoner-knowledge.model';

import { getPrisonerKnowledge } from './reducer/prisoner-knowledge.reducer';

@Component({
  selector: 'app-prisoner-knowledge',
  templateUrl: './prisoner-knowledge.component.html'
})
export class PrisonerKnowledgeComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IPrisonerKnowledge;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerKnowledge>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IPrisonerKnowledge>) {
    super();
    this.stateSubscriber = store.select(getPrisonerKnowledge).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   * @param {IPrisonerKnowledge} value
   */
  saveContent({ value }: { value: IPrisonerKnowledge }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdatePrisonerKnowledgeAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['parom1-omic/previous-risk-assessment']);
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

}
