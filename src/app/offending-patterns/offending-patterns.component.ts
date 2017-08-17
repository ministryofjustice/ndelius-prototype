import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IOffendingPattern } from './model/offending-pattern.model';
import { Store } from '@ngrx/store';

import { getOffendingPattern } from './reducer/offending-pattern.reducer';
import { UpdateOffendingPatternAction } from './action/offending-patters.action';

@Component({
  selector: 'app-offending-patterns',
  templateUrl: './offending-patterns.component.html'
})
export class OffendingPatternsComponent {

  reportData: IOffendingPattern;
  reportForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IOffendingPattern>) {
    store.select(getOffendingPattern).subscribe(state => {
      this.reportData = state;
      this.createForm();
    });
  }

  /**
   *
   */
  private createForm() {
    this.reportForm = this.formBuilder.group({
      patternOfOffending: this.reportData.patternOfOffending
    });
  }

  /**
   *
   */
  private continueJourney() {
    this.router.navigate(['risk-assessment']);
  }

  /**
   *
   */
  onSubmit({ value: value }) {
    this.store.dispatch(new UpdateOffendingPatternAction(value));
    this.continueJourney();
  }

}
