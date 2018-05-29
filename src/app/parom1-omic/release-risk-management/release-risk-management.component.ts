import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { UpdateReleaseRiskManagementAction } from './action/release-risk-management.action';
import { IReleaseRiskManagement } from './model/release-risk-management.model';

import { getReleaseRiskManagement } from './reducer/release-risk-management.reducer';

@Component({
  selector: 'app-release-risk-management',
  templateUrl: './release-risk-management.component.html'
})
export class ReleaseRiskManagementComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IReleaseRiskManagement;
  reportForm: FormGroup;
  formError: boolean;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IReleaseRiskManagement>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IReleaseRiskManagement>) {
    this.stateSubscriber = store.select(getReleaseRiskManagement).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      agencies: [this.reportData.agencies, Validators.required],
      support: [this.reportData.support, Validators.required],
      control: [this.reportData.control, Validators.required],
      riskMeasures: [this.reportData.riskMeasures, Validators.required],
      agencyActions: [this.reportData.agencyActions, Validators.required],
      requirements: [this.reportData.requirements, Validators.required],
      contactLevel: [this.reportData.contactLevel, Validators.required],
      contingencyPlan: [this.reportData.contingencyPlan, Validators.required]
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1-omic/resettlement-plan']);
  }

  /**
   *
   */
  saveContent({ value }: { value: IReleaseRiskManagement }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateReleaseRiskManagementAction(updatedValue));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IPrisonerKnowledge} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IReleaseRiskManagement }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid });

    this.store.dispatch(new UpdateReleaseRiskManagementAction(updatedValue));

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
