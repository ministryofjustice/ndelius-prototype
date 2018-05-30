import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { BaseComponent } from '../../_shared/components/base.component';

import { UpdatePersonalityDisorderPathwayAction } from './action/personality-disorder-pathway.action';
import { IPersonalityDisorderPathway } from './model/personality-disorder-pathway.model';

import { getPersonalityDisorderPathway } from './reducer/personality-disorder-pathway.reducer';


@Component({
  selector: 'app-personality-disorder-pathway',
  templateUrl: './personality-disorder-pathway.component.html'
})
export class PersonalityDisorderPathwayComponent extends BaseComponent {

  /**
   *
   */
  private reportData: IPersonalityDisorderPathway;

  /**
   * @constructor
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {Store<IPrisonerRelationship>} store
   */
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IPersonalityDisorderPathway>) {
    super();
    this.stateSubscriber = store.select(getPersonalityDisorderPathway).subscribe(data => {
      this.reportData = data;
      this.createForm();
    });
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
   */
  protected continueJourney() {
    this.router.navigate(['parom1/behaviour']);
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      opdPathway: [this.reportData.opdPathway, Validators.required]
    });
  }

}
