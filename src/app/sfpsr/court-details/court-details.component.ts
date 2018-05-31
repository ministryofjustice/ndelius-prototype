import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { localJusticeAreas } from '../../_shared/model/default-data';
import { getCourtDetails } from './reducer/court-details.reducer';

import { ICourtDetails } from './model/court-details.model';
import { UpdateCourtDetailsAction } from './action/court-details.action';

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
   */
  saveContent({ value }: { value: ICourtDetails }) {
    const updatedValue = Object.assign(value, {
      saved: true,
      valid: this.reportForm.valid,
      localJusticeArea: (<HTMLInputElement>document.getElementById('localJusticeArea')).value,
      hearingDate: (<HTMLInputElement>document.getElementById('hearingDate')).value
    });
    this.store.dispatch(new UpdateCourtDetailsAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['sfpsr/information-sources']);
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

}
