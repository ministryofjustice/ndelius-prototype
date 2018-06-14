import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdateInterventionsAction } from './action/interventions.action';
import { IInterventions } from './model/interventions.model';

import { getInterventions } from './reducer/interventions.reducer';

@Component({
  selector: 'app-interventions',
  templateUrl: './interventions.component.html'
})
export class InterventionsComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IInterventions;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerContact>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IInterventions>) {
    super();
    this.stateSubscriber = store.select(getInterventions).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   * @param {IInterventions} value
   */
  saveContent({ value }: { value: IInterventions }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateInterventionsAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['parom1/sentence-plan']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      interventionsList: [this.reportData.interventionsList, Validators.required],
      interventionsSummary: [this.reportData.interventionsSummary, Validators.required]
    });
  }

}
