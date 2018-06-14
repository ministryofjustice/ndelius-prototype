import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdateRiskPrisonerAction } from './action/risk-prisoner.action';
import { IRiskPrisoner } from './model/risk-prisoner.model';

import { getRiskPrisoner } from './reducer/risk-prisoner.reducer';

@Component({
  selector: 'app-risk-prisoner',
  templateUrl: './risk-prisoner.component.html'
})
export class RiskPrisonerComponent extends BaseComponent {

  /**
   *
   */
  expandContent: boolean;

  /**
   *
   */
  private reportData: IRiskPrisoner;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IRiskAssessment>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IRiskPrisoner>) {
    super();
    this.stateSubscriber = store.select(getRiskPrisoner).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   */
  saveContent({ value }: { value: IRiskPrisoner }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateRiskPrisonerAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['parom1/risk-serious-harm']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      selfHarmCommunity: [this.reportData.selfHarmCommunity, Validators.required],
      selfHarmCustody: [this.reportData.selfHarmCustody, Validators.required],
      harmOthersCommunity: [this.reportData.harmOthersCommunity, Validators.required],
      harmOthersCustody: [this.reportData.harmOthersCustody, Validators.required]
    });
  }

}
