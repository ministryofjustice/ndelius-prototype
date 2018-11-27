import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdateReleaseRiskManagementAction } from './action/release-risk-management.action';
import { IReleaseRiskManagement } from './model/release-risk-management.model';

import { getReleaseRiskManagement } from './reducer/release-risk-management.reducer';

@Component({
  selector: 'app-release-risk-management',
  templateUrl: './release-risk-management.component.html'
})
export class ReleaseRiskManagementComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IReleaseRiskManagement;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IReleaseRiskManagement>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IReleaseRiskManagement>) {
    super();
    this.stateSubscriber = store.select(getReleaseRiskManagement).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
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
   */
  protected continueJourney() {
    this.router.navigate(['parom1/resettlement-plan']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      riskManagementPlanRequired: [this.reportData.riskManagementPlanRequired, Validators.required],
      agencies: this.reportData.agencies,
      supportingAgencies: this.reportData.supportingAgencies,
      support: this.reportData.support,
      control: this.reportData.control,
      riskMeasures: this.reportData.riskMeasures,
      agencyActions: this.reportData.agencyActions,
      requirements: this.reportData.requirements,
      contactLevel: this.reportData.contactLevel,
      contingencyPlan: this.reportData.contingencyPlan
    });
  }

}
