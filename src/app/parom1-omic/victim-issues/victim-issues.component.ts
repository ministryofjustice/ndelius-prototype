import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { UpdateVictimIssuesAction } from './action/victim-issues.action';
import { IVictimIssues } from './model/victim-issues.model';

import { getVictimIssues } from './reducer/victim-issues.reducer';

@Component({
  selector: 'app-victim-issues',
  templateUrl: './victim-issues.component.html'
})
export class VictimIssuesComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IVictimIssues;
  reportForm: FormGroup;
  formError: boolean;

  /**
   *
   * @param {Router} router
   * @param {DatePipe} datePipe
   * @param {FormBuilder} formBuilder
   * @param {Store<IVictimIssues>} store
   */
  constructor(private router: Router, private datePipe: DatePipe, private formBuilder: FormBuilder, private store: Store<IVictimIssues>) {
    this.stateSubscriber = store.select(getVictimIssues).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      impactOfOffence: [this.reportData.impactOfOffence, Validators.required],
      vloContactDate: [this.reportData.vloContactDate || this.datePipe.transform(Date.now(), 'dd/MM/yyyy'), Validators.required],
      victimContactService: [this.reportData.victimContactService, Validators.required],
      victimPersonalStatement: [this.reportData.victimPersonalStatement, Validators.required]
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1-omic/personality-disorder-pathway']);
  }

  /**
   *
   */
  saveContent({ value }: { value: IVictimIssues }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdateVictimIssuesAction(updatedValue));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IPrisonerKnowledge} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IVictimIssues }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid });

    this.store.dispatch(new UpdateVictimIssuesAction(updatedValue));

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
