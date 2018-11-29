import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdatePrisonerContactAction } from './action/prisoner-contact.action';
import { IPrisonerContact } from './model/prisoner-contact.model';

import { getPrisonerRelationship } from './reducer/prisoner-contact.reducer';

@Component({
  selector: 'app-prisoner-relationship',
  templateUrl: './prisoner-contact.component.html'
})
export class PrisonerContactComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IPrisonerContact;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerContact>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IPrisonerContact>) {
    super();
    this.stateSubscriber = store.pipe(select(getPrisonerRelationship)).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  saveContent({ value }: { value: IPrisonerContact }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdatePrisonerContactAction(updatedValue));
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
      prisonerContactDetails: [this.reportData.prisonerContactDetails, Validators.required],
      prisonerFamilyContact: [this.reportData.prisonerFamilyContact, Validators.required],
      prisonerStaffContact: [this.reportData.prisonerStaffContact, Validators.required]
    });
  }

}
