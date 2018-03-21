import { Component, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { getCourtDetails } from './reducer/court-details.reducer';

import { ICourtDetails } from './model/court-details.model';
import { UpdateCourtDetailsAction } from './action/court-details.action';

import { localJusticeAreas } from '../../_shared/model/default-data';

@Component({
  selector: 'app-court-details',
  templateUrl: './court-details.component.html'
})
export class CourtDetailsComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: ICourtDetails;
  reportForm: FormGroup;
  formError: boolean;
  localJusticeAreas = localJusticeAreas();

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {DatePipe} datePipe
   * @param {Store<ICourtDetails>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private datePipe: DatePipe, private store: Store<ICourtDetails>) {
    this.stateSubscriber = store.select(getCourtDetails).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      court: [this.reportData.court, Validators.required],
      localJusticeArea: [this.reportData.localJusticeArea, Validators.required],
      hearingDate: [this.reportData.hearingDate || this.datePipe.transform(Date.now(), 'dd/MM/yyyy'), Validators.required]
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['psr-addendum/addendum-detail']);
  }

  /**
   *
   * @param {boolean} valid
   * @param {ICourtDetails} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: ICourtDetails }) {
    this.formError = !valid;

    // @TODO: Can this be fixed or is this an inherent issue within the jQuery based date picker?
    const updatedValue = Object.assign(value, {
      saved: true,
      valid: valid,
      localJusticeArea: (<HTMLInputElement>document.getElementById('localJusticeArea')).value,
      hearingDate: (<HTMLInputElement>document.getElementById('hearingDate')).value,
    });
    this.store.dispatch(new UpdateCourtDetailsAction(updatedValue));

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
