import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { IBehaviour } from './model/behaviour.model';
import { UpdateBehaviourAction } from './action/behaviour.action';

import { getBehaviour } from './reducer/behaviour.reducer';

@Component({
  selector: 'app-behaviour',
  templateUrl: './behaviour.component.html'
})
export class BehaviourComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IBehaviour;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerContact>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IBehaviour>) {
    super();
    this.stateSubscriber = store.select(getBehaviour).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  saveContent({ value }: { value: IBehaviour }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateBehaviourAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['parom1/interventions']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      behaviourDetail: [this.reportData.behaviourDetail, Validators.required],
      rotlInformation: [this.reportData.rotlInformation, Validators.required]
    });
  }

}
