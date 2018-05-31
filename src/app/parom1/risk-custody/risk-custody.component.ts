import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdateRiskCustodyAction } from './action/risk-custody.action';
import { IRiskCustody } from './model/risk-custody.model';

import { getRiskCustody } from './reducer/risk-custody.reducer';

@Component({
  selector: 'app-risk-custody',
  templateUrl: './risk-custody.component.html'
})
export class RiskCustodyComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IRiskCustody;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerRelationship>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IRiskCustody>) {
    super();
    this.stateSubscriber = store.select(getRiskCustody).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  saveContent({ value }: { value: IRiskCustody }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateRiskCustodyAction(updatedValue));
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
