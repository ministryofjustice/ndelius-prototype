import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdateRiskCommunityAction } from './action/risk-community.action';
import { IRiskCommunity } from './model/risk-community.model';

import { getRiskCommunity } from './reducer/risk-community.reducer';

@Component({
  selector: 'app-risk-community',
  templateUrl: './risk-community.component.html'
})
export class RiskCommunityComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IRiskCommunity;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerRelationship>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IRiskCommunity>) {
    super();
    this.stateSubscriber = store.select(getRiskCommunity).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  saveContent({ value }: { value: IRiskCommunity }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateRiskCommunityAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['parom1/risk-custody']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      riskPublic: [this.reportData.riskPublic, Validators.required],
      riskKnownAdult: [this.reportData.riskKnownAdult, Validators.required],
      riskChildren: [this.reportData.riskChildren, Validators.required],
      riskPrisoners: [this.reportData.riskPrisoners, Validators.required],
      riskSelf: [this.reportData.riskSelf, Validators.required],
      riskStaff: [this.reportData.riskStaff, Validators.required],
      riskOthers: [this.reportData.riskOthers, Validators.required]
    });
  }

}
