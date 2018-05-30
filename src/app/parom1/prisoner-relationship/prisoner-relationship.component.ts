import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdatePrisonerRelationshipAction } from './action/prisoner-relationship.action';
import { IPrisonerRelationship } from './model/prisoner-relationship.model';

import { getPrisonerRelationship } from './reducer/prisoner-relationship.reducer';

@Component({
  selector: 'app-prisoner-relationship',
  templateUrl: './prisoner-relationship.component.html'
})
export class PrisonerRelationshipComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IPrisonerRelationship;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerRelationship>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IPrisonerRelationship>) {
    super();
    this.stateSubscriber = store.select(getPrisonerRelationship).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  saveContent({ value }: { value: IPrisonerRelationship }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdatePrisonerRelationshipAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['parom1/previous-risk-assessment']);
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
