import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';

import { UpdatePersonalityDisorderPathwayAction } from './action/personality-disorder-pathway.action';
import { IPersonalityDisorderPathway } from './model/personality-disorder-pathway.model';
import { getPersonalityDisorderPathway } from './reducer/personality-disorder-pathway.reducer';


@Component({
  selector: 'app-previous-risk-assessment',
  templateUrl: './personality-disorder-pathway.component.html'
})
export class PersonalityDisorderPathwayComponent implements OnDestroy {

  private stateSubscriber: Subscription;

  reportData: IPersonalityDisorderPathway;
  reportForm: FormGroup;
  formError: boolean;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerKnowledge>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IPersonalityDisorderPathway>) {
    this.stateSubscriber = store.select(getPersonalityDisorderPathway).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({

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
  saveContent({ value }: { value: IPersonalityDisorderPathway }) {
    const updatedValue = Object.assign(value, { saved: true, valid: this.reportForm.valid });
    this.store.dispatch(new UpdatePersonalityDisorderPathwayAction(updatedValue));
  }

  /**
   *
   * @param {boolean} valid
   * @param {IPrisonerKnowledge} value
   */
  onSubmit({ valid, value }: { valid: boolean, value: IPersonalityDisorderPathway }) {
    this.formError = !valid;

    const updatedValue = Object.assign(value, { saved: true, valid: valid });

    this.store.dispatch(new UpdatePersonalityDisorderPathwayAction(updatedValue));

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
