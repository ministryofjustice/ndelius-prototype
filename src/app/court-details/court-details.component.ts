import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { getCourtDetails } from './reducer/court-details.reducer';

import { ICourtDetails } from './model/court-details.model';
import { UpdateCourtDetailsAction } from './action/court-details.action';

@Component({
  selector: 'app-court-details',
  templateUrl: './court-details.component.html'
})
export class CourtDetailsComponent {

  reportData: ICourtDetails;
  reportForm: FormGroup;
  formError: Boolean;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {DatePipe} datePipe
   * @param {Store<ICourtDetails>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private datePipe: DatePipe, private store: Store<ICourtDetails>) {
    store.select(getCourtDetails).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      court: this.reportData.court,
      localJusticeArea: this.reportData.localJusticeArea,
      hearingDate: this.reportData.hearingDate || this.datePipe.transform(Date.now(), 'dd/MM/yyyy')
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['information-sources']);
  }

  /**
   *
   * @param {any} valid
   * @param {any} value
   */
  onSubmit({ valid: valid, value: value }) {
    this.formError = !valid;
    if (valid) {

      // @TODO: Can this be fixed or is this an inherent issue within the jQuery based date picker?
      const submitData: ICourtDetails = {
        court: value.court,
        localJusticeArea: value.localJusticeArea,
        hearingDate: (<HTMLInputElement>document.getElementById('hearingDate')).value
      };

      this.store.dispatch(new UpdateCourtDetailsAction(submitData));
      this.continueJourney();
    }
  }

}
