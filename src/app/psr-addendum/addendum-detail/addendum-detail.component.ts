import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormBuilder, Validators } from '@angular/forms';

import { BaseComponent } from '../../_shared/components/base.component';

import { getAddendumDetail } from './reducer/addendum-detail.reducer';

import { IAddendumDetail } from './model/addendum-detail.model';
import { UpdateAddendumDetailAction } from './action/addendum-detail.action';

@Component({
  selector: 'app-addendum-detail',
  templateUrl: './addendum-detail.component.html'
})
export class AddendumDetailComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IAddendumDetail;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<any>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<any>) {
    super();
    this.stateSubscriber = store.select(getAddendumDetail).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   * @param {IAddendumDetail} value
   */
  saveContent({ value }: { value: IAddendumDetail }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateAddendumDetailAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['psr-addendum/signature']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      detail: [this.reportData.detail, Validators.required]
    });
  }

}
