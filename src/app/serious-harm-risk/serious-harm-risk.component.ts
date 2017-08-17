import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { getSeriousHarmRisk } from './reducer/serious-harm-risk.reducer';

import { ISeriousHarmRisk } from './model/serious-harm-risk.model';
import { UpdateSeriousHarmRiskAction } from './action/serious-harm-risk.action';

@Component({
  selector: 'app-serious-harm-risk',
  templateUrl: './serious-harm-risk.component.html'
})
export class SeriousHarmRiskComponent {

  reportData: ISeriousHarmRisk;
  reportForm: FormGroup;
  formError: Boolean;
  expandContent: Boolean;

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<ISeriousHarmRisk>) {
    store.select(getSeriousHarmRisk).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      riskOfSeriousHarm: this.reportData.riskOfSeriousHarm
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['proposed-sentence']);
  }

  /**
   *
   * @param {any} valid
   * @param {any} value
   */
  onSubmit({ valid: valid, value: value }) {
    this.formError = !valid;
    if (valid) {
      this.store.dispatch(new UpdateSeriousHarmRiskAction(value));
      this.continueJourney();
    }
  }

}
