import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { getCourtDetails } from './reducer/court-details.reducer';

import { ICourtDetails } from './model/court-details.model';
import { UpdateCourtDetailsAction } from './action/court-details.action';

import { localJusticeAreas } from '../../_shared/model/default-data';

@Component({
  selector: 'app-court-details',
  templateUrl: './court-details.component.html'
})
export class CourtDetailsComponent extends BaseComponent {

  /**
   *
   * @type {Array<string>}
   */
  localJusticeAreas = localJusticeAreas();
  /**
   *
   */
  private reportData: ICourtDetails;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {DatePipe} datePipe
   * @param {Store<ICourtDetails>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private datePipe: DatePipe, private store: Store<ICourtDetails>) {
    super();
    this.stateSubscriber = store.select(getCourtDetails).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   * @param {ICourtDetails} value
   */
  saveContent({ value }: { value: ICourtDetails }) {
    const updatedValue = Object.assign(value, {
      saved: true,
      valid: this.reportForm.valid,
      localJusticeArea: (<HTMLInputElement>document.getElementById('localJusticeArea')).value
    });
    this.store.dispatch(new UpdateCourtDetailsAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['psr-addendum/addendum-detail']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      court: [this.reportData.court, Validators.required],
      localJusticeArea: [this.reportData.localJusticeArea, Validators.required],
      hearingDate: this.formBuilder.group({
        day: [this.reportData.hearingDate.day, Validators.required],
        month: [this.reportData.hearingDate.month, Validators.required],
        year: [this.reportData.hearingDate.year, Validators.required]
      })
    });
  }

}
