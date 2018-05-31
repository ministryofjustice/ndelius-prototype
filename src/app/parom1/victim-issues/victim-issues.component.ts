import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdateVictimIssuesAction } from './action/victim-issues.action';
import { IVictimIssues } from './model/victim-issues.model';

import { getVictimIssues } from './reducer/victim-issues.reducer';

@Component({
  selector: 'app-victim-issues',
  templateUrl: './victim-issues.component.html'
})
export class VictimIssuesComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IVictimIssues;

  /**
   *
   * @param {Router} router
   * @param {DatePipe} datePipe
   * @param {FormBuilder} formBuilder
   * @param {Store<IVictimIssues>} store
   */
  constructor(private router: Router, private datePipe: DatePipe, private formBuilder: FormBuilder, private store: Store<IVictimIssues>) {
    super();
    this.stateSubscriber = store.select(getVictimIssues).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   * @param {IVictimIssues} value
   */
  saveContent({ value }: { value: IVictimIssues }) {
    const updatedValue = Object.assign(value, {
      saved: true,
      valid: this.reportForm.valid,
      vloContactDate: (<HTMLInputElement>document.getElementById('vloContactDate')).value
    });
    this.store.dispatch(new UpdateVictimIssuesAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['parom1/personality-disorder-pathway']);
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

}
