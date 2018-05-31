import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdatePomPrisonerKnowledgeAction } from './action/pom-prisoner-knowledge.action';
import { IPomPrisonerKnowledge } from './model/pom-prisoner-knowledge.model';

import { getPomPrisionerKnowledge } from './reducer/pom-prisoner-knowledge.reducer';

@Component({
  selector: 'app-knowledge-and-contact',
  templateUrl: './pom-prisoner-knowledge.component.html'
})
export class PomPrisonerKnowledgeComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IPomPrisonerKnowledge;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPomPrisonerKnowledge>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IPomPrisonerKnowledge>) {
    super();
    this.stateSubscriber = store.select(getPomPrisionerKnowledge).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   * @param {IPomPrisonerKnowledge} value
   */
  saveContent({ value }: { value: IPomPrisonerKnowledge }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdatePomPrisonerKnowledgeAction(updatedValue));
  }

  /**
   *
   */
  protected continueJourney() {
    this.router.navigate(['parom1-omic/pom-recommendation']);
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

}
