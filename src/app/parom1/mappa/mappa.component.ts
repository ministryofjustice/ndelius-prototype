import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdateMappaAction } from './action/mappa.action';
import { IMappa } from './model/mappa.model';

import { getMappa } from './reducer/mappa.reducer';

@Component({
  selector: 'app-sentence-plan',
  templateUrl: './mappa.component.html'
})
export class MappaComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IMappa;

  /**
   *
   * @param {Router} router
   * @param {DatePipe} datePipe
   * @param {FormBuilder} formBuilder
   * @param {Store<IMappa>} store
   */
  constructor(private router: Router, private datePipe: DatePipe, private formBuilder: FormBuilder, private store: Store<IMappa>) {
    super();
    this.stateSubscriber = store.pipe(select(getMappa)).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  saveContent({ value }: { value: IMappa }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateMappaAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['parom1/risk-assessment']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      eligibleForMappa: [this.reportData.eligibleForMappa, Validators.required],
      screenedDate: this.formBuilder.group({
        day: this.reportData.screenedDate.day,
        month: this.reportData.screenedDate.month,
        year: this.reportData.screenedDate.year
      }),
      mappaCategory: this.reportData.mappaCategory,
      mappaLevel: this.reportData.mappaLevel
    });
  }
}
