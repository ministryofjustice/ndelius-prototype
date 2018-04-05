import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { UpdatePomPrisonerKnowledgeAction } from './action/pom-prisoner-knowledge.action';
import { IPomPrisonerKnowledge } from './model/pom-prisoner-knowledge.model';

import { getPomPrisionerKnowledge } from './reducer/pom-prisoner-knowledge.reducer';

@Component({
  selector: 'app-knowledge-and-contact',
  templateUrl: './pom-prisoner-knowledge.component.html'
})
export class PomPrisonerKnowledgeComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IPomPrisonerKnowledge;
  reportForm: FormGroup;
  formError: boolean;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPomPrisonerKnowledge>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IPomPrisonerKnowledge>) {
    this.stateSubscriber = store.select(getPomPrisionerKnowledge).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      lengthOfAssignment: [this.reportData.lengthOfAssignment, Validators.required],
      behaviourInPrison: [this.reportData.behaviourInPrison, Validators.required],
      riskOfAbsconding: [this.reportData.riskOfAbsconding, Validators.required],
      riskOfAbscondingDetails: [this.reportData.riskOfAbscondingDetails],
      rotl: [this.reportData.rotl, Validators.required],
      rotlDetails: [this.reportData.rotlDetails],
      furtherInformation: [this.reportData.furtherInformation, Validators.required]
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['parom1-omic/pom-recommendation']);
  }

  /**
   *
   */
  saveContent({ value }: { value: IPomPrisonerKnowledge }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdatePomPrisonerKnowledgeAction(updatedValue));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IPrisonerKnowledge} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IPomPrisonerKnowledge }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid });

    this.store.dispatch(new UpdatePomPrisonerKnowledgeAction(updatedValue));

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
