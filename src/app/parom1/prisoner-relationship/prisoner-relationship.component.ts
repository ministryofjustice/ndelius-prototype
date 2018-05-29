import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { UpdatePrisonerKnowledgeAction } from './action/prisoner-relationship.action';
import { IPrisonerRelationship } from './model/prisoner-relationship.model';
import { getPrisonerRelationship } from './reducer/prisoner-relationship.reducer';

@Component({
  selector: 'app-prisoner-relationship',
  templateUrl: './prisoner-relationship.component.html'
})
export class PrisonerRelationshipComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IPrisonerRelationship;
  reportForm: FormGroup;
  formError: boolean;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerRelationship>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IPrisonerRelationship>) {
    this.stateSubscriber = store.select(getPrisonerRelationship).subscribe(data => {
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
  saveContent({ value }: { value: IPrisonerRelationship }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdatePrisonerKnowledgeAction(updatedValue));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IPrisonerRelationship} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IPrisonerRelationship }) {
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
