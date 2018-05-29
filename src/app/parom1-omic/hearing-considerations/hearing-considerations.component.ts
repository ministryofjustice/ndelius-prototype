import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { UpdateHearingConsiderationsAction } from './action/hearing-considerations.action';
import { IHearingConsiderations } from './model/hearing-considerations.model';

import { getHearingConsiderations } from './reducer/hearing-considerations.reducer';

@Component({
  selector: 'app-hearing-considerations',
  templateUrl: './hearing-considerations.component.html'
})
export class HearingConsiderationsComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IHearingConsiderations;
  reportForm: FormGroup;
  formError: boolean;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IHearingConsiderations>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IHearingConsiderations>) {
    this.stateSubscriber = store.select(getHearingConsiderations).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      oralHearingConsiderations: [this.reportData.oralHearingConsiderations, Validators.required]
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1-omic/sources']);
  }

  /**
   *
   */
  saveContent({ value }: { value: IHearingConsiderations }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateHearingConsiderationsAction(updatedValue));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IPrisonerKnowledge} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IHearingConsiderations }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid });

    this.store.dispatch(new UpdateHearingConsiderationsAction(updatedValue));

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
