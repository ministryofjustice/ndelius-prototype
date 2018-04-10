import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { UpdateRiskCustodyAction } from './action/risk-custody.action';
import { IRiskCustody } from './model/risk-custody.model';
import { getRiskCustody } from './reducer/risk-custody.reducer';

@Component({
  selector: 'app-risk-custody',
  templateUrl: './risk-custody.component.html'
})
export class RiskCustodyComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IRiskCustody;
  reportForm: FormGroup;
  formError: boolean;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerKnowledge>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IRiskCustody>) {
    this.stateSubscriber = store.select(getRiskCustody).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
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

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1-omic/risk-serious-harm']);
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
   * @param {boolean} valid
   * @param {IPrisonerKnowledge} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IRiskCustody }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid });

    this.store.dispatch(new UpdateRiskCustodyAction(updatedValue));

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
