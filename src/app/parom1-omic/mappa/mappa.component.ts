import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { UpdateMappaAction } from './action/mappa.action';
import { IMappa } from './model/mappa.model';

import { getMappa } from './reducer/mappa.reducer';

@Component({
  selector: 'app-sentence-plan',
  templateUrl: './mappa.component.html'
})
export class MappaComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IMappa;
  reportForm: FormGroup;
  formError: boolean;

  /**
   *
   * @param {Router} router
   * @param {DatePipe} datePipe
   * @param {FormBuilder} formBuilder
   * @param {Store<IMappa>} store
   */
  constructor(private router: Router, private datePipe: DatePipe, private formBuilder: FormBuilder, private store: Store<IMappa>) {
    this.stateSubscriber = store.select(getMappa).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      screenedDate: [this.reportData.screenedDate || this.datePipe.transform(Date.now(), 'dd/MM/yyyy'), Validators.required],
      mappaCategory: [this.reportData.mappaCategory, Validators.required],
      mappaLevel: [this.reportData.mappaLevel, Validators.required]
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1-omic/fail']);
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
   * @param {boolean} valid
   * @param {IPrisonerKnowledge} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IMappa }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid });

    this.store.dispatch(new UpdateMappaAction(updatedValue));

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
