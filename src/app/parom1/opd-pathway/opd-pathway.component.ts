import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdatePersonalityDisorderPathwayAction } from './action/opd-pathway.action';
import { IOffenderPersonalityDisorderPathway } from './model/opd-pathway.model';

import { getOffenderPersonalityDisorderPathway } from './reducer/opd-pathway.reducer';

@Component({
  selector: 'app-opd-pathway',
  templateUrl: './opd-pathway.component.html'
})
export class OpdPathwayComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IOffenderPersonalityDisorderPathway;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerContact>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IOffenderPersonalityDisorderPathway>) {
    super();
    this.stateSubscriber = store.pipe(select(getOffenderPersonalityDisorderPathway)).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  saveContent({ value }: { value: IOffenderPersonalityDisorderPathway }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdatePersonalityDisorderPathwayAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['parom1/behaviour']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      opdPathway: [this.reportData.opdPathway, Validators.required],
      opdScreeningDate: this.formBuilder.group({
        day: this.reportData.opdScreeningDate.day,
        month: this.reportData.opdScreeningDate.month,
        year: this.reportData.opdScreeningDate.year,
      }),
      notScreenedReason: this.reportData.notScreenedReason
    });
  }

}
