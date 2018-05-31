import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdateHearingConsiderationsAction } from './action/hearing-considerations.action';
import { IHearingConsiderations } from './model/hearing-considerations.model';

import { getHearingConsiderations } from './reducer/hearing-considerations.reducer';

@Component({
  selector: 'app-hearing-considerations',
  templateUrl: './hearing-considerations.component.html'
})
export class HearingConsiderationsComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IHearingConsiderations;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IHearingConsiderations>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IHearingConsiderations>) {
    super();
    this.stateSubscriber = store.select(getHearingConsiderations).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   * @param {IHearingConsiderations} value
   */
  saveContent({ value }: { value: IHearingConsiderations }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateHearingConsiderationsAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['parom1-omic/sources']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      oralHearingConsiderations: [this.reportData.oralHearingConsiderations, Validators.required]
    });
  }

}
