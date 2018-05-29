import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IAddendumDetail } from './model/addendum-detail.model';
import { getAddendumDetail } from './reducer/addendum-detail.reducer';
import { UpdateAddendumDetailAction } from './action/addendum-detail.action';

@Component({
  selector: 'app-addendum-detail',
  templateUrl: './addendum-detail.component.html'
})
export class AddendumDetailComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IAddendumDetail;
  reportForm: FormGroup;
  formError: boolean;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<any>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<any>) {
    this.stateSubscriber = store.select(getAddendumDetail).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      detail: [this.reportData.detail, Validators.required]
    });
  }

  /**
   *
   * @param {IAddendumDetail} value
   */
  saveContent({ value }: { value: IAddendumDetail }) {
    this.store.dispatch(new UpdateAddendumDetailAction(value));
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['psr-addendum/signature']);
  }

  /**
   *
   * @param {boolean} valid
   * @param {IAddendumDetail} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IAddendumDetail }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid });
    this.saveContent({ value: updatedValue });

    if (valid) {
      this.continueJourney();
    }
  }

  /**
   *
   */
  ngOnDestroy() {
    this.stateSubscriber.unsubscribe();
  }

}
